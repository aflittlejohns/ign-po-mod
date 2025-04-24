import { useDndMonitor, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";


export function Draggable({
	id,
	onClose,
	element: Element = "div",
	left = 0,
	top = 0,
	children,
	className='draggable'
}) {
	// const id = useRef(uuidv4()).current;
	const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } =
		useDraggable({
			id: id,
		});
 console.log(top)
	const [dropPosition, setDropPosition] = useState({ x: left, y: top });
	const finalPosition = {
		x: dropPosition.x + (transform?.x || 0),
		y: dropPosition.y + (transform?.y || 0),
	};

	const style = {
		transform: `translate3d(${finalPosition.x}px, ${finalPosition.y}px,0)`,
		position: 'absolute',
	};

	function handleDragEnd(event) {
		const { delta, active } = event;
		if (!delta) return;
		if (active.id === id) {
			setDropPosition((prev) => ({
				x: prev.x + delta.x,
				y: prev.y + delta.y,
			}));
		}
	}
	useDndMonitor({
		// onDragEnd(event) {(event)=> {handleDragEnd(event)}}
		onDragEnd: (e) => {
			console.log(e);
			handleDragEnd(e);
		},
	});
	function handleClose(e) {
		e.stopPropagation();
		console.log("Handle Close");
		onClose(id);
	}
	return (
		<>
			<Element
				ref={setNodeRef}
				className={className}
				id={id}
				style={style}

				>
				<div
				ref={setActivatorNodeRef}
				className='draggable-item-wrapper'>
				<span>Title</span>
				<button
					className={'button'}
					onClick={(e) => {
						e.stopPropagation();
						console.log("Close Popup");
						handleClose(e);
					}}

				>
					X
				</button>
				<div ref={setActivatorNodeRef} {...attributes} {...listeners}>
					{children}
				</div>
				</div>
			</Element>
		</>
	);
}
