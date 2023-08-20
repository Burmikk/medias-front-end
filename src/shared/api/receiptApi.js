import axios from "axios";

export const instance = axios.create({
    baseURL: "https://medias.onrender.com/",
});

export const createReceipt = (value) => {
    return instance.post("receipt/", { total: value });
};
