import { selectReceiptList } from "../../../redux/receipt/receipt-selectors";
import Item from "../Item/Item";
import { useSelector } from "react-redux";

const ReceiptItems = () => {
    const receipt = useSelector(selectReceiptList);
    const products = receipt.map((item, index) => {
        return <Item key={item._id} product={item} productIndex={index} />;
    });
    return <>{products}</>;
};
export default ReceiptItems;
