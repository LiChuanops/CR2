import { useCallback, useEffect } from "react";
import { useStockTake } from "@/context/StockTakeContext";
import { GOOGLE_SHEETS_URL, LOCATION } from "@/lib/googleSheets";
import type { SubmissionRow } from "@/types";

function getPendingSubmissions(): SubmissionRow[][] {
  const pending = sessionStorage.getItem("pendingSubmissions");
  return pending ? JSON.parse(pending) : [];
}

function savePending(data: SubmissionRow[]) {
  const pending = getPendingSubmissions();
  pending.push(data);
  sessionStorage.setItem("pendingSubmissions", JSON.stringify(pending));
}

function clearPending() {
  sessionStorage.removeItem("pendingSubmissions");
}

export function useOfflineSubmit() {
  const { state, dispatch } = useStockTake();

  const buildSubmissionData = useCallback(
    (counter: string): SubmissionRow[] => {
      return state.scanRecords.flatMap((record) =>
        record.items.map((item) => {
          const product = state.products.find((p) => p.name === item.name);
          const ctnSku = product?.skus.find((s) => s.type === "CTN");
          const pktSku = product?.skus.find((s) => s.type === "PKT");
          const [date, time] = item.timestamp.split(" ");
          return {
            sheetName: LOCATION,
            date,
            time,
            name: item.name,
            packaging: item.packaging,
            boxQuantity: item.boxQuantity,
            pieceQuantity: item.pieceQuantity,
            ctnItemCode: ctnSku?.itemCode ?? "",
            pktItemCode: pktSku?.itemCode ?? "",
            counter,
          };
        })
      );
    },
    [state.scanRecords, state.products]
  );

  const submitToGoogleSheet = useCallback(
    async (counter: string) => {
      if (!counter) {
        dispatch({
          type: "SHOW_ALERT",
          message: "请选择盘点人员！Please choose the staff for inventory count!",
        });
        return;
      }

      if (state.scanRecords.length === 0) {
        dispatch({
          type: "SHOW_ALERT",
          message: "没有可提交的记录！There are no records to submit!",
        });
        return;
      }

      dispatch({ type: "SET_SUBMITTING", isSubmitting: true });

      const data = buildSubmissionData(counter);

      try {
        if (!navigator.onLine) {
          savePending(data);
          dispatch({
            type: "SHOW_ALERT",
            message:
              "无网络连接。数据已保存，将在有网络时自动提交。No network connection. Data has been saved and will be automatically submitted when the network is available.",
          });
          dispatch({ type: "SET_SUBMITTING", isSubmitting: false });
          return;
        }

        // Submit pending data first
        const pendingSubmissions = getPendingSubmissions();
        if (pendingSubmissions.length > 0) {
          for (const pendingData of pendingSubmissions) {
            const res = await fetch(GOOGLE_SHEETS_URL, {
              method: "POST",
              body: JSON.stringify(pendingData),
            });
            if (!res.ok) throw new Error("Historical data submission failed");
          }
          clearPending();
        }

        // Submit current data
        const response = await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (response.ok) {
          dispatch({ type: "RESET_AFTER_SUBMIT" });
          dispatch({
            type: "SHOW_ALERT",
            message: "数据提交成功！Submission completed successfully!",
          });
        } else {
          throw new Error("Failed to submit");
        }
      } catch (error) {
        console.error("Error:", error);
        savePending(data);
        dispatch({
          type: "SHOW_ALERT",
          message:
            "提交失败，数据已保存，将在下次提交时重试！Submission failed. Data has been saved and will be retried on the next submission attempt!",
        });
        dispatch({ type: "SET_SUBMITTING", isSubmitting: false });
      }
    },
    [state.scanRecords, buildSubmissionData, dispatch]
  );

  // Auto-retry on reconnect
  useEffect(() => {
    const handleOnline = async () => {
      const pending = getPendingSubmissions();
      if (pending.length > 0) {
        dispatch({
          type: "SHOW_ALERT",
          message:
            "检测到网络连接，正在提交保存的数据...Network connection detected, submitting saved data...",
        });
        try {
          for (const pendingData of pending) {
            await fetch(GOOGLE_SHEETS_URL, {
              method: "POST",
              body: JSON.stringify(pendingData),
            });
          }
          clearPending();
          dispatch({
            type: "SHOW_ALERT",
            message: "离线数据提交成功！Offline data submitted successfully!",
          });
        } catch {
          dispatch({
            type: "SHOW_ALERT",
            message: "离线数据提交失败！Offline data submission failed!",
          });
        }
      }
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [dispatch]);

  return { submitToGoogleSheet };
}
