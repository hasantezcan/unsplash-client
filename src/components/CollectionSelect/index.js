import { useSearch } from "../../Context/Search";
import style from "./style.module.css";

const CollectionSelect = () => {
	const { collections } = useSearch();

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
