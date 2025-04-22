import { useState } from "react";
import {createPortal} from 'react-dom'
import { DndContext, useDroppable } from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
// import { useDroppable } from "./components/Droppable";
import { DraggablePopup } from "./components/DraggablePopup";
import Popup from "./components/Popup";
import "./App.css";
import { Valve } from "./components/Valve";

function App() {
	const [draggables, setDraggables] = useState([]);

	// Handle Valve click to add a new draggable component
	function handleValveClick(){
		setDraggables((prev)=>[
			...prev,
			{id: `draggable-${prev.length+1}`, left: 100, top: 100},
	]);
	};
	// Handle to close popup
	const closePopup = (id) => {
		console.log(`Closing popup with id: ${id}`)
		setDraggables((prev)=> prev.filter((draggable)=> draggable.id !== id))
	}
	return (
		<>
		<Valve onClick={handleValveClick}/>
		<DndContext >
			{createPortal(
				<>
			<DraggablePopup id={"draggable-popup"} />
			{draggables.map((draggable)=> (
				<Draggable key={draggable.id} left={draggable.left} top={draggable.top} onClose={closePopup}>
					<Popup id={draggable.id} />
				</Draggable>
			))}
			<Draggable left={112} top={200}>
				<Popup />
			</Draggable>
			<Draggable left={50} top={300}>
				<Popup />
			</Draggable>
				</>,
				document.body
			)}
		</DndContext>
		</>
	);
}

export default App;
