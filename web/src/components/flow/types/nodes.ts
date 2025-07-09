import type { Node } from "@xyflow/react";
import type { ValveNodeContext } from ".";
import ValveNode  from './../Components/ValveNode'

export type ValveNode = Node<ValveNodeContext, "string">;

export const nodeTypes = {
	valve: ValveNode
};

export type ValveHandleId =
	| "valve-top"
	| "valve-top-left"
	| "valve-top-right"
	| "valve-bottom"
	| "valve-bottom-left"
	| "valve-bottom-right";
