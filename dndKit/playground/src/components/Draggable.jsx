import { useDndMonitor, useDraggable } from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities';
import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

export function Draggable({ element:Element = "div", left=0, top=0, children }) {
	const id = useRef(uuidv4()).current;
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
	});

	const [dropPosition, setDropPosition] = useState({ x: left, y: top });
	const finalPosition = {
		x: dropPosition.x + (transform?.x || 0),
		y: dropPosition.y + (transform?.y || 0),
	};
	const style = {
	transform: `translate3d(${finalPosition.x}px, ${finalPosition.y}px,0)`,
	position: "absolute",
	}

	function handleDragEnd(event) {
		const { delta, active } = event;
		if (!delta) return;
		if (active.id === id){
			setDropPosition((prev)=> ({
				x: prev.x + delta.x,
				y: prev.y + delta.y
			}))

		}
}
	useDndMonitor({
		// onDragEnd(event) {(event)=> {handleDragEnd(event)}}
		onDragEnd:(e) => {
			console.log(e);
			handleDragEnd(e);
		}
});
	return (
		<Element
		ref={setNodeRef}
		role='button'
		id={id}
		{...attributes}
		{...listeners}
		style={style}
		>
			{children}


		</Element>
	);
}
