import CollectionSelect from "../CollectionSelect";
import QueryInput from "../QueryInput/index";
import SearchButton from "../SearchButton";

import Logo from "../../assets/images/Logo.png";
import style from "./style.module.css";

const Navbar = () => {

	return (
		<div className={style.navbar}>
			<img className={style.logo} src={Logo} alt="" />
			<QueryInput />
			<CollectionSelect />
			<SearchButton />
		</div>
	);
};

export default Navbar;
