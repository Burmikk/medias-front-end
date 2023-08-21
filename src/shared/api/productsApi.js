import { instance } from "./receiptApi";

export const getAllProducts = () => {
    return instance.get("products");
};
