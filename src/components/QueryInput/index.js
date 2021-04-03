import { useState, useEffect } from "react";
import style from "./style.module.css";

const QueryInput = () => {
	const [queryInput, setQueryInput] = useState("");

	const cleanQueryInput = (event) => {
		if (event.charCode === 13) {
			event.preventDefault();
			setQueryInput("");
		}
	};

	return (
		<div>
			<input
				className={style.queryInput}
				autofocus
				type="text"
				value={queryInput}
				onChange={(e) => setQueryInput(e.target.value)}
				onKeyPress={cleanQueryInput}
				placeholder="What kind of picture do you want?"
			></input>
		</div>
	);
};

export default QueryInput;
