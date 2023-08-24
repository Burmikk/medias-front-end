import scss from "./Loading.module.scss";
import logo from "../../../assets/logo_loading.png";
const Loading = () => {
    return (
        <div className={scss.logo_wrapper}>
            <img className={scss.logo} src={logo} alt="logo" />
        </div>
    );
};
export default Loading;
