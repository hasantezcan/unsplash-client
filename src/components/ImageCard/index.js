const ImageCard = ({ info }) => {
	return (
		<div>
			<img src={info.urls.small} alt={info.alt_description} />
			<p>{info.description}</p>
		</div>
	);
};

export default ImageCard;
