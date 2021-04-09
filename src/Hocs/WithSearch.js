import { useState, useEffect } from "react";
import { SearchProvider } from "../Context/Search";
import axios from "axios";

const WithSearch = ({ children }) => {
	const [collections, setCollections] = useState([["", "None"]]);
	const [selectedCollection, setSelectedCollection] = useState({});
	const [queryInput, setQueryInput] = useState("");
	const [searchStatus, setSearchStatus] = useState(false);
	const [queryResults, setQueryResults] = useState(null);
	const [totalPageCount, setTotalPageCount] = useState("");
	const [currentPageNumber, setCurrentPageNumber] = useState(1);

	const URL = `https://api.unsplash.com/`;
	const KEY = `client_id=${process.env.REACT_APP_UNSPLASH_API}`;

	// Fetch Collections
	useEffect(() => {
		setCollections([["", "None"]]);
		const fetchCollections = async () => {
			const { data } = await axios.get(
				`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_API}`
			);

			if (data.length && data.length) {
				const temp = [];
				await data.forEach((collection, i) => {
					temp.push([
						collection.id,
						collection.title.toLowerCase().replace("––", ""),
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
			setSearchStatus(false);

			if (!searchStatus) {
				return false;
			}

			if (!queryInput && selectedCollection.id === undefined) {
				setQueryResults(null);
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

			const { data } = await axios.get(ENDPOINT);

			data.total_pages
				? setTotalPageCount(data.total_pages)
				: setTotalPageCount("");
			data.results ? setQueryResults(data.results) : setQueryResults(data);
		};
		fetchImages();
		signiture();
		// eslint-disable-next-line
	}, [searchStatus]);

	// Inital Search
	useEffect(() => {
		setQueryInput("Istanbul");
		setSearchStatus(true);
	}, []);

	const signiture = () => {
		console.log(
			"This project was made by Hasan Tezcan.\n" +
				"https://hasantezcan.dev/\n" +
				"https://github.com/hasantezcan\n" +
				"https://twitter.com/hasantezcann \n" +
				"https://www.linkedin.com/in/hasantezcann/\n\n" +
				"Thanks Unsplash API for images\n" +
				"https://unsplash.com/"
		);
	};

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
		setTotalPageCount,
		currentPageNumber,
		setCurrentPageNumber,
	};

	return <SearchProvider value={props}>{children}</SearchProvider>;
};

export default WithSearch;
