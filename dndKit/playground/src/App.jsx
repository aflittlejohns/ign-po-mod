import { useState } from "react";
import { DndContext, useDroppable } from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
// import { useDroppable } from "./components/Droppable";
import { DraggablePopup } from "./components/DraggablePopup";

import "./App.css";

function App() {
	// const [isDropped, setIsDropped] = useState(false);
	const [dropPosition, setDropPosition] = useState({ x: 0, y: 0 });
	const {setNodeRef} = useDroppable({
		id: 'viewport',});

	return (
		<DndContext
		// onDragStart={handleOnDragStart}
		onDragEnd={handleDragEnd}>
		<div
		ref={setNodeRef}
		style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			display: 'flex',
			// justifyContent: 'center',
			// alignItems: 'center',
		}}
		>
			<DraggablePopup />
		</div>
		</DndContext>
	);
	function handleDragEnd(event) {

		// Calculate drop position
		const { delta } = event;
		setDropPosition((prev) => ({
			x: prev.x + delta.x,
			y: prev.y + delta.y,
		}));
	}
}

export default App;
