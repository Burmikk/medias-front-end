import { createAsyncThunk } from "@reduxjs/toolkit";
import { createReceipt, closeReceipt } from "../../shared/api/receiptApi";
import { createItem, editItem } from "../../shared/api/itemsApi";

export const fetchCreateReceipt = createAsyncThunk("receipt/fetchCreateReceipt", async (value, { rejectWithValue }) => {
    try {
        const { data } = await createReceipt(value.price);

        await createItem({ ...value, receipt_id: data._id });
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

export const fetchAddItem = createAsyncThunk("itmes/fetchAddItem", async (value, { rejectWithValue, getState }) => {
    try {
        const { data } = await createItem(value);
        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});

export const fetchEditItem = createAsyncThunk("itmes/fetchEditItem", async (value, { rejectWithValue, getState }) => {
    try {
        if (value.quantity > 0) {
            const { data } = await editItem(value);
            return data;
        }
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});
