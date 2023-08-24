import { useDispatch, useSelector } from "react-redux";
import scss from "./productsList.module.scss";
import { selectAllProducts, selectLoadingProducts } from "../../redux/products/products-selectors";
import { useEffect } from "react";
import Product from "./Product/Product";
import { fetchProductsList } from "../../redux/products/products-operation";
import Modal from "../../shared/components/Modal/Modal";
import Loading from "../../shared/components/Loading/Loading";

const ProductsList = () => {
    const dispatch = useDispatch();
    const productList = useSelector(selectAllProducts);
    const loadingProducts = useSelector(selectLoadingProducts);

    useEffect(() => {
        dispatch(fetchProductsList());
        // eslint-disable-next-line
    }, []);

    const allProducts = productList.map((item) => {
        return <Product item={item} />;
    });

    return (
        <>
            {loadingProducts && (
                <Modal>
                    <Loading />
                </Modal>
            )}
            <div className={scss.container}>
                <div className={scss.header}>
                    <p className={scss.chashier}>Каса №1</p>
                </div>
                <div className={scss.products_wrapper}>
                    <ul className={scss.products_list}>{allProducts}</ul>
                </div>
            </div>
        </>
    );
};
export default ProductsList;
