import { useDispatch } from "react-redux";
import scss from "./productsList.module.scss";
import products from "./produtsList.json";
import { addProduct } from "../../redux/receipt/receipt-slice";
const ProductsList = () => {
    const dispatch = useDispatch();

    const addToReceipt = (value) => {
        dispatch(addProduct(value));
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
