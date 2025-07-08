import type { Node, NodeTypes } from "@xyflow/react";
import type { ValveNodeContext } from ".";
import { ValveMpCompound } from "../../process-objects/valve-mp/ValveMp";

export type ValveNode = Node<ValveNodeContext, "string">;

export const nodeTypes = {
	valve: ValveMpCompound.valve
} satisfies NodeTypes;

export type ValveHandleId =
	| "valve-top"
	| "valve-top-left"
	| "valve-top-right"
	| "valve-bottom"
	| "valve-bottom-left"
	| "valve-bottom-right";
