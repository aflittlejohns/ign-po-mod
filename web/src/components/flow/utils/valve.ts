import { Position } from "@xyflow/react";
import type { Coord, ValveHandleId } from "../types";


export	function getHandlePosition(node: any, handleId: ValveHandleId) {
		// This is a simplified example - adjust based on your actual handle positions
		// console.log(`Node: ${JSON.stringify(node)}`);
		const handleOffsets: Record<ValveHandleId, Coord> = {
			"valve-top": { x: node.measured.width / 2, y: 0 },
			"valve-top-left": { x: 0, y: node.measured.height * 0.235 },
			"valve-top-right": { x: node.measured.width, y: node.measured.height * 0.235 },
			"valve-bottom": { x: node.measured.width / 2, y: node.measured.height },
			"valve-bottom-left": { x: 0, y: node.measured.height -  (node.measured.height * 0.235)},
			"valve-bottom-right": { x: node.measured.width, y: node.measured.height -  (node.measured.height * 0.235) },
		};

		const offset = handleOffsets[handleId] || { x: 0, y: 0 };
		return {
			x: node.position.x + offset.x,
			y: node.position.y + offset.y,
		};
	}

		// Calc Position from HandleId
export	const getPosition = (handleId: ValveHandleId) => {
		switch (handleId) {
			case "valve-bottom":
				return Position.Bottom;
			case "valve-bottom-left":
				return Position.Left;
			case "valve-top-left":
				return Position.Left;
			case "valve-bottom-right":
				return Position.Right;
			case "valve-top-right":
				return Position.Right;
			case "valve-top":
				return Position.Top;
			default:
				console.warn(`${handleId} in not a valid member of type HandleId`);
				break;
		}
	};
