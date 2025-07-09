import type { Emitter, JsObject } from "@inductiveautomation/perspective-client";
import type { ReactNode } from "react";
import type { ValveProps } from "../../../api/types";
/**
 * Index file for flow types
*/
export * from './nodes';
export * from './helper';

export type ValveNodeContext = {
	props: ValveProps;
	emit: Emitter;
	position: JsObject;
	children: ReactNode;
}
