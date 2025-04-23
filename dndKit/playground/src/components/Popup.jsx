import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";

function Popup({ children, className = "popup"}) {
	// const id = useRef(uuidv4()).current;
	const elementRef= useRef(null);
	const [position, setPosition] = useState({
		top: 0,
		left: 0,
	});
	useEffect(()=> {
		//Code to run after component mounts, i.e setup code
		const calculatePosition = () => {
			const element = elementRef.current;
			if(element){
				const {left, top} = element.getBoundingClientRect();
				console.log(`Left: ${left} Top: ${top}`)
				setPosition({left, top});
			}
		};
		calculatePosition();
		window.addEventListener('resize', calculatePosition());

		return() => {
			// Cleanup code (run before unmount)
			window.removeEventListener('resize',calculatePosition());
		}
	},
[]); // Empty depency array ensures cleanup runs on unmount
	const style = {
		// position: "absolute",
		// width: "100px",
		// height: "100px",
		backgroundColor: "aqua",
		border: "1px solid blue",
		borderRadius: "8px",
		cursor: "grab",
	};


	return (
		<>
		<div ref={elementRef} className={className} style={style}>

			<p>Drag me!</p>
			<p>My Position is: Top {position.top}px, Left {position.left}px</p>
			{children}
		</div>
		</>
	);
}

export default Popup;
