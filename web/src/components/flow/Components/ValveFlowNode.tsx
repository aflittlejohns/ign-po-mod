import * as React from "react";
import { Handle, Position } from "@xyflow/react";
import type { NodeProps, Node } from "@xyflow/react";
import {
	type ComponentProps,
	type ComponentStore,
	type Emitter,
	type PlainObject,
} from "@inductiveautomation/perspective-client";
// import { ValveCore } from "../../common/ValveCore";
import { JsonViewComponent, type JsonViewProps } from "../../perspective/JsonView";
// Define the node data structure
export type ValveNodeData = {
	cprops: ComponentProps<JsonViewProps, PlainObject>;
	// Add any React Flow specific data
	id: string; // Unique Id
	label?: string;
};
export type JsonViewData = {
	cprops: ComponentProps<any,any>
	props: JsonViewProps;
	store: ComponentStore;
	emit: Emitter;
}
export type ValveFlowNode = Node<JsonViewData, "valve">;

export function ValveFlowNode(d:NodeProps<ValveFlowNode>) {
	const {data, selected ,} = d
	console.log("Data", data);
	// Validate that we have the required data
	if (!data) {
		console.warn("ValveNode: Missing componentProps in data");
		return (
			<div className="valve-node-error">
				<div>Invalid Valve Node</div>
				<div>Missing component data</div>
			</div>
		);
	}

	const { emit, store, props, cprops  } = data;


	console.log("props", props);
	console.log("emit", emit);
	console.log("Store", store);


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
			<JsonViewComponent
			{...cprops}
			emit={emit}
			store={store}
			props={props}
			position={{'basis': '48px'}}

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

