import Navbar from "./components/Navbar";
import { useSearch } from "./Context/Search";

import "./App.css";

function App() {
	const { queryInput, selectedCollection } = useSearch();

	return (
		<div>
			<Navbar />
			<h1>Unsplash Client</h1>
			<p>QueryInput = {queryInput}</p>
			<p>Collection = {selectedCollection}</p>
		</div>
	);
}

export default App;
