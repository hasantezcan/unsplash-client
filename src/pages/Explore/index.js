import { useEffect, useState } from "react";
import axios from "axios";
import MasonryGalery from "../../components/MasonryGalery";
import Loading from "../../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Explore = () => {
	const [randomResults, setRandomResults] = useState([]);

	useEffect(() => {
		fetchImages();
		// eslint-disable-next-line
	}, []);

	const fetchImages = async () => {
		try {
			const { data } = await axios.get(
				`https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_UNSPLASH_API}`
			);

			// setRandomResults(data);

			await setRandomResults((state) => [...state, data]);
		} catch (error) {
			console.log("EORRRRRRR", error);
		}
	};

	return (
		<div>
			<InfiniteScroll
				dataLength={randomResults.length} //This is important field to render the next data
				next={fetchImages}
				hasMore={true}
				loader={<Loading />}
				endMessage={
					<p style={{ textAlign: "center" }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				<MasonryGalery queryResults={randomResults} />{" "}
			</InfiniteScroll>
		</div>
	);
};

export default Explore;
