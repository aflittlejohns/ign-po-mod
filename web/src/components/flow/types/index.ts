import type { Emitter, JsObject } from "@inductiveautomation/perspective-client";
import type { ReactNode } from "react";
import type { ValveState } from "../../../api/types";
/**
 * Index file for flow types
*/
export * from './nodes';
export * from './helper';

export type ValveNodeContext = {
	props: ValveState;
	emit: Emitter;
	position: JsObject;
	children: ReactNode;
}
