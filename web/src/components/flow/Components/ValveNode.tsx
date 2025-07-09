import type { NodeProps } from "@xyflow/react";
import * as React from "react";
import type { ValveNode } from "../types";
import { ValveNodeCompound } from "./ValveNodeCompound";

export default function ValveNode({ data }: NodeProps<ValveNode>) {
	return (
		<>
			<ValveNodeCompound.node
				{...data}
			>
				<ValveNodeCompound.valveMp />
			</ValveNodeCompound.node>
		</>
	);
}
