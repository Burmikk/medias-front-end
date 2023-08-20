import { useSelector } from "react-redux";
import scss from "./receipt.module.scss";
import { selectReceiptList } from "../../redux/receipt/receipt-selectors";
import ReceiptItem from "./ReceiptItems/ReceiptItems";
const Receipt = () => {
    const receipt = useSelector(selectReceiptList);

    const summ = receipt.reduce((acc, product) => {
        return acc + product.quantity * product.price;
    }, 0);

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
                <ul className={scss.receipt_list}>
                    <li className={scss.receipt_item}>
                        <p className={scss.number}>№</p>
                        <p className={scss.name}>Найменування</p>
                        <p className={scss.quantity}>Кількість</p>
                        <p className={scss.summ}>Вартість</p>
                    </li>
                    <ReceiptItem />
                </ul>
                <div className={scss.receipt_info}>
                    <p>
                        Загальна сума товарів: <span className={scss.summ}>{summ}</span>
                    </p>
                    <button>Закрити чек</button>
                </div>
            </div>
        );
    }
};
export default Receipt;
