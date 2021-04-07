import { useState, useEffect } from "react";
import { SearchProvider } from "../Context/Search";
import axios from "axios";

const WithSearch = ({ children }) => {
	const [collections, setCollections] = useState([
		["", "Please Select Collection"],
	]);
	const [selectedCollection, setSelectedCollection] = useState({});
	const [queryInput, setQueryInput] = useState("");
	const [searchStatus, setSearchStatus] = useState(false);
	const [queryResults, setQueryResults] = useState("NO DATA");
	const [totalPageCount, setTotalPageCount] = useState("");
	const [currentPageNumber, setCurrentPageNumber] = useState(1);

	const URL = `https://api.unsplash.com/`;
	const KEY = `client_id=${process.env.REACT_APP_UNSPLASH_API}`;

	// Fetch Collections
	useEffect(() => {
		setCollections([["", "Please Select Collection"]]);
		const fetchCollections = async () => {
			const { data } = await axios.get(
				`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_API}`
			);

			if (data.length && data.length) {
				const temp = [];
				await data.forEach((collection, i) => {
					temp.push([
						collection.id,
						collection.title.charAt(0).toUpperCase() +
							collection.title.slice(1),
					]);
				});
				setCollections((state) => [...state, ...temp]);
			}
		};
		fetchCollections();
	}, []);

	// Fetch images
	useEffect(() => {
		const fetchImages = async () => {
			// console.log(
			// 	"---------> PARAMS",
			// 	"Query:",
			// 	queryInput,
			// 	"Collection:",
			// 	selectedCollection.id
			// );
			if (!searchStatus | !queryInput && selectedCollection.id === undefined) {
				setQueryResults("WILL");
				// console.log("NO FETCH:", queryResults);
				return false;
			}
			let ENDPOINT = "";
			if ((queryInput.length && selectedCollection.id) || queryInput.length) {
				// prettier-ignore
				ENDPOINT =
						`${URL}search/photos?page=${currentPageNumber}&query=${queryInput}${
								selectedCollection.id
									? "&collections=" + selectedCollection.id
									: ""
						  }&${KEY}`;
			} else if (!queryInput.length && selectedCollection.id) {
				ENDPOINT = `${URL}collections/${selectedCollection.id}/photos?${KEY}`;
			}

			console.log("ENDPOINT", ENDPOINT);
			const { data } = await axios.get(ENDPOINT);

			data.total_pages
				? setTotalPageCount(data.total_pages)
				: setTotalPageCount("");
			data.results ? setQueryResults(data.results) : setQueryResults(data);
			// console.log("YES FETCH:", queryResults);
		};
		fetchImages();
		setSearchStatus(false);
		// eslint-disable-next-line
	}, [searchStatus]);

	// Inital Search
	useEffect(() => {
		setQueryInput("Istanbul");
		setSearchStatus(true);
	}, []);

	const props = {
		collections,
		setCollections,
		queryInput,
		setQueryInput,
		selectedCollection,
		setSelectedCollection,
		searchStatus,
		setSearchStatus,
		queryResults,
		setQueryResults,
		totalPageCount,
		currentPageNumber,
		setCurrentPageNumber,
	};

	return <SearchProvider value={props}>{children}</SearchProvider>;
};

export default WithSearch;
