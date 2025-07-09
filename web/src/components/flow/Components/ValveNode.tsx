import type { NodeProps } from "@xyflow/react";
import * as React from "react";
import type { ValveNode } from "../types";
import { ValveNodeCompound } from "./ValveNodeCompound";

export default function ValveNode({ data }: NodeProps<ValveNode>) {
	return (
		<>
			<ValveNodeCompound.node
				props={data.props}
				emit={data.emit}
				position={data.position}
			>
				<ValveNodeCompound.valveMp />
			</ValveNodeCompound.node>
		</>
	);
}
