import { instance } from "./receiptApi";

export const createItem = (value) => {
    return instance.post("items/", { ...value });
};

export const editItem = (value) => {
    return instance.patch(`items/${value.item_id}`, { quantity: value.quantity });
};

export const removeItem = (value) => {
    console.log("value--->", value);
    return instance.delete(`items/${value}`);
};
