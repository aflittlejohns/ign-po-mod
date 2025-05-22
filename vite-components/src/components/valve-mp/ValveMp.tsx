import * as React from "react";
import { type ReactNode } from "react";
import type { DraggableItem, DraggableProps, itemNameProps, ValveProps } from "../../api/types";
import {v4 as uuid} from 'uuid';
import { getValveMpItemClassName, valveMpItemNames } from "../../api/utils";
import Item from "../item/item";
import { useCreateContext } from "../../utils/createContext";
import { VALVE_COMPONENT_TYPE } from "../../api/types";
import {
	DndContext,
	useDndMonitor,
	useDraggable,
	type DragEndEvent,
	type UniqueIdentifier,
	type UseDraggableArguments,
} from "@dnd-kit/core";
import { createPortal } from "react-dom";
// import './valve-mp.module.css'
// import {valveStatus} from '../../api/initialState'
const COMPONENT_TYPE = VALVE_COMPONENT_TYPE;

// import {valveStatus} from './initialState'

type ValveCompoundProps = {
	valveProps: ValveProps;
	// onActionPerformed: ()=> void
	openPopup: (e: React.MouseEvent<HTMLDivElement>) => void;
	closePopup: (id: UniqueIdentifier) => void;
	draggables: DraggableItem[];
	setDraggables: React.Dispatch<DraggableItem[]>;
	componentItemNames: itemNameProps[];
	dropPosition: {x: number, y: number};
	setDropPosition: (prev:{x: number, y: number}) => void;
	useDraggable: (prev: UseDraggableArguments)=> void;
	children: ReactNode;
};

const [ValveContextProvider, useValveContext] =
useCreateContext<ValveCompoundProps>("ValveCompound");

const Root = ({ valveProps, children }: ValveCompoundProps) => {
	const [draggables, setDraggables] = React.useState<DraggableItem[]>([]);
	const [dropPosition, setDropPosition] = React.useState({ x:0, y: 0 });
	const eventsEnabled = true;
	const componentItemNames = valveMpItemNames;

	// Handle Valve click to add a new draggable component
	function openPopup(e: React.MouseEvent<HTMLDivElement>) {
		console.log(e);
		if (!eventsEnabled) {
			console.log("Valve is disabled in the design-scope");
			return;
		}
		const { clientX, clientY } = e;
		// const toTop = clientY - 50;
		setDraggables((prev: DraggableItem[]): DraggableItem[] => [
			...prev,
			{ id: uuid(), left: clientX, top: clientY },
		]);
	}
	// Handle to close popup
	const closePopup = (id: UniqueIdentifier) => {
		console.log(`Closing popup with id: ${id}`);
		setDraggables((prev)=> prev.filter((draggable)=> draggable.id !== id))
	};

	return (
		<ValveContextProvider
			{...{
				valveProps,
				// onActionPerformed
				openPopup,
				closePopup,
				draggables,
				setDraggables,
				componentItemNames,
				dropPosition,
				setDropPosition,
				useDraggable,
			}}
		>
			{children}
			{draggables.map((draggableItem)=>
				ValveMpCompound.draggable({
					id: draggableItem.id,
					onClose: closePopup,
					left: draggableItem.left,
					top: draggableItem.top,
					className:"draggable",
					children: <div>Popup Content</div>,
})
			)}
		</ValveContextProvider>
	);
};
const valve = () => {
	const { valveProps, openPopup, componentItemNames } = useValveContext("Valve");
	const { ValveStatus } = valveProps;
	const inCoord = false;
	// Memoize the handleClick function
	// const handleClick = React.useCallback(()=>{
	// 	props.onActionPerformed();
	// },[props]);

	if (!inCoord) {
		return (
			<div
			className={"hmi-component"}
			// {...emit({
				// 	classes: [`hmi-component hmi-component__column `],
				// })}
				data-component={COMPONENT_TYPE}
				onClick={(e) => {openPopup(e)}}
			>
				<div className="hmi-component__row">
					<div className="hmi-component-valve__mp">
						{componentItemNames.map(
							({ value, index, key }) => (
								console.log(
									`re-rendered ,key ${key} value ${value} index ${index}`
								),
								(
									<Item
										itemClassName={
											value + " " + getValveMpItemClassName(index, ValveStatus)
										}
										handleClick={openPopup}
										key={key}
									/>
								)
							)
						)}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div
				// {...emit({
				// 	classes: [`hmi-component hmi-component-valve `],
				// })}
				className={"hmi-component"}
				data-component={COMPONENT_TYPE}
				onClick={(e) => {openPopup(e)}}
			>
				{componentItemNames.map(
					({ value, index, key }) => (
						console.log(
							`re-rendered ,key ${key} value ${value} index ${index}`
						),
						(
							<Item
								itemClassName={
									value + " " + getValveMpItemClassName(index, ValveStatus)
								}
								key={key}
							/>
						)
					)
				)}
			</div>
		);
	}
};
const draggableContext = (children: ReactNode) => {
	return (
		<DndContext >
			{createPortal(
				<>
				{children}
			</>
				,
		document.body
	)}
		</DndContext>
	);
};
export function draggable({
	id,
	onClose,
	left = 0,
	top = 0,
	children,
	className='draggable'
}:DraggableProps) {
	// const id = useRef(uuidv4()).current;
	const {dropPosition, setDropPosition, useDraggable} = useValveContext("draggable");
	const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } =
		useDraggable({
			id: id,
		});
	setDropPosition({...dropPosition,x: left, y: top})

 const finalPosition = {
	 x: dropPosition.x + (transform?.x || 0),
	 y: dropPosition.y + (transform?.y || 0),
	};


	const style = {
		transform: `translate3d(${finalPosition.x}px, ${finalPosition.y}px,0)`,
	};

	function handleDragEnd(event: DragEndEvent) {
		const { delta, active } = event;
		if (active.id === id) {
			setDropPosition((prev: {x:number, y: number}) => ({
				x: prev.x + delta.x,
				y: prev.y + delta.y,
			}));
		}
		if (!delta) return;
	}
	useDndMonitor({
		// onDragEnd(event) {(event)=> {handleDragEnd(event)}}
		onDragEnd: (e) => {
			console.log(e);
			handleDragEnd(e);
		},
	});
	function handleClose(e: React.MouseEvent) {
		e.stopPropagation();
		console.log("Handle Close");
		onClose(id);
	}
	return (
		<>
			<div
				ref={setNodeRef}
				className={className}
				id={String(id)}
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
			</div>
		</>
	);
}


export const ValveMpCompound = {
	Root,
	valve,
	draggableContext,
	draggable,
};
