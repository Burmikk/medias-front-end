import { configureStore } from "@reduxjs/toolkit";
import receiptSlice from "./receipt/receipt-slice";

export const store = configureStore({
    reducer: {
        receipt: receiptSlice,
    },
});
