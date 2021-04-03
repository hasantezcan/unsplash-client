import { useState } from "react";
import style from "./style.module.css";

const CollectionSelect = () => {
	const [collections, setCollections] = useState([
		["happiness", "Happiness"],
		["thanksgiving", "Thanksgiving"],
		["blank Walls", "Blank Walls"],
		["pastel & Pale", "Pastel & Pale"],
	]);

	return (
		<div>
			<select className={style.collectionSelect} defaultValue="happiness">
				{collections.map(([value, text]) => (
					<option key={value} value={value}>
						{text}
					</option>
				))}
			</select>
		</div>
	);
};

export default CollectionSelect;
