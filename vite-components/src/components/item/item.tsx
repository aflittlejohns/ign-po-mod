import * as React from "react";
// import "./item.module.css";

interface ItemProps {
	itemClassName: string;
	handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
// const bit = (n: number, i: number): number => {
// 	return (n >> i) & 1;
// };
const Item: React.FC<ItemProps> = ({ itemClassName, handleClick }): React.ReactElement => {
	return <div className={itemClassName}
	onClick={handleClick}></div>;
};
Item.displayName = "Item";
export default Item;
