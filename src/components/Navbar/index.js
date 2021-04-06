import CollectionSelect from "../CollectionSelect";
import QueryInput from "../QueryInput/index";
import SearchButton from "../SearchButton";

import Logo from "../../assets/images/Logo.png";
import style from "./style.module.css";

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<div className={style.logo}>
				<a href="/">
					<img src={Logo} alt="" />
				</a>
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
