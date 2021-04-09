import CollectionSelect from "../CollectionSelect";
import QueryInput from "../QueryInput/index";
import SearchButton from "../SearchButton";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.png";
import style from "./style.module.css";

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<div className={style.leftSide}>
				<Link to="/">
					<img className={style.logo} src={Logo} alt="" />
				</Link>
				<div className={style.paths}>
					<Link to="/explore">Random</Link>
				</div>
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
