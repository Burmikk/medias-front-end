import { useDispatch } from "react-redux";
import scss from "./item.module.scss";
import { useState, useEffect } from "react";
import { increaseProduct, decreaseProduct, removeProduct } from "../../../redux/receipt/receipt-slice";
import { fetchEditItem } from "../../../redux/receipt/receipt-operations";

const Item = ({ product, productIndex }) => {
    // const [quantity, setQuantity] = useState(product.quantity);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (quantity === 0) {
    //         dispatch(removeProduct(product._id));
    //     }
    // }, [quantity, dispatch, product]);
    console.log("render");

    useEffect(() => {
        if (product.quantity === 0) {
            dispatch(removeProduct(product._id));
        }
    }, [dispatch, product]);

    const handleIncrease = (value) => {
        // setQuantity((prevState) => (prevState += 1));
        dispatch(increaseProduct(value));

        dispatch(fetchEditItem({ item_id: product._id, quantity: product.quantity + 1 }));
    };
    const handleDecrease = (value) => {
        // setQuantity((prevState) => (prevState -= 1));
        dispatch(decreaseProduct(value));
        dispatch(fetchEditItem({ item_id: product._id, quantity: product.quantity - 1 }));
    };

    const handleRemove = (value) => {
        dispatch(removeProduct(value));
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
