import style from "./style.module.css";
import cn from "classnames";

import { BiDownArrowAlt, BiPlus } from "react-icons/bi";

const ImageCard = ({ image }) => {
	
	return (
		<div className={style.imageCard}>
			{/* {  Image Button } */}
			<a
				className={style.image}
				href={image.links.html}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={image.urls.small} alt={image.alt_description} />
			</a>
			{/* {  Download Button } */}
			<a
				href={image.urls.raw}
				download
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className={cn(style.button, style.downloadButton)}>
					<BiDownArrowAlt className={style.downloadIcon} />
				</span>
			</a>
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
