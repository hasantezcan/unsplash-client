import style from "./style.module.css";
import Logo from "../../assets/images/Logo.png";
import CollectionSelect from "../CollectionSelect";

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<img className={style.logo} src={Logo} alt="" />
			<CollectionSelect />
		</div>
	);
};

export default Navbar;
