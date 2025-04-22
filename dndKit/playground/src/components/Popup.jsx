import React, { useRef } from "react";
import { useDraggable } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";

function Popup({ children, className = "popup"}) {
	// const id = useRef(uuidv4()).current;

	const style = {
		position: "absolute",
		// width: "100px",
		height: "100px",
		backgroundColor: "aqua",
		border: "1px solid blue",
		borderRadius: "8px",
		cursor: "grab",
	};


	return (
		<>
		<div className={className} style={style}>

			<p>Drag me!</p>
			<p>I'm popup!</p>
			{children}
		</div>
		</>
	);
}

export default Popup;
