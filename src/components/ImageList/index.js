import { useSearch } from "../../Context/Search";
import "./style.css";

import ImageCard from "../ImageCard";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
	default: 3,
	1620: 3,
	1230: 2,
	820: 1,
};

const ImageList = () => {
	const { queryResults } = useSearch();
	console.log("DATA RESULTS IN LIST LENGHTT:", queryResults.length);
	if (Array.isArray(queryResults)) {
		if (queryResults && queryResults.length > 0) {
			return (
				<div className="masonryContainer">
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="my-masonry-grid"
						columnClassName="my-masonry-grid_column"
					>
						{queryResults.map((image, i) => {
							return <ImageCard info={image} key={i} />;
						})}
					</Masonry>
				</div>
			);
		} else if (queryResults && queryResults.length <= 0) {
			return <p className="masonryContainer">Please enter search parameters</p>;
		} else {
			return <p className="masonryContainer">Unexpected Error</p>;
		}
	} else {
		return (
			<p className="masonryContainer">
				We can't find any results about that search.
			</p>
		);
	}
};

export default ImageList;
