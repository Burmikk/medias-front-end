import { selectAddProducts } from "../../../redux/receipt/receipt-selectors";
import scss from "./receiptItem.module.scss";
import { useSelector } from "react-redux";

const ReceiptItem = () => {
    const receipt = useSelector(selectAddProducts);

    const products = receipt.map((item, index) => {
        return (
            <li key={item._id} className={scss.receipt_item}>
                <p className={scss.number}>{index + 1}</p>
                <p className={scss.name}>{item.name}</p>
                <div className={scss.quantity_wrapper}>
                    <button className={scss.btn}>-</button>
                    <p className={scss.quantity}>1</p>
                    <button className={scss.btn}>+</button>
                </div>
                <p className={scss.summ}>{item.price}</p>
            </li>
        );
    });
    return <>{products}</>;
};
export default ReceiptItem;
