import { useSearch } from "../../Context/Search";

const Debuging = () => {
	const {
		queryInput,
		selectedCollection,
		totalPageCount,
		currentPageNumber,
	} = useSearch();
	return (
		<div style={{ paddingTop: "150px" }}>
			<h1>Unsplash Client</h1>
			<p>QueryInput = {queryInput ? queryInput : "Not Entered"}</p>
			<p>
				Collection =
				{selectedCollection.id ? selectedCollection.value : "Not Selected"}
			</p>
			<h2>{selectedCollection.id}</h2>
			<p>Total Page: {totalPageCount}</p>
			<p>Current: {currentPageNumber}</p>
		</div>
	);
};

export default Debuging;
