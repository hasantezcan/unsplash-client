import { useState, useEffect } from "react";
import axios from "axios";
import { SearchProvider } from "../Context/Search";

const WithSearch = ({ children }) => {
	const [collections, setCollections] = useState([]);
	const [selectedCollection, setSelectedCollection] = useState("");
	const [queryInput, setQueryInput] = useState("");

	useEffect(() => {
		const fetchCollections = async () => {
			const { data } = await axios.get(
				`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_API}`
			);

			if (data.length && data.length) {
				const temp = [];
				await data.map((collection, i) => {
					temp.push([
						collection.title,
						collection.title.charAt(0).toUpperCase() +
							collection.title.slice(1),
					]);
				});
				console.log("ARRAY", temp);
				setCollections(temp);
			}
			console.log(collections);
		};
		fetchCollections();
	}, []);

	const props = {
		collections,
		setCollections,
		queryInput,
		setQueryInput,
		selectedCollection,
		setSelectedCollection,
	};

	return <SearchProvider value={props}>{children}</SearchProvider>;
};

export default WithSearch;
