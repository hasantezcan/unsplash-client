import { useState, useEffect } from "react";
import axios from "axios";
import { SearchProvider } from "../Context/Search";

const WithSearch = ({ children }) => {
	const [collections, setCollections] = useState([
		[0, "Please Select Collection"],
	]);
	const [selectedCollection, setSelectedCollection] = useState({});
	const [queryInput, setQueryInput] = useState("");
	const [searchStatus, setSearchStatus] = useState(false);
	const [queryResults, setQueryResults] = useState([]);

	useEffect(() => {
		setCollections([["", "Please Select Collection"]]);
		const fetchCollections = async () => {
			const { data } = await axios.get(
				`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_API}`
			);

			if (data.length && data.length) {
				await data.map((collection, i) => {
					setCollections((state) => [
						...state,
						[
							collection.id,
							collection.title.charAt(0).toUpperCase() +
								collection.title.slice(1),
						],
					]);
					// console.log(collection.title, i, collections);
				});
			}
			// console.log("STATE", collections);
		};
		fetchCollections();
	}, []);

	useEffect(() => {
		const fetchQurey = async () => {
			if (!searchStatus) {
				return false;
			}

			const ENDPOINT = `https://api.unsplash.com/search/photos?page=1${
				queryInput.length ? "&query=" + queryInput : ""
			}${
				selectedCollection.id ? "&collections=" + selectedCollection.id : ""
			}&client_id=${process.env.REACT_APP_UNSPLASH_API}`;
			const { data } = await axios.get(ENDPOINT);

			console.log(ENDPOINT);

			setQueryResults(data.results);
			console.log("RESULTTT", queryResults);
		};
		fetchQurey();
		setSearchStatus(false);
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
	};

	return <SearchProvider value={props}>{children}</SearchProvider>;
};

export default WithSearch;
