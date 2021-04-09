import { useSearch } from "../../Context/Search";
import "./style.css";
import "./pagination.css";

import ImageCard from "../ImageCard";
import Masonry from "react-masonry-css";
import ReactPaginate from "react-paginate";

const breakpointColumnsObj = {
	default: 3,
	1620: 3,
	1230: 2,
	820: 1,
};

const MasonryGalery = ({ queryResults, isPagination = true }) => {
	const {
		totalPageCount,
		currentPageNumber,
		setCurrentPageNumber,
		setSearchStatus,
	} = useSearch();

	const handlePageNumber = (e) => {
		setCurrentPageNumber(e.selected + 1);
		setSearchStatus(true);
	};

	return Array.isArray(queryResults) ? (
		<div className="masonryContainer">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{Array.isArray(queryResults) &&
					queryResults.map((image, i) => {
						return <ImageCard image={image} key={i} />;
					})}
			</Masonry>
			{isPagination && (
				<ReactPaginate
					previousLabel={"Previous"}
					nextLabel={"Next"}
					breakLabel={false}
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
			)}
		</div>
	) : null;
};

export default MasonryGalery;
