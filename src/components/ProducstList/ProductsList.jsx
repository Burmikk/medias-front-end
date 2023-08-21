import { useDispatch, useSelector } from "react-redux";
import scss from "./productsList.module.scss";
import products from "./produtsList.json";
import { addProduct } from "../../redux/receipt/receipt-slice";
import { fetchAddItem, fetchCreateReceipt } from "../../redux/receipt/receipt-operations";
import { selectReceipId } from "../../redux/receipt/receipt-selectors";

const ProductsList = () => {
    const dispatch = useDispatch();
    const receiptId = useSelector(selectReceipId);

    const addToReceipt = (value) => {
        const productToAdd = { ...value, quantity: 1 };
        dispatch(addProduct(productToAdd));

        const itemInfo = {
            product_id: value._id,
            quantity: 1,
            price: value.price,
        };
        if (!receiptId) {
            dispatch(fetchCreateReceipt(itemInfo));
        } else {
            dispatch(fetchAddItem({ ...itemInfo, receipt_id: receiptId }));
        }
    };

    const allProducts = products.map((item) => {
        return (
            <li className={scss.products_item} key={item._id} onClick={() => addToReceipt(item)}>
                <p>{item.name}</p>
                <p>{`${item.price} грн.`}</p>
            </li>
        );
    });

    return (
        <div className={scss.products_wrapper}>
            <ul className={scss.products_list}>{allProducts}</ul>
        </div>
    );
};
export default ProductsList;
