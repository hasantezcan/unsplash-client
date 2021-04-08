import { useSearch } from "../../Context/Search";
import style from "./style.module.css";

const QueryInput = () => {
	const {
		queryInput,
		setQueryInput,
		setSearchStatus,
		setCurrentPageNumber,
	} = useSearch();

	const handleSearchStatus = (event) => {
		if (event.charCode === 13) {
			event.preventDefault();
			setCurrentPageNumber(1);
			setSearchStatus(true);
		}
	};

	const clearInput = (e) => {
		e.target.select();
	};

	return (
		<div>
			<input
				className={style.queryInput}
				type="text"
				value={queryInput}
				onFocus={clearInput}
				onChange={(e) => {
					setQueryInput(e.target.value);
				}}
				onKeyPress={handleSearchStatus}
				placeholder="What kind of picture do you want?"
			></input>
		</div>
	);
};

export default QueryInput;
