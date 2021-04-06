import CollectionSelect from "../CollectionSelect";
import QueryInput from "../QueryInput/index";
import SearchButton from "../SearchButton";

import Logo from "../../assets/images/Logo.png";
import style from "./style.module.css";

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<div className={style.logo}>
				<img src={Logo} alt="" />
			</div>
			<div className={style.searchBox}>
				<QueryInput />
				<CollectionSelect />
				<SearchButton />
			</div>
		</div>
	);
};

export default Navbar;
