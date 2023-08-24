import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import receiptSlice from "./receipt/receipt-slice";
import productsSlice from "./products/products-slice";

const persistConfig = {
    key: "receipt",
    storage,
    whitelist: ["receipt", "receiptInfo"],
};

const persistedReducer = persistReducer(persistConfig, receiptSlice);

const rootReducer = combineReducers({
    products: productsSlice,
    receipt: persistedReducer,
});

export default rootReducer;
