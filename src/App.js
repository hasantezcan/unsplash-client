import Navbar from "./components/Navbar";
import { useSearch } from "./Context/Search";

import "./App.css";

function App() {
	const { queryInput, selectedCollection, queryResults } = useSearch();

	return (
		<div>
			<Navbar />
			<h1>Unsplash Client</h1>
			<p>QueryInput = {queryInput}</p>
			<p>Collection = {selectedCollection.value}</p>
			<p>Results ={JSON.stringify(queryResults)}</p>
		</div>
	);
}

export default App;
