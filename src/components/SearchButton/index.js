import { useSearch } from "../../Context/Search";
import { Link } from "react-router-dom";

import style from "./style.module.css";

const SearchButton = () => {
	const { setSearchStatus, setCurrentPageNumber } = useSearch();

	const handleSearchStatus = () => {
		setCurrentPageNumber(1);
		setSearchStatus(true);
	};

	return (
		<>
			<Link to="/">
				<button onClick={handleSearchStatus} className={style.searchButton}>
					SEARCH
				</button>
			</Link>
		</>
	);
};

export default SearchButton;
