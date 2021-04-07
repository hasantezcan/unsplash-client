import { useSearch } from "../../Context/Search";
import "./style.css";
import "./pagination.css";

import ImageCard from "../ImageCard";
import Masonry from "react-masonry-css";
import ReactPaginate from "react-paginate";
import Loading from "../Loading/index";

const breakpointColumnsObj = {
	default: 3,
	1620: 3,
	1230: 2,
	820: 1,
};

const ImageList = () => {
	const {
		queryResults,
		totalPageCount,
		currentPageNumber,
		setCurrentPageNumber,
		setSearchStatus,
	} = useSearch();

	console.log("DATA RESULTS IN LIST LENGHTT:", queryResults.length);

	const handlePageNumber = (e) => {
		setCurrentPageNumber(e.selected + 1);
		setSearchStatus(true);
	};

	if (Array.isArray(queryResults)) {
		if (queryResults.length > 0) {
			return (
				<div className="masonryContainer">
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="my-masonry-grid"
						columnClassName="my-masonry-grid_column"
					>
						{queryResults.map((image, i) => {
							return <ImageCard image={image} key={i} />;
						})}
					</Masonry>
					<ReactPaginate
						previousLabel={"Previous"}
						nextLabel={"Next"}
						breakLabel={".."}
						breakClassName={"break-me"}
						pageCount={totalPageCount}
						marginPagesDisplayed={1}
						pageRangeDisplayed={2}
						onPageChange={handlePageNumber}
						containerClassName={"pagination"}
						subContainerClassName={"pages pagination"}
						activeClassName={"active"}
						forcePage={currentPageNumber - 1}
					/>
				</div>
			);
		} else if (queryResults.length === 0) {
			return (
				<div className="masonryContainer">
					<p>We can't find any results about that search. </p>
				</div>
			);
		} else {
			return <p className="masonryContainer">Unexpected Error</p>;
		}
	} else if (queryResults === "WILL") {
		return (
			<div className="masonryContainer">
				<Loading />
			</div>
		);
	} else {
		return (
			// TODO This section is not working
			<div className="masonryContainer">
				<p>Please enter search parameters</p>
			</div>
		);
	}
};

export default ImageList;
