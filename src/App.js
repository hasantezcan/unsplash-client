import Navbar from "./components/Navbar";
import { useSearch } from "./Context/Search";

import "./App.css";

function App() {
	const { queryInput, collections } = useSearch();

	return (
		<div>
			<Navbar />
			<h1>Unsplash Client</h1>
			<p>{queryInput}</p>
			<p>{collections}</p>
		</div>
	);
}

export default App;
