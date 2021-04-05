import { useSearch } from "../../Context/Search";

import ImageCard from "../ImageCard";

const ImageList = () => {
	const { queryResults } = useSearch();
	if (queryResults.results && queryResults.results.length > 0) {
		return (
			<div>
				{Array.isArray(queryResults.results) &&
					queryResults.results.length &&
					queryResults.results.map((image, i) => {
						return <ImageCard info={image} key={i} />;
					})}
			</div>
		);
	} else if (queryResults.results && queryResults.results.length <= 0) {
		return <p>Bu giridilere ilişkin bir girdi bulanamadı</p>;
	} else {
		return <p>Please enter search parameters</p>;
	}
};

export default ImageList;
