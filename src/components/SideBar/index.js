// import { useEffect } from "react";

import { useSearch } from "../../Context/Search";
import { slide as Menu } from "react-burger-menu";
import CollectionSelect from "../CollectionSelect";
import QueryInput from "../QueryInput";
import SearchButton from "../SearchButton";

import "./Sidebar.css";

const SideBar = () => {
	const { searchStatus } = useSearch();
	console.log("SEARCH STATUS: ", searchStatus);

	// var handleOnClose = function (state) {
	// 	return false;
	// };

	// TODO - Not Working properly
	// useEffect(() => {
	// 	if (searchStatus === "true") {
	// 		handleOnClose();
	// 	}
	// }, [searchStatus]);
	// isOpen = { handleOnClose };

	return (
		<div className="sideBar">
			<Menu right width={"80%"} >
				<QueryInput className="menu-item" />
				<CollectionSelect className="menu-item" />
				<SearchButton className="menu-item" />
			</Menu>
		</div>
	);
};

export default SideBar;
