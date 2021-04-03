import style from "./style.module.css";
import Logo from "../../assets/images/Logo.png";
import CollectionSelect from "../CollectionSelect";
import QueryInput from "../QueryInput/index";

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<img className={style.logo} src={Logo} alt="" />
			<QueryInput />
			<CollectionSelect />
			<button className={style.searchButton}>SEARCH</button>
		</div>
	);
};

export default Navbar;
