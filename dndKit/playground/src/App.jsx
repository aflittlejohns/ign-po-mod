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
	function handleValveClick(e){
		console.log(e)
		const {clientX, clientY} = e;
		const toTop = clientY - 50;
		setDraggables((prev)=>[
			...prev,
			{id: `draggable-${prev.length+1}`, left: clientX, top: clientY},
	]);
	};
	// Handle to close popup
	const closePopup = (id) => {
		console.log(`Closing popup with id: ${id}`)
		setDraggables((prev)=> prev.filter((draggable)=> draggable.id !== id))
	}
	return (
		<>
		<Valve onClick={handleValveClick} />
		<Valve onClick={handleValveClick}
		x={150}
		y={150}
		className={`v1`}
		/>
		<Valve onClick={handleValveClick}
		x={450}
		y={150}
		className={`v2`}
		/>
		<Valve onClick={handleValveClick}
		x={1900}
		y={50}
		className={`v3`}
		/>
		<DndContext >
			{createPortal(
				<>
			<DraggablePopup id={"draggable-popup"} />
			{draggables.map((draggable)=> (
				<Draggable key={draggable.id} id={draggable.id} left={draggable.left} top={draggable.top} onClose={closePopup}>
					<Popup id={draggable.id} />
				</Draggable>
			))}
				</>,
				document.body
			)}
		</DndContext>
		</>
	);
}

export default App;
