import { useState } from "react";
import { useSearch } from "../../Context/Search";
import style from "./style.module.css";


const CollectionSelect = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const {
		collections,
		setSelectedCollection,
		setSearchStatus,
		setCurrentPageNumber,
		selectedCollection,
	} = useSearch();

	const toggleDropDown = () => {
		setIsDropdownOpen((prevState) => !prevState);
	};

	return (
		<>
			{isDropdownOpen && (
				<div className={style.backdrop} onClick={toggleDropDown}>
					<div className={style.transparent}></div>
				</div>
			)}
			<div className={style.collectionWrapper}>
				<button className={style.collectionSelect} onClick={toggleDropDown}>
					<div className={style.collectionTitle}>
						{selectedCollection.id
							? selectedCollection.value
							: "Please Select Collection"}
					</div>
				</button>

				{isDropdownOpen && (
					<div role="list" className={style.collectionOptionGroup}>
						{collections.map(([id, text]) => (
							<div
								className={style.collectionOption}
								key={id}
								onClick={() => {
									setSelectedCollection({
										value: text,
										id: id,
									});
									setCurrentPageNumber(1);
									setSearchStatus(true);
									setIsDropdownOpen(false);
								}}
							>
								{text}
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default CollectionSelect;
