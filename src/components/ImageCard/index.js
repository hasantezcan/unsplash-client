import style from "./style.module.css";
import cn from "classnames";

import { useSearch } from "../../Context/Search";
import { BiDownArrowAlt, BiPlus } from "react-icons/bi";

const ImageCard = ({ image }) => {
	const { queryInput, selectedCollection } = useSearch();

	function fetchImage(url) {
		return fetch(url)
			.then((response) => {
				return response.blob();
			})
			.then((blob) => {
				return URL.createObjectURL(blob);
			});
	}

	async function downloadImage(image, id) {
		const a = document.createElement("a");
		a.href = await fetchImage(image);
		a.download =
			(queryInput ? queryInput + "-" : "") +
			(selectedCollection.id ? selectedCollection.value + "-" : "") +
			id +
			".png";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

	return (
		<div className={style.imageCard}>
			<p>{selectedCollection.value}</p>
			{/* {  Image Card } */}
			<a
				className={style.image}
				href={image.links.html}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={image.urls.small} alt={image.alt_description} />
			</a>
			{/* {  Download Button } */}
			<span
				onClick={() => {
					downloadImage(image.urls.raw, image.id);
				}}
				className={cn(style.button, style.downloadButton)}
			>
				<BiDownArrowAlt className={style.downloadIcon} />
			</span>
			{/* {  Collect Button } */}
			<a href={image.urls.raw} target="_blank" rel="noopener noreferrer">
				<span className={cn(style.button, style.collectButton)}>
					<BiPlus className={style.collectIcon} />
				</span>
			</a>
			{/* {  Avatar } */}
			<a
				className={style.artist}
				href={image.user.links.html}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={image.user.profile_image.medium} alt="" />
				<p className={style.artist}>{image.user.username}</p>
			</a>
		</div>
	);
};

export default ImageCard;
