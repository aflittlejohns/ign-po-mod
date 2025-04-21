import { useState } from "react";
import { DndContext, useDroppable } from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
// import { useDroppable } from "./components/Droppable";
import { DraggablePopup } from "./components/DraggablePopup";
import Popup from "./components/Popup";
import "./App.css";

function App() {
	return (
		<DndContext >
			<DraggablePopup id={"draggable-popup"} />
			<Draggable left={112} top={200}>
				<Popup />
			</Draggable>
			<Draggable left={50} top={400}>
				<Popup />
			</Draggable>
		</DndContext>
	);
}

export default App;
