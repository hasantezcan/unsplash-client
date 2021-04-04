import { useSearch } from "../../Context/Search";
import style from "./style.module.css";

const CollectionSelect = () => {
	const { collections, setSelectedCollection } = useSearch();

	const handleCollectionChose = (e) => {
		console.log("Collection Selected!!");
		setSelectedCollection({
			value: e.target.value,
			id: e.target[e.target.selectedIndex].id,
		});
	};

	return (
		<div>
			<select
				className={style.collectionSelect}
				onChange={handleCollectionChose}
				defaultValue=""
			>
				{collections.map(([id, text]) => (
					<option key={id} value={text} id={id}>
						{text}
					</option>
				))}
			</select>
		</div>
	);
};

export default CollectionSelect;
