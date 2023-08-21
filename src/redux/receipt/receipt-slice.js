import { createSlice } from "@reduxjs/toolkit";
import {
    fetchCreateReceipt,
    fetchCloseReceipt,
    fetchAddItem,
    fetchEditItem,
    fetchRemoveItem,
} from "./receipt-operations";
const initialState = {
    productsList: [],
    receipt: [],
    receiptInfo: {},
    error: null,
    isLoading: false,
};

const receiptSlice = createSlice({
    name: "receipt",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreateReceipt.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchCreateReceipt.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.receiptInfo = payload.data;
                state.receipt = [payload.item];
            })
            .addCase(fetchCreateReceipt.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchCloseReceipt.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchCloseReceipt.fulfilled, (state) => {
                state.isLoading = false;
                state.receipt = [];
                state.receiptInfo = {};
            })
            .addCase(fetchCloseReceipt.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchAddItem.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchAddItem.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.receipt = [...state.receipt, payload];
            })
            .addCase(fetchAddItem.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchEditItem.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchEditItem.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                const existingItemIndex = state.receipt.findIndex((product) => product._id === payload._id);
                if (existingItemIndex !== -1) {
                    state.receipt[existingItemIndex].quantity = payload.quantity;
                }
            })
            .addCase(fetchEditItem.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchRemoveItem.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchRemoveItem.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.receipt = state.receipt.filter((item) => item._id !== payload);
            })
            .addCase(fetchRemoveItem.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },

    reducers: {
        addProductsList: (state, { payload }) => {
            state.productsList = payload;
        },
    },
});

export const { addProductsList } = receiptSlice.actions;
export default receiptSlice.reducer;
