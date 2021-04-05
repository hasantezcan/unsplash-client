import { useState, useEffect } from "react";
import axios from "axios";
import { SearchProvider } from "../Context/Search";

const WithSearch = ({ children }) => {
	const [collections, setCollections] = useState([
		["", "Please Select Collection"],
	]);
	const [selectedCollection, setSelectedCollection] = useState({});
	const [queryInput, setQueryInput] = useState("");
	const [searchStatus, setSearchStatus] = useState(false);
	const [queryResults, setQueryResults] = useState([]);

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
		const fetchQurey = async () => {
			if (!searchStatus) {
				return false;
			}
			let ENDPOINT = "";
			if ((queryInput.length && selectedCollection.id) || queryInput.length) {
				ENDPOINT = `${URL}search/photos?page=1&query=${queryInput}${
					selectedCollection.id ? "&collections=" + selectedCollection.id : ""
				}&${KEY}`;
			} else if (!queryInput.length && selectedCollection.id) {
				ENDPOINT = `${URL}collections/${selectedCollection.id}?${KEY}`;
			}

			console.log("ENDPOINT", ENDPOINT);
			const { data } = await axios.get(ENDPOINT);

			setQueryResults(data);
			console.log("DATA RESULTS:", queryResults);
		};
		fetchQurey();
		setSearchStatus(false);
		// eslint-disable-next-line
	}, [searchStatus]);

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
	};

	return <SearchProvider value={props}>{children}</SearchProvider>;
};

export default WithSearch;
