import { useSearch } from "../../Context/Search";
import { useResult } from "../../Context/Result";

const Debuging = () => {
	const {
		queryInput,
		selectedCollection,
		totalPageCount,
		currentPageNumber,
		queryResults,
		searchStatus,
	} = useSearch();
	const { resultStatus } = useResult();

	return (
		<div style={{ paddingTop: "150px" }}>
			<p>QueryInput = {queryInput}</p>
			<p>Collection = {(selectedCollection.id, selectedCollection.value)}</p>
			<p>SelectedCollection= {selectedCollection.id}</p>
			{/* <p>Total Page: {totalPageCount}</p> */}
			{/* <p>Current: {currentPageNumber}</p> */}
			<p>Search Status : {searchStatus.toString()}</p>
			<p>Result Status : {resultStatus}</p>
			<p>Resault : {queryResults ? queryResults.toString() : "yok"}</p>
		</div>
	);
};

export default Debuging;
