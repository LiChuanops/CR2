export interface SKU {
  type: "CTN" | "PKT";
  name: string;
  packaging: string;
  itemCode: string;
}

export interface Product {
  barcode: string;
  name: string;
  packaging: string;
  skus: SKU[];
  scanned: boolean;
}

export interface RecordItem {
  name: string;
  packaging: string;
  boxQuantity: number;
  pieceQuantity: number;
  timestamp: string;
}

export interface ScanRecord {
  timestamp: string;
  items: RecordItem[];
}

export interface Operator {
  id: string;
  name: string;
}

export interface SubmissionRow {
  sheetName: string;
  date: string;
  time: string;
  name: string;
  packaging: string;
  boxQuantity: number;
  pieceQuantity: number;
  ctnItemCode: string;
  pktItemCode: string;
  counter: string;
}

export type Page = "scan" | "records";
