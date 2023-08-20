import scss from "./productsList.module.scss";
import products from "./produtsList.json";
const ProductsList = () => {
    const allProducts = products.map((item) => {
        return (
            <li className={scss.products_item} key={item._id}>
                <p>{item.name}</p>
                <p>{`${item.price} грн.`}</p>
            </li>
        );
    });

    return (
        <div className={scss.products_wrapper}>
            <ul>{allProducts}</ul>
        </div>
    );
};
export default ProductsList;
