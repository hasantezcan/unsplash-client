import MasonryGalery from "../../components/MasonryGalery";
import { useSearch } from "../../Context/Search";

const ImageSearch = () => {
	const { queryResults } = useSearch();
	return (
		<div>
			<MasonryGalery queryResults={queryResults} isPagination={true} />
		</div>
	);
};

export default ImageSearch;
