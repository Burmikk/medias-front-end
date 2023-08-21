import { useDispatch, useSelector } from "react-redux";
import scss from "./productsList.module.scss";
import products from "./produtsList.json";
import { addProduct, addProductsList } from "../../redux/receipt/receipt-slice";
import { fetchAddItem, fetchCreateReceipt } from "../../redux/receipt/receipt-operations";
import { selectAllProducts, selectReceipId, selectReceiptList } from "../../redux/receipt/receipt-selectors";
import { useEffect } from "react";
import { getAllProducts } from "../../shared/api/productsApi";

const ProductsList = () => {
    const dispatch = useDispatch();
    const receiptId = useSelector(selectReceipId);
    const productList = useSelector(selectAllProducts);
    const receipt = useSelector(selectReceiptList);
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
    }, []);

    const addToReceipt = (value) => {
        // const productToAdd = { ...value, quantity: 1 };
        // dispatch(addProduct(productToAdd));

        const itemInfo = {
            product_id: value._id,
            quantity: 1,
            price: value.price,
        };
        if (!receiptId) {
            dispatch(fetchCreateReceipt(itemInfo));
        } else {
            const isProductDublicate = receipt.find((product) => {
                return product.product_id === itemInfo.product_id;
            });

            if (!isProductDublicate) {
                dispatch(fetchAddItem({ ...itemInfo, receipt_id: receiptId }));
            }
        }
    };

    const allProducts = productList.map((item) => {
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
