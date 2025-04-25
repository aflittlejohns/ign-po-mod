import { useDndMonitor, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState, useRef, useEffect, createContext } from "react";

import { useGenericContext } from "../stores/DraggableGenericContext";


export function Draggable({
	id,
	onClose,
	element: Element = "div",
	left = 0,
	top = 0,
	children,
	className='draggable'
}) {
	const context = useGenericContext();
	const {state, dispatch} = context;
	const [isMounted, setMounted] = useState(false);

	const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef, isDragging } =
		useDraggable({
			id: id,
		});
	const elementRef = useRef(null);
	const [position, setPosition] = useState({x:null, y: null});
	console.log(position);

	const finalPosition = isDragging ? {
		x:  position.x + (transform?.x || 0), //position.x +
		y: position.y + (transform?.y || 0), //position.y +
	}: {x:position.x, y: position.y};

useEffect(()=> {
	const calculatePosition = () => {
		const element = elementRef.current;
		if(element){
			console.log(element.getBoundingClientRect());
			const {top, left} = element.getBoundingClientRect();
			setPosition({y:top, x:left});
			dispatch({
				type: "UPDATE_POSITION",
				payload:{
					componentId:id,
					data:{
						x: left,
						y: top,
					},
				} ,
			})
		}
	};
	calculatePosition();
	setMounted(true);


	window.addEventListener('resize', calculatePosition());

	return() => {
		window.removeEventListener('resize', calculatePosition());
	}

},[])


// if (isMounted){
// 	transformProp = `translate3d(${finalPosition.x}px, ${finalPosition.y}px,0)`
// }
	const style = {
		// transform: CSS.Translate.toString(transform),
		transform: `translate3d(${finalPosition.x}px, ${finalPosition.y}px,0)`,
		// transform: transformProp,
		position: 'fixed',
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
