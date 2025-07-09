import type { ComponentProps } from "@inductiveautomation/perspective-client";
import type { ReactNode } from "react";
import type { ValveProps } from "../../../api/types";
/**
 * Index file for flow types
*/
export * from './nodes';
export * from './helper';

export type ValveNodeContext = {
	props: ComponentProps<ValveProps>
	children: ReactNode;
}
