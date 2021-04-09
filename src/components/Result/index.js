import { useResult } from "../../Context/Result";
import { useSearch } from "../../Context/Search";
import MasonryGalery from "../MasonryGalery";
import ErrorBox from "../ErrorBox/index";
import Loading from "../Loading";

const Result = () => {
	const { resultStatus } = useResult();
	const { queryResults } = useSearch();

	if (resultStatus === "not found") {
		return (
			<ErrorBox textMessage={"We can't find any results about that search."} />
		);
	} else if (resultStatus === "enter params") {
		return <ErrorBox textMessage={"Please enter search parameters"} />;
	} else if (resultStatus === "success") {
		return <MasonryGalery queryResults={queryResults} />;
	} else {
		return <Loading />;
	}
};

export default Result;
