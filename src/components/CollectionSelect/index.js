import { useSearch } from "../../Context/Search";
import style from "./style.module.css";

const CollectionSelect = () => {
	const { collections, setSelectedCollection, setSearchStatus } = useSearch();

	const handleCollectionChose = (e) => {
		console.log("Collection Selected!!");
		setSelectedCollection({
			value: e.target.value,
			id: e.target[e.target.selectedIndex].id,
		});
		setSearchStatus(true);
	};

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
