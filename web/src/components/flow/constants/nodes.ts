import type { NodeTypes } from "@xyflow/react";
import { FlowNodeComponent } from "../Components/FlowNode";

export const nodeTypes = {
	valve: FlowNodeComponent,
	// Add any of your custom nodes here!
} satisfies NodeTypes;


