import { useSearch } from "../../Context/Search";
import style from "./style.module.css";

const CollectionSelect = () => {
	const { collections, setSelectedCollection } = useSearch();

	const handleCollectionChose = (e) => {
		console.log("Fruit Selected!!");
		setSelectedCollection(e.target.value);
	};

	return (
		<div>
			<select
				className={style.collectionSelect}
				onChange={handleCollectionChose}
				defaultValue=""
			>
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
