import React, { useState } from "react";
//import { UUIDTypes } from "uuid";
import "./itemClickable.module.css";

export interface ItemClickableProps extends React.HTMLProps<HTMLDivElement> {
	itemClassName: string;
	handleClick: (
		event: React.MouseEvent<HTMLDivElement>,
		clicked: boolean
	) => void;
	bitPosition: number;
}

const ItemClickable: React.FC<ItemClickableProps> = ({
	itemClassName,
	handleClick,
}): React.ReactElement => {
	const [clicked, updateClick] = useState({
		isClicked: false,
		addClassName: "",
	});
	//let isClicked = true;
	return (
		<div
			onClick={(event) => {
				//event.stopPropagation();
				updateClick((prev) => ({
					isClicked: !prev.isClicked,
					addClassName: !prev.isClicked ? " clicked" : "",
				}));
				handleClick(event, !clicked.isClicked);
			}}
			className={itemClassName + clicked.addClassName}
		></div>
	);
};

export default ItemClickable;
