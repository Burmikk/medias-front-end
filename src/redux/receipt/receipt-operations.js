import { createAsyncThunk } from "@reduxjs/toolkit";
import { createReceipt } from "../../shared/api/receiptApi";

export const fetchCreateReceipt = createAsyncThunk("receipt/fetchCreateReceipt", async (value, { rejectWithValue }) => {
    try {
        await createReceipt(value);
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});
