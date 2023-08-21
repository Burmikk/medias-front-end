import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import receiptSlice from "./receipt/receipt-slice";

const persistConfig = {
    key: "receipt",
    storage,
    whitelist: ["receipt", "receiptInfo"],
};

const persistedReducer = persistReducer(persistConfig, receiptSlice);

const rootReducer = combineReducers({
    receipt: persistedReducer,
});

export default rootReducer;
