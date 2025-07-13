import type { BuiltInNode, Node } from "@xyflow/react";
import type { ComponentProps} from "@inductiveautomation/perspective-client";
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
	componentProps: ComponentProps<any, any>;
	valveProps: ValveProps;
	onActionPerformed?: () => void;
	children: ReactNode;
};
