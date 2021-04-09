const ErrorBox = ({ textMessage }) => {
	return (
		<div style={{ paddingTop: 200 }}>
			<p style={{ textAlign: "center" }}>{textMessage}</p>
		</div>
	);
};

export default ErrorBox;
