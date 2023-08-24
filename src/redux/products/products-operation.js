import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../shared/api/productsApi";
import products from "../../components/ProducstList/produtsList.json";

export const fetchProductsList = createAsyncThunk("receipt/fetchProductsList", async (_, { rejectWithValue }) => {
    try {
        const { data } = await getAllProducts();
        if (data.length === 0) {
            return products;
        } else {
            return data;
        }
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});
