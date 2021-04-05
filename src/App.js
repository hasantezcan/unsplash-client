import { useSearch } from "./Context/Search";
import "./App.css";

import Navbar from "./components/Navbar";
import ImageList from "./components/ImageList";

function App() {
	const { queryInput, selectedCollection } = useSearch();

	return (
		<div>
			<Navbar />
			<h1>Unsplash Client</h1>
			<p>QueryInput = {queryInput ? queryInput : "Not Entered"}</p>
			<p>
				Collection =
				{selectedCollection.id ? selectedCollection.value : "Not Selected"}
			</p>
			<ImageList />
		</div>
	);
}

export default App;
