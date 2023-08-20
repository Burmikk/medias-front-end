import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    receipt: [],
};

const receiptSlice = createSlice({
    name: "receipt",
    initialState,
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
    },
});

export const { addProduct, removeProduct, closeReceipt } = receiptSlice.actions;
export default receiptSlice.reducer;
