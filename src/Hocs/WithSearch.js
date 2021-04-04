import { useState } from "react";
import { SearchProvider } from "../Context/Search";

const WithSearch = ({ children }) => {
	const [collections, setCollections] = useState([
		["happiness", "Happiness"],
		["thanksgiving", "Thanksgiving"],
		["blank Walls", "Blank Walls"],
		["pastel & Pale", "Pastel & Pale"],
	]);
	const [queryInput, setQueryInput] = useState("");

	const props = { collections, setCollections, queryInput, setQueryInput };

	return <SearchProvider value={props}>{children}</SearchProvider>;
};

export default WithSearch;
