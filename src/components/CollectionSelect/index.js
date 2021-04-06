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
	// TODO Handle Clean Input when the Search Button Clicked
	return (
		<div className={style.collectionWrapper}>
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
