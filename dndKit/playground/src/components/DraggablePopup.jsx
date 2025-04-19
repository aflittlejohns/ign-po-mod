import React, {useState} from 'react';
import { useDraggable, useDndMonitor, DragOverlay } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export function DraggablePopup() {
	const {attributes, listeners, setNodeRef, transform } = useDraggable({id:'draggable-popup'});
	// console.log(`transform: ${transform}, attributes: ${attributes}, listeners: ${listeners}`);
	const [dropPosition, setDropPosition] = useState({ x: 0, y: 0 });
	const finalPosition = {
		x: dropPosition.x + (transform?.x || 0),
		y: dropPosition.y + (transform?.y || 0),
	}

	const style = {
		transform: `translate3d(${finalPosition.x}px,${finalPosition.y}px,0)`,
		position: 'absolute',
		width: '200px',
		height: '200px',
		backgroundColor: 'lightblue',
		border: '1px solid blue',
		borderRadius: '8px',
		cursor: 'grab',
	};

	function handleDragEnd(event) {
		// console.log(event);
		const { delta } = event;
		if (delta === undefined){ return}
		setDropPosition((prev)=> ({
			x: prev.x + delta.x,
			y: prev.y + delta.y
		}))
	}
	useDndMonitor({
		// onDragEnd(event) {(event)=> {handleDragEnd(event)}}
		onDragEnd(e){
			console.log(e);
			handleDragEnd(e);
		}
});
	return (
		<>
		<div
		ref={setNodeRef}
		style={style}
		{...listeners}
		{...attributes}
		>
			<p>Drag me!</p>
			<p>I'm a draggable popup!</p>
		</div>
		</>
	);
}
