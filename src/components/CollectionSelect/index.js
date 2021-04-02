import { useState } from "react";

const CollectionSelect = () => {
	const [collections, setCollections] = useState([
		["happiness", "Happiness"],
		["thanksgiving", "Thanksgiving"],
		["blank Walls", "Blank Walls"],
		["pastel & Pale", "Pastel & Pale"],
	]);

	return (
		<div>
			<select defaultValue="happiness">
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
