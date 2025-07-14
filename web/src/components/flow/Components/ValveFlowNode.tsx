import * as React from "react";
import { Handle, Position } from "@xyflow/react";
import type { NodeProps, Node } from "@xyflow/react";
import {
	type ComponentProps,
} from "@inductiveautomation/perspective-client";
import type { ValveProps } from "../../../api/types";
import { ValveCore } from "../../common/ValveCore";
// Define the node data structure
type ValveNodeData = {
	props: ComponentProps<ValveProps>;
	// Add any React Flow specific data
	id: string; // Unique Id
	label?: string;

};

type ValveFlowNode = Node<ValveNodeData, "valve">;

export function ValveFlowNode({ data, selected }: NodeProps<ValveFlowNode>) {
	// Validate that we have the required data
	if (!data?.props) {
		console.warn("ValveNode: Missing componentProps in data");
		return (
			<div className="valve-node-error">
				<div>Invalid Valve Node</div>
				<div>Missing component data</div>
			</div>
		);
	}

	const { props } = data;
	const { eventsEnabled, componentEvents } = props;

	// Handle Ignition component lifecycle
	// React.useEffect(() => {
	// 	// Initialize any custom properties or bindings
	// 	console.log("ValveNode Mounted");
	// 	console.log("componentProps", props);
	// 	props["custom"] = { value: { tagpath: "[default]V401" } };
	// 	props.def = {
	// 		custom: {
	// 			value: {
	// 				tagpath: "[default]V401",
	// 			},
	// 		},
	// 		meta: {
	// 			name: "valve-node",
	// 		},
	// 		position: {
	// 			basis: "48px",
	// 		},
	// 		propConfig: {
	// 			"props.processObject.status": {
	// 				access: PropertyAccess.PUBLIC,
	// 				binding: {
	// 					config: {
	// 						fallbackDelay: 2.5,
	// 						mode: "indirect",
	// 						references: {
	// 							tagpath: "{this.custom.value.tagpath}",
	// 						},
	// 						tagPath: "{tagpath}/hmi/status",
	// 					},
	// 					type: "tag",
	// 				},
	// 			},
	// 		},
	// 		props: {
	// 			processObject: {},
	// 		},
	// 		type: "hmi.flow.ValveNode",
	// 		version: 1
	// 	};
	// }, []);

	// Handle component actions
	const onActionPerformed = React.useCallback(() => {
		if (!eventsEnabled) {
			console.log("Valve is disabled in design mode");
			return;
		}

		console.log("Valve clicked!");
		componentEvents?.fireComponentEvent("onActionPerformed", {
			nodeId: data.id,
		});
	}, [eventsEnabled, componentEvents, data]);

	return (
		<div className={`valve-flow-node ${selected ? "selected" : ""}`}>
			{/* React Flow Handles */}
			<Handle
				type="target"
				position={Position.Top}
				id="valve-top"
				className="valve-handle valve-handle-top"
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="valve-right"
				className="valve-handle valve-handle-right"
			/>
			<Handle
				type="source"
				position={Position.Bottom}
				id="valve-bottom"
				className="valve-handle valve-handle-bottom"
			/>
			<Handle
				type="target"
				position={Position.Left}
				id="valve-left"
				className="valve-handle valve-handle-left"
			/>

			{/* Wrapped Ignition Component */}
			<ValveCore
			componentProps={props}
			onActionPerformed={onActionPerformed}
			className="valve-flow-node-content"
			/>
			{/* <ValveNodeCompound.Root
				componentProps={props}
				onActionPerformed={onActionPerformed}
			>
				<ValveNodeCompound.valveMp {...data.props}/>
				{props.showLabel && <ValveNodeCompound.popover />}
			</ValveNodeCompound.Root> */}
		</div>
	);
}

