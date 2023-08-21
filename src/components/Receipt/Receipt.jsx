import { useDispatch, useSelector } from "react-redux";
import scss from "./receipt.module.scss";
import { selectReceiptList, selectReceipInfo, selectReceiptId } from "../../redux/receipt/receipt-selectors";
import ReceiptItem from "./ReceiptItems/ReceiptItems";
import { useEffect, useState } from "react";
import { fetchCloseReceipt } from "../../redux/receipt/receipt-operations";
import { IoReceiptOutline } from "react-icons/io5";
const Receipt = () => {
    const [total, setTotal] = useState();
    const receipt = useSelector(selectReceiptList);
    const receiptInfo = useSelector(selectReceipInfo);
    const receiptId = useSelector(selectReceiptId);

    const dispatch = useDispatch();

    const handleCloseReceipt = () => {
        const value = {
            receiptId,
            total,
        };
        dispatch(fetchCloseReceipt(value));
    };

    useEffect(() => {
        const summ = receipt.reduce((acc, product) => {
            return acc + product.quantity * product.price;
        }, 0);
        setTotal(summ);
    }, [receipt]);

    if (receipt.length === 0) {
        return (
            <div className={scss.receipt_container}>
                <div className={scss.header}></div>
                <h3 className={scss.text}>Для створення чеку виберіть товар</h3>{" "}
            </div>
        );
    }
    if (receipt) {
        return (
            <div className={scss.receipt_container}>
                <div className={scss.header}>
                    <IoReceiptOutline color="white" size={22} />
                    <div className={scss.additional_info}>
                        <p className={scss.receipt_number}>Чек № {receiptInfo.number}</p>
                        <p className={scss.receipt_date}>Відкритий {receiptInfo.createdDate}</p>
                    </div>
                </div>
                <ul className={scss.receipt_list}>
                    <li className={scss.receipt_item}>
                        <p className={scss.number}>№</p>
                        <p className={scss.name}>Найменування</p>
                        <p className={scss.quantity}>Кількість</p>
                        <p className={scss.summ}>Вартість</p>
                    </li>
                    <ReceiptItem />
                </ul>
                <div className={scss.receipt_info_box}>
                    <div className={scss.receipt_info}>
                        <p>
                            Загальна сума товарів: <span className={scss.total}>{total}</span>
                        </p>
                        <button className={scss.btn} onClick={handleCloseReceipt}>
                            Закрити чек
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};
export default Receipt;
