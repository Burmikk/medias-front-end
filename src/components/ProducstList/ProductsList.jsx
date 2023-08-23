import { useDispatch, useSelector } from "react-redux";
import scss from "./productsList.module.scss";
import products from "./produtsList.json";
import { addProductsList } from "../../redux/receipt/receipt-slice";
import { selectAllProducts } from "../../redux/receipt/receipt-selectors";
import { useEffect } from "react";
import { getAllProducts } from "../../shared/api/productsApi";
import Product from "./Product/Product";

const ProductsList = () => {
    const dispatch = useDispatch();
    const productList = useSelector(selectAllProducts);

    const fetchProducts = async () => {
        try {
            const { data } = await getAllProducts();
            if (data.length > 0) {
                dispatch(addProductsList(data));
            } else {
                dispatch(addProductsList(products));
            }
        } catch (error) {}
    };

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);

    const allProducts = productList.map((item) => {
        return <Product item={item} />;
    });

    return (
        <div className={scss.container}>
            <div className={scss.header}>
                <p className={scss.chashier}>Каса №1</p>
            </div>
            <div className={scss.products_wrapper}>
                <ul className={scss.products_list}>{allProducts}</ul>
            </div>
        </div>
    );
};
export default ProductsList;
