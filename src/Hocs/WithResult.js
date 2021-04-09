import { useState, useEffect } from "react";
import { useSearch } from "../Context/Search";
import { ResultProvider } from "../Context/Result";

const WithResult = ({ children }) => {
	const {
		selectedCollection,
		queryInput,
		queryResults,
		searchStatus,
	} = useSearch();
	const [resultStatus, setResultStatus] = useState("loading");

	useEffect(() => {
		if (Array.isArray(queryResults)) {
			if (queryResults.length > 0) {
				setResultStatus("success");
			} else {
				setResultStatus("not found");
			}
		} else {
			if (queryInput.length === 0 && !selectedCollection.id) {
				setResultStatus("enter params");
			} else {
				setResultStatus("loading");
			}
		}
		// eslint-disable-next-line
	}, [searchStatus, queryResults]);

	const props = { resultStatus };

	return <ResultProvider value={props}>{children}</ResultProvider>;
};

export default WithResult;
