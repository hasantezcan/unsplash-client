import "./App.css";

import Navbar from "./components/Navbar";
import ImageList from "./components/ImageList";
import SideBar from "./components/SideBar";
// import Debuging from "./components/Debuging";

function App() {
	return (
		<div>
			<Navbar />
			<SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
			{/* <Debuging /> */}
			<ImageList />
		</div>
	);
}

export default App;
