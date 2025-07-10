import type { BuiltInNode, Node } from "@xyflow/react";
import type { ComponentProps, Emitter } from "@inductiveautomation/perspective-client";
import type { ValveProps } from "../../../api/types";
import type { ReactNode } from "react";

export type ValveNodeType = Node<ValveNodeContext, "valve">;

export type AppNode = BuiltInNode | ValveNodeType;

export type ValveHandleId =
	| "valve-top"
	| "valve-top-left"
	| "valve-top-right"
	| "valve-bottom"
	| "valve-bottom-left"
	| "valve-bottom-right";


export type ValveNodeContext = {
	emit?: Emitter;
	position?: ComponentProps<any,any>['position']
	props?: ValveProps;
	onActionPerformed?: () => void;
	children?: ReactNode;
};
