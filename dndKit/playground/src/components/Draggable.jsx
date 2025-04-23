import { useDndMonitor, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState, useRef, useEffect } from "react";
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
	const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } =
		useDraggable({
			id: id,
		});
	const elementRef = useRef(null);
	const [position, setPosition] = useState({x:{left}, y:{top}});

	const finalPosition = position ? {
		x: position.x + (transform?.x || 0),
		y: position.y + (transform?.y || 0),
	} : {x: transform?.x || left, y: transform?.y || top};

useEffect(()=> {
	const calculatePosition = () => {
		const element = elementRef.current;
		if(element){
			const {top, left} = element.getBoundingClientRect();
			setPosition({y:top, x:left});
		}
	};
	calculatePosition();
	window.addEventListener('resize', calculatePosition());

	return() => {
		window.removeEventListener('resize', calculatePosition());
	}

},[]);

	const style = {
		transform: `translate3d(${finalPosition.x}px, ${finalPosition.y}px,0)`,
		// transform: CSS.Translate.toString(transform),
		position: "absolute",
	};


	function handleDragEnd(event) {
		const { delta, active } = event;
		if (!delta) return;
		if (active.id === id) {
			setPosition((prev) => ({
				x: prev.x + delta.x,
				y: prev.y + delta.y,
			}));
		}
	}
	useDndMonitor({
		// onDragEnd(event) {(event)=> {handleDragEnd(event)}}
		onDragEnd: (e) => {
			// console.log(e);
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
				ref={elementRef}
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
