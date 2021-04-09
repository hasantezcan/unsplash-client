import { useSearch } from "../../Context/Search";

const Debuging = () => {
	const {
		queryInput,
		selectedCollection,
		totalPageCount,
		currentPageNumber,
		queryResults,
		searchStatus,
	} = useSearch();
	return (
		<div style={{ paddingTop: "150px" }}>
			<h1>Unsplash Client</h1>
			<p>QueryInput = {queryInput}</p>
			<p>Collection ={(selectedCollection.id, selectedCollection.value)}</p>
			<h2>{selectedCollection.id}</h2>
			<p>Total Page: {totalPageCount}</p>
			<p>Current: {currentPageNumber}</p>
			{/* <p>Resault : {queryResults.toString()}</p> */}
			{/* <p>SEARCH STATUS : {searchStatus.toString()}</p> */}
		</div>
	);
};

export default Debuging;
