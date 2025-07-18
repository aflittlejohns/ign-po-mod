import * as React from "react";
import { Handle, Position } from "@xyflow/react";
import type { NodeProps, Node } from "@xyflow/react";
import {
	PageStore,
	View,
	type ClientStore,
	type ComponentMeta,
	type ComponentProps,
	type JsObject,
	type OutputListener,
	type PComponent,
	type PlainObject,
	type PropertyTree,
	type SizeObject,
	type StyleObject,
} from "@inductiveautomation/perspective-client";
// import { ValveCore } from "../../common/ValveCore";
import { formatStyleNames } from "../utils";

const COMPONENT_TYPE = "hmi.flow.FlowNode";
type HmiFlowNodeProps = {
	instances: EmbeddedViewProps[];
	style?: StyleObject;
};
// Define the node data structure
export type FlowNodeData = {
	// Add any React Flow specific data
	id: string; // Unique Id
	label?: string;
	childProps:ComponentProps<HmiFlowNodeProps>;
};
// export type ViewNodeData = {
// 	cprops: ComponentProps<PlainObject>;
// 	props: HmiFlowNodeProps;
// };
export type EmbeddedViewProps = {
	key: React.Key;
	viewPath: string;
	viewParams: JsObject;
	viewStyle: StyleObject;
	useDefaultHeight: boolean;
	useDefaultMinHeight: boolean;
	useDefaultMinWidth: boolean;
	useDefaultWidth: boolean;
};
type EmbeddedNodeViewProps = {
	store: ClientStore;
	mountPath: string;
	view: EmbeddedViewProps;
	listenResize?: boolean;
	onResize?: () => void;
	key: React.Key;
	outputListener?: OutputListener;
};
const EmbeddedNodeView = React.memo(
	({
		store,
		mountPath,
		view,
		onResize,
		outputListener,
	}: EmbeddedNodeViewProps) => {
		return (
			<>
				<View
					key={PageStore.instanceKeyFor(view.viewPath, mountPath)}
					store={store}
					mountPath={mountPath}
					resourcePath={view.viewPath}
					useDefaultHeight={view.useDefaultHeight}
					useDefaultMinHeight={view.useDefaultMinHeight}
					useDefaultMinWidth={view.useDefaultMinWidth}
					useDefaultWidth={view.useDefaultWidth}
					params={{
						...view.viewParams,
					}}
					outputListener={outputListener}
					onViewSizeChange={() => onResize?.()}
					rootStyle={{
						width: view.useDefaultWidth ? undefined : "100%",
						height: view.useDefaultHeight ? undefined : "100%",
						...view.viewStyle,
						classes: formatStyleNames(view.viewStyle.classes),
					}}
				/>
			</>
		);
	}
);
export type FlowNode = Node<FlowNodeData, "valve">;

function getChildMountPath(
	props: ComponentProps<PlainObject>,
	childIndex: any
) {
	return `${props.store.viewMountPath}.${props.store.addressPathString}[${childIndex}]`;
}
function resolveViewProps(
	props: HmiFlowNodeProps,
	index: number
): EmbeddedViewProps {
	const view = props.instances[index];

	return {
		key: view.key && view.key !== "" ? view.key : index,
		viewPath: view.viewPath,
		viewParams: view.viewParams,
		viewStyle: view.viewStyle,
		useDefaultHeight: view.useDefaultHeight,
		useDefaultMinHeight: view.useDefaultMinHeight,
		useDefaultMinWidth: view.useDefaultMinWidth,
		useDefaultWidth: view.useDefaultWidth,
	};
}
export function FlowNodeComponent(d: NodeProps<FlowNode>) {
	const { data } = d;
	const { childProps } = data;

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

	return (
		<div {...childProps.emit()}>
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
			{childProps.props.instances.map((_, index) => {
				const mountPath = getChildMountPath(childProps, index);
				const viewProps = resolveViewProps(childProps.props, index);
				const outputListener = (outputName: string, outputValue: any): void => {
					childProps.store.props.write(
						`instances[${index}].viewParams.${outputName}`,
						outputValue
					);
				};
				<EmbeddedNodeView
					store={childProps.store.view.page.parent}
					view={viewProps}
					mountPath={mountPath}
					key={viewProps.key}
					outputListener={outputListener}
				/>;
			})}
		</div>
	);
}

export class FlowNodeComponentMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 300,
			height: 300,
		};
	}

	getPropsReducer(tree: PropertyTree): HmiFlowNodeProps {
		return {
			instances: tree.read("instances", []),
			style: tree.read("style", {}),
		} as never;
	}

	getViewComponent(): PComponent {
		return FlowNodeComponent as unknown as PComponent;
	}
}
