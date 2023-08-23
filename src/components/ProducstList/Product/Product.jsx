import { useDispatch, useSelector } from "react-redux";
import scss from "./product.module.scss";
import { selectReceiptId, selectReceiptList } from "../../../redux/receipt/receipt-selectors";
import { fetchAddItem, fetchCreateReceipt } from "../../../redux/receipt/receipt-operations";
import { useEffect, useState } from "react";
const Product = ({ item }) => {
    const [select, setSelect] = useState(false);
    const receiptId = useSelector(selectReceiptId);
    const receipt = useSelector(selectReceiptList);
    const dispatch = useDispatch();

    useEffect(() => {
        const isSelect = receipt.find((product) => product.product_id === item._id);
        if (isSelect) {
            setSelect(true);
        } else {
            setSelect(false);
        }
    }, [receipt, item._id]);

    const addToReceipt = (value) => {
        const itemInfo = {
            product_id: value._id,
            quantity: 1,
            price: value.price,
        };
        if (!receiptId) {
            dispatch(fetchCreateReceipt(itemInfo));
        } else {
            const isProductDublicate = receipt.find((product) => {
                return product.product_id === itemInfo.product_id;
            });

            if (!isProductDublicate) {
                dispatch(fetchAddItem({ ...itemInfo, receipt_id: receiptId }));
            }
        }
    };
    return (
        <>
            <li
                style={{ backgroundColor: select ? "#8fef86" : "#f6f6f6" }}
                className={scss.products_item}
                key={item._id}
                onClick={() => addToReceipt(item)}
            >
                <p>{item.name}</p>
                <p>{`${item.price} грн.`}</p>
            </li>
        </>
    );
};
export default Product;
