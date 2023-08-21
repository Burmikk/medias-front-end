import { useDispatch } from "react-redux";
import scss from "./item.module.scss";
import { useEffect } from "react";
import { fetchEditItem, fetchRemoveItem } from "../../../redux/receipt/receipt-operations";

const Item = ({ product, productIndex }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (product.quantity === 0) {
            dispatch(fetchRemoveItem(product._id));
        }
    }, [dispatch, product]);

    const handleIncrease = () => {
        const newQuantity = product.quantity + 1;

        dispatch(fetchEditItem({ item_id: product._id, quantity: newQuantity }));
    };
    const handleDecrease = () => {
        const newQuantity = product.quantity - 1;
        if (newQuantity > 0) {
            dispatch(fetchEditItem({ item_id: product._id, quantity: newQuantity }));
        } else {
            handleRemove();
        }
    };

    const handleRemove = () => {
        dispatch(fetchRemoveItem(product._id));
    };

    return (
        <>
            <li key={product._id} className={scss.receipt_item}>
                <p className={scss.number}>{productIndex + 1}</p>
                <p className={scss.name}>{product.name}</p>
                <div className={scss.quantity_wrapper}>
                    <button className={scss.btn} onClick={() => handleDecrease(product._id)}>
                        -
                    </button>
                    <p className={scss.quantity}>{product.quantity}</p>
                    <button className={scss.btn} onClick={() => handleIncrease(product._id)}>
                        +
                    </button>
                </div>
                <p className={scss.summ}>{product.price * product.quantity}</p>
                <button className={scss.btn} onClick={() => handleRemove(product._id)}>
                    Х
                </button>
            </li>
        </>
    );
};
export default Item;
