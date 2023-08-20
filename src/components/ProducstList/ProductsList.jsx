import { useDispatch, useSelector } from "react-redux";
import scss from "./productsList.module.scss";
import products from "./produtsList.json";
import { addProduct } from "../../redux/receipt/receipt-slice";
import { selectReceiptList } from "../../redux/receipt/receipt-selectors";
import { fetchCreateReceipt } from "../../redux/receipt/receipt-operations";
const ProductsList = () => {
    const dispatch = useDispatch();
    const receipt = useSelector(selectReceiptList);

    const addToReceipt = (value) => {
        const productToAdd = { ...value, quantity: 1 };
        dispatch(addProduct(productToAdd));
        if (receipt.length === 0) {
            dispatch(fetchCreateReceipt(value.price));
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
