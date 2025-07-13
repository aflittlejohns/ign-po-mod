import type { Node, NodeTypes } from "@xyflow/react";
import { ValveNode } from "../Components/ValveNode";
import { valveStatus } from "../../../api/initialState";

export const nodeTypes = {
	valve: ValveNode,
	// Add any of your custom nodes here!
} satisfies NodeTypes;

export const initialNodes: Node[] = [
	{
		id: "V401",
		position: { x: 100, y: 100 },
		type: "valve",
		width: 24,
		height: 48,
		data: {
			props: valveStatus,
			emit: () => {},
			position: { x: "50px", y: "50px" },
		},
	},
];
