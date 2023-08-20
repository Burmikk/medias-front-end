import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    receipt: [],
};

const receiptSlice = createSlice({
    name: "receipt",
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            state.receipt = [...state.receipt, payload];
        },
    },
});

export const { addProduct } = receiptSlice.actions;
export default receiptSlice.reducer;
