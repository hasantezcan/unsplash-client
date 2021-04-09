import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Explore from "./pages/Explore";
import ImageSearch from "./pages/ImageSearch/index";
import NotFound404 from "./pages/NotFound404";
import WithSearch from "./Hocs/WithSearch";
import WithResult from "./Hocs/WithResult";
// import Debuging from "./components/Debuging";	

function App() {
	return (
		<WithSearch>
			<WithResult>
				<Router>
					<Navbar />
					{/* <Debuging /> */}
					<SideBar
						pageWrapId={"page-wrap"}
						outerContainerId={"outer-container"}
					/>
					<Switch>
						<Route path="/" exact component={ImageSearch} />
						<Route path="/explore" component={Explore} />
						<Route path="*" component={NotFound404} />
					</Switch>
				</Router>
			</WithResult>
		</WithSearch>
	);
}

export default App;
