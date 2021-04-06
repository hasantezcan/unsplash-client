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

	return (
		<div>
			<input
				className={style.queryInput}
				autoFocus
				type="text"
				value={queryInput}
				onChange={(e) => setQueryInput(e.target.value)}
				onKeyPress={handleSearchStatus}
				placeholder="What kind of picture do you want?"
			></input>
		</div>
	);
};

export default QueryInput;
