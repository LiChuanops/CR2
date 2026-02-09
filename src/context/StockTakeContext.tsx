import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Product, ScanRecord, Page } from "@/types";
import { initialProducts } from "@/data/products";

interface AlertState {
  open: boolean;
  message: string;
}

interface StockTakeState {
  products: Product[];
  scanRecords: ScanRecord[];
  currentPage: Page;
  selectedProduct: Product | null;
  modalOpen: boolean;
  alert: AlertState;
  sideMenuOpen: boolean;
  operator: string;
  isSubmitting: boolean;
}

type Action =
  | { type: "SET_PAGE"; page: Page }
  | { type: "SELECT_PRODUCT"; product: Product }
  | { type: "CLOSE_MODAL" }
  | { type: "SUBMIT_QUANTITY"; boxQuantity: number; pieceQuantity: number }
  | { type: "UPDATE_RECORD"; recordIndex: number; itemIndex: number; boxQuantity: number; pieceQuantity: number }
  | { type: "SHOW_ALERT"; message: string }
  | { type: "CLOSE_ALERT" }
  | { type: "TOGGLE_SIDE_MENU" }
  | { type: "SET_SIDE_MENU"; open: boolean }
  | { type: "SET_OPERATOR"; operator: string }
  | { type: "RESET_AFTER_SUBMIT" }
  | { type: "SET_SUBMITTING"; isSubmitting: boolean };

function formatTimestamp(): string {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  const time = now.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${day}/${month}/${year} ${time}`;
}

const initialState: StockTakeState = {
  products: initialProducts.map((p) => ({ ...p, scanned: false })),
  scanRecords: [],
  currentPage: "scan",
  selectedProduct: null,
  modalOpen: false,
  alert: { open: false, message: "" },
  sideMenuOpen: false,
  operator: "",
  isSubmitting: false,
};

function stockTakeReducer(state: StockTakeState, action: Action): StockTakeState {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, currentPage: action.page };

    case "SELECT_PRODUCT":
      return { ...state, selectedProduct: action.product, modalOpen: true };

    case "CLOSE_MODAL":
      return { ...state, selectedProduct: null, modalOpen: false };

    case "SUBMIT_QUANTITY": {
      if (!state.selectedProduct) return state;
      const timestamp = formatTimestamp();
      const newRecord: ScanRecord = {
        timestamp,
        items: [
          {
            name: state.selectedProduct.name,
            packaging: state.selectedProduct.packaging,
            boxQuantity: action.boxQuantity,
            pieceQuantity: action.pieceQuantity,
            timestamp,
          },
        ],
      };
      return {
        ...state,
        products: state.products.map((p) =>
          p.barcode === state.selectedProduct!.barcode ? { ...p, scanned: true } : p
        ),
        scanRecords: [newRecord, ...state.scanRecords],
        selectedProduct: null,
        modalOpen: false,
      };
    }

    case "UPDATE_RECORD": {
      const newRecords = [...state.scanRecords];
      const record = { ...newRecords[action.recordIndex] };
      const items = [...record.items];
      items[action.itemIndex] = {
        ...items[action.itemIndex],
        boxQuantity: action.boxQuantity,
        pieceQuantity: action.pieceQuantity,
      };
      record.items = items;
      newRecords[action.recordIndex] = record;
      return { ...state, scanRecords: newRecords };
    }

    case "SHOW_ALERT":
      return { ...state, alert: { open: true, message: action.message } };

    case "CLOSE_ALERT":
      return { ...state, alert: { open: false, message: "" } };

    case "TOGGLE_SIDE_MENU":
      return { ...state, sideMenuOpen: !state.sideMenuOpen };

    case "SET_SIDE_MENU":
      return { ...state, sideMenuOpen: action.open };

    case "SET_OPERATOR":
      return { ...state, operator: action.operator };

    case "RESET_AFTER_SUBMIT":
      return {
        ...state,
        products: state.products.map((p) => ({ ...p, scanned: false })),
        scanRecords: [],
        operator: "",
        isSubmitting: false,
      };

    case "SET_SUBMITTING":
      return { ...state, isSubmitting: action.isSubmitting };

    default:
      return state;
  }
}

const StockTakeContext = createContext<{
  state: StockTakeState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function StockTakeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(stockTakeReducer, initialState);
  return (
    <StockTakeContext.Provider value={{ state, dispatch }}>
      {children}
    </StockTakeContext.Provider>
  );
}

export function useStockTake() {
  const context = useContext(StockTakeContext);
  if (!context) {
    throw new Error("useStockTake must be used within StockTakeProvider");
  }
  return context;
}
