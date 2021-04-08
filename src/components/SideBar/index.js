import { slide as Menu } from "react-burger-menu";
import CollectionSelect from "../CollectionSelect";
import QueryInput from "../QueryInput";
import SearchButton from "../SearchButton";

import "./Sidebar.css";

const SideBar = () => {
	return (
		<div className="sideBar">
			<Menu right width={"80%"}>
				<QueryInput className="menu-item" />
				<CollectionSelect className="menu-item" />
				<SearchButton className="menu-item" />
			</Menu>
		</div>
	);
};

export default SideBar;
