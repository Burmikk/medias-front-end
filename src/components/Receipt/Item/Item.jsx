import { useDispatch } from "react-redux";
import scss from "./item.module.scss";
import { useState, useEffect } from "react";
import { increaseProduct, removeProduct } from "../../../redux/receipt/receipt-slice";

const Item = ({ product, productIndex }) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const dispatch = useDispatch();

    useEffect(() => {
        if (quantity === 0) {
            dispatch(removeProduct(product._id));
        }
    }, [quantity, dispatch, product]);

    const handleIncrease = (value) => {
        // setQuantity((prevState) => (prevState += 1));
        dispatch(increaseProduct(value));
    };
    const handleDecrease = () => {
        setQuantity((prevState) => (prevState -= 1));
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
                    <button className={scss.btn} onClick={handleDecrease}>
                        -
                    </button>
                    <p className={scss.quantity}>{product.quantity}</p>
                    <button className={scss.btn} onClick={() => handleIncrease(product)}>
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
