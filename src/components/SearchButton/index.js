import { useSearch } from "../../Context/Search";
import style from "./style.module.css";

const SearchButton = () => {
	const { searchStatus, setSearchStatus } = useSearch();

	console.log(searchStatus);
	const handleSearchStatus = () => {
		setSearchStatus(true);
	};

	return (
		<button onClick={handleSearchStatus} className={style.searchButton}>
			SEARCH STATUS:{searchStatus.toString()}
		</button>
	);
};

export default SearchButton;
