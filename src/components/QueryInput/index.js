import { useSearch } from "../../Context/Search";
import style from "./style.module.css";

const QueryInput = () => {
	const { queryInput, setQueryInput } = useSearch();

	// TODO Handle Clean Input when the Search Button Clicked
	return (
		<div>
			<input
				className={style.queryInput}
				autoFocus
				type="text"
				value={queryInput}
				onChange={(e) => setQueryInput(e.target.value)}
				placeholder="What kind of picture do you want?"
			></input>
		</div>
	);
};

export default QueryInput;
