import type { Node } from "@xyflow/react";
import { valveStatus } from "../../../api/initialState";


// export const initialNodes: Node[] = [];
export const initialNodes: Node[] = [
	{
		id: "V410",
		position: { x: 100, y: 100 },
		type: "valve",
		data: {
			props: valveStatus,
			emit: () => {},
			position: { x: "50px", y: "50px" },
		},
	},
];
