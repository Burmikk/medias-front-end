import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsList } from "./products-operation";

const initialState = {
    productsList: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsList.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchProductsList.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.productsList = payload;
            })
            .addCase(fetchProductsList.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export default productsSlice.reducer;
