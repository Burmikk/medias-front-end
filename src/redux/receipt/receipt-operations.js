import { createAsyncThunk } from "@reduxjs/toolkit";
import { createReceipt, closeReceipt } from "../../shared/api/receiptApi";

export const fetchCreateReceipt = createAsyncThunk("receipt/fetchCreateReceipt", async (value, { rejectWithValue }) => {
    try {
        const { data } = await createReceipt(value);
        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});

export const fetchCloseReceipt = createAsyncThunk("receipt/fetchCloseReceipt", async (value, { rejectWithValue }) => {
    try {
        await closeReceipt(value);
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});
