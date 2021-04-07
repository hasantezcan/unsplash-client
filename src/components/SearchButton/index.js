import { useSearch } from "../../Context/Search";
import style from "./style.module.css";

const SearchButton = () => {
	const { setSearchStatus, setCurrentPageNumber } = useSearch();
	
	const handleSearchStatus = () => {
		setCurrentPageNumber(1);
		setSearchStatus(true);
	};

	return (
		<button onClick={handleSearchStatus} className={style.searchButton}>
			SEARCH
		</button>
	);
};

export default SearchButton;
