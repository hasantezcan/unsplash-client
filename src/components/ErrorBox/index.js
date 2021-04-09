import style from "./style.module.css";
import cn from "classnames";

const ErrorBox = ({ textMessage, location = "top" }) => {
	return (
		<div className={style.textWrapper}>
			<p className={cn(style.text, location === "bottom" && style.bottom)}>
				{textMessage}
			</p>
		</div>
	);
};

export default ErrorBox;
