import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateReceipt, fetchCloseReceipt } from "./receipt-operations";
const initialState = {
    receipt: [],
    receiptId: "",
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
                state.receiptId = payload._id;
            })
            .addCase(fetchCreateReceipt.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.error = payload;
            })
            .addCase(fetchCloseReceipt.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchCloseReceipt.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchCloseReceipt.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.error = payload;
            });
    },

    reducers: {
        addProduct: (state, { payload }) => {
            const existingProduct = state.receipt.find((item) => item._id === payload._id);
            if (!existingProduct) {
                state.receipt = [...state.receipt, payload];
            }
        },
        removeProduct: (state, { payload }) => {
            state.receipt = state.receipt.filter((item) => item._id !== payload);
        },
        closeReceipt: (state) => {
            state.receipt = [];
        },
        increaseProduct: (state, { payload }) => {
            const existingProduct = state.receipt.find((item) => item._id === payload._id);
            existingProduct.quantity += 1;
        },
    },
});

export const { addProduct, removeProduct, closeReceipt, increaseProduct } = receiptSlice.actions;
export default receiptSlice.reducer;
