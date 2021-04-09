// import { useEffect } from "react";
// import { useSearch } from "../../Context/Search";

import { slide as Menu } from "react-burger-menu";
import CollectionSelect from "../CollectionSelect";
import QueryInput from "../QueryInput";
import SearchButton from "../SearchButton";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import "./Sidebar.css";

const SideBar = () => {
	// const { searchStatus } = useSearch();

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
			<Menu right width={"80%"}>
				<QueryInput className="menu-item" />
				<CollectionSelect className="menu-item" />
				<SearchButton className="menu-item" />
				<div className="menu-item">
					<a href="/explore">
						<GiPerspectiveDiceSixFacesRandom className="svg" />
						<p>Explore</p>
					</a>
				</div>
			</Menu>
		</div>
	);
};

export default SideBar;
