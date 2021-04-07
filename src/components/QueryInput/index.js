import { useSearch } from "../../Context/Search";
import style from "./style.module.css";

const QueryInput = () => {
	const { queryInput, setQueryInput, setSearchStatus } = useSearch();

	const handleSearchStatus = (event) => {
		if (event.charCode === 13) {
			event.preventDefault();
			setSearchStatus(true);
		}
	};

	const clearInput = () => {
		setQueryInput("");
	};

	return (
		<div>
			<input
				className={style.queryInput}
				type="text"
				value={queryInput}
				onFocus={clearInput}
				onChange={(e) => setQueryInput(e.target.value)}
				onKeyPress={handleSearchStatus}
				placeholder="What kind of picture do you want?"
			></input>
		</div>
	);
};

export default QueryInput;
