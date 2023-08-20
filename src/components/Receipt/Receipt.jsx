import { useSelector } from "react-redux";
import scss from "./receipt.module.scss";
import { selectAddProducts } from "../../redux/receipt/receipt-selectors";
import ReceiptItem from "./ReceiptItem/ReceiptItem";
const Receipt = () => {
    const receipt = useSelector(selectAddProducts);

    if (receipt.length === 0) {
        return (
            <div className={scss.receipt_container}>
                <button>Створити чек</button>
            </div>
        );
    }
    if (receipt) {
        return (
            <div className={scss.receipt_container}>
                <ul>
                    <li className={scss.receipt_item}>
                        <p className={scss.number}>№</p>
                        <p className={scss.name}>Найменування</p>
                        <p className={scss.quantity}>Кількість</p>
                        <p className={scss.summ}>Вартість</p>
                    </li>
                    <ReceiptItem />
                </ul>
            </div>
        );
    }
};
export default Receipt;
