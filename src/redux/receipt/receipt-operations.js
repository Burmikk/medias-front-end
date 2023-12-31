import { createAsyncThunk } from "@reduxjs/toolkit";
import { createReceipt, closeReceipt } from "../../shared/api/receiptApi";
import { createItem, editItem, removeItem } from "../../shared/api/itemsApi";
import formatedDate from "../../utils/handleDate";
import { toast } from "react-toastify";

export const fetchCreateReceipt = createAsyncThunk(
    "receipt/fetchCreateReceipt",
    async (value, { rejectWithValue, getState }) => {
        try {
            const { data } = await createReceipt(value.price);
            const { data: item } = await createItem({ ...value, receipt_id: data._id });
            const { products } = getState();
            const selectedProduct = products.productsList.find((product) => product._id === item.product_id);
            if (selectedProduct) {
                item.name = selectedProduct.name;
            }
            const receiptCreatedDate = formatedDate();
            data.createdDate = receiptCreatedDate;

            return { data, item };
        } catch ({ response }) {
            return rejectWithValue(response);
        }
    }
);

export const fetchCloseReceipt = createAsyncThunk("receipt/fetchCloseReceipt", async (value, { rejectWithValue }) => {
    try {
        const data = await closeReceipt(value);
        if (data.status === 200) {
            toast.success("Чек успішно закрито", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});

export const fetchAddItem = createAsyncThunk("itmes/fetchAddItem", async (value, { rejectWithValue, getState }) => {
    try {
        const { data } = await createItem(value);
        const { products } = getState();
        const selectedProduct = products.productsList.find((product) => product._id === data.product_id);
        if (selectedProduct) {
            data.name = selectedProduct.name;
        }
        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});

export const fetchEditItem = createAsyncThunk("itmes/fetchEditItem", async (value, { rejectWithValue }) => {
    try {
        const { data } = await editItem(value);

        return data;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});

export const fetchRemoveItem = createAsyncThunk("itmes/fetchRemoveItem", async (value, { rejectWithValue }) => {
    try {
        await removeItem(value);
        return value;
    } catch ({ response }) {
        return rejectWithValue(response);
    }
});
