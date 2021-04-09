import { useEffect, useState } from "react";
import axios from "axios";
import MasonryGalery from "../../components/MasonryGalery";
import Loading from "../../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import ErrorBox from "../../components/ErrorBox";

const Explore = () => {
	const [randomResults, setRandomResults] = useState([]);
	const [requestCount, setRequestCount] = useState(0);

	useEffect(() => {
		setRequestCount(0);
		fetchImages();
		// eslint-disable-next-line
	}, []);

	const fetchImages = async () => {
		try {
			const { data } = await axios.get(
				`https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_UNSPLASH_API}`
			);

			await setRandomResults([...randomResults, ...data]);
			setRequestCount(requestCount + 1);
		} catch (error) {
		}
	};

	return (
		<div>
			<InfiniteScroll
				dataLength={randomResults.length} //This is important field to render the next data
				next={fetchImages}
				hasMore={requestCount === 3 ? false : true}
				loader={<Loading />}
				endMessage={
					<ErrorBox
						textMessage={
							"Since we have a limited API rate, we only allow to only 3-time request per user right now :("
						}
						location={"bottom"}
					/>
				}
			>
				<MasonryGalery queryResults={randomResults} isPagination={false} />
			</InfiniteScroll>
		</div>
	);
};

export default Explore;
