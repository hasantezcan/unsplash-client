import style from "./style.module.css";

const ImageCard = ({ info }) => {
	return (
		<div className={style.image}>
			<a className={style.link} href={info.links.html}>
				<img src={info.urls.small} alt={info.alt_description} />
				<button href="https://hasantezcan.dev" className={style.button}>
					Button
				</button>
			</a>
		</div>
	);
};

export default ImageCard;
