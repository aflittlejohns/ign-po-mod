import * as React from "react";
import { useCallback } from "react";
import {
	addEdge,
	Background,
	Controls,
	getSmoothStepPath,
	MiniMap,
	Panel,
	ReactFlow,
	useEdgesState,
	useNodesState,
	type Edge,
	type Node,
	type OnConnect,
} from "@xyflow/react";
import { type ValveHandleId } from "./types";
import { getHandlePosition, getPosition } from "./utils/valve";
import Pipeline from "./Components/Pipeline";
import { css } from "@emotion/css";
import { ComponentStoreDelegate, ComponentStoreState, PageStore, View, type AbstractUIElementStore, type ClientStore, type ComponentMeta, type ComponentProps, type JsObject, type OutputListener, type PComponent, type PlainObject, type PropertyTree, type SizeObject, type StyleObject} from "@inductiveautomation/perspective-client";
import { FlowNodeComponent } from "./Components";
import { IconHandClick } from "../../utils/icons";
import { createFlowNode, formatStyleNames } from "./utils";
import { DevTools } from "./DevTools";
import { useFlowProviderStore } from "./store/FlowProvider";


const COMPONENT_TYPE = "hmi.flow.Flow";

const edgeTypes = {
	pipeline: Pipeline,
};

const nodeTypes = {
	valve: FlowNodeComponent,
};
export type IgNodeProps = {
	key?: string;
	id?: string;
	tagpath?: string;
};
export type FlowProps = {
	flowProviderProps: ComponentProps<IgNodeProps[]>;
};
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
export const EmbeddedNodeView = React.memo(
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
) as typeof EmbeddedNodeView;
export type FlowNode = Node<FlowNodeData, "valve">;

function getChildMountPath(
	props: ComponentProps<PlainObject>,
	childIndex: any
) {
	return `${props.store.viewMountPath}.${props.store.addressPathString}[${childIndex}]`;
}

export const Flow = (props: ComponentProps<any>) => {
	const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]); // Empty Node State for now
	const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]); // Empty Edges State for now
console.log("flow props", props);
    const {
        createEmbeddedNodeView,
        addEmbeddedView,
     } = useFlowProviderStore();


        // Create the embedded view
        const embeddedView = createEmbeddedNodeView({
	viewPath: 'valve',
	viewParams: {value: {tagpath: "[default]V410"}},
	viewStyle: {classes: ""},
        });

        // Add to store
        addEmbeddedView(embeddedView);

        // Create flow node with embedded view reference
        const nodeData = {
            embeddedViewId: embeddedView.id,
            id: embeddedView.id,
            label: `Valve ${nodes.length + 1}`,
        };

        const inst = createFlowNode({ x: 100, y: 100 }, nodeData);
        setNodes((prev: Node[]) => [...prev, inst]);
    };

	const onConnect: OnConnect = useCallback(
		(edge) => {
			const sourceNode = nodes.find((n) => n.id === edge.source);
			const targetNode = nodes.find((n) => n.id === edge.target);

			let edgePath = null;

			if (!sourceNode || !targetNode) return;

			// Calculate actual handle positions
			if (!edge.sourceHandle || !edge.targetHandle) return;

			const sourcePos = getHandlePosition(
				sourceNode,
				edge.sourceHandle as ValveHandleId
			);
			const targetPos = getHandlePosition(
				targetNode,
				edge.targetHandle as ValveHandleId
			);

			const [path] = getSmoothStepPath({
				sourceX: sourcePos.x,
				sourceY: sourcePos.y,
				targetX: targetPos.x,
				targetY: targetPos.y,
				sourcePosition: getPosition(edge.sourceHandle as ValveHandleId),
				targetPosition: getPosition(edge.targetHandle as ValveHandleId),
			});
			console.log(
				`
	SourceX: ${sourcePos.x}
	SourceY: ${sourcePos.y}
	TargetX: ${targetPos.x}
	TargetY: ${targetPos.y}
	`
			);

			edgePath = path;

			const pipeline = {
				...edge,
				type: "pipeline",
				data: {
					path: edgePath,
					intersections: [],
				},
			};

			setEdges((edges) => addEdge(pipeline, edges));
			console.log(`OnConnect Function Triggered with custom edge and path`);
		},
		[setEdges, nodes]
	);
 const viewPath = "valve"
	const viewParams = {value:{tagpath:"[default]V410"}};
	const viewStyle = {};

	const viewNodeProps = {
		key: nodes.length + 1,
		viewPath: viewPath,
		viewParams: viewParams,
		viewStyle: viewStyle,
		useDefaultHeight: false,
		useDefaultMinHeight: false,
		useDefaultMinWidth: false,
		useDefaultWidth: false,
	};

	const addValveNodeInstance = () => {
		if (!props) {
			console.warn("No flowProviderProps");
			return;
		} else {
			const componentProps = {
				props: viewNodeProps,
				emit: props.emit,
				position: { basis: "48px", grow: 0, shrink: 1, display: true },
				eventsEnabled: true,
				componentEvents: props.componentEvents,
				domEvents: props.domEvents,
				meta: props.meta,
				store: props.store,
				def: props.def,
				custom: props.custom,
				layout: props.layout,
				i18nStale: false,
			};
			const inst = createFlowNode(
				{ x: 100, y: 100 },
				{ ...componentProps}
			);
			console.log("inst", inst);

			setNodes((prev: Node[]) => [...prev, inst]);
			console.log("nodes", nodes);
		}
	};
	return (
		<div
			className={css({
				width: "100vw",
				height: "100vh",
			})}
		>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				onConnect={onConnect}
				fitView
			>
				<Background />
				<MiniMap />
				<Controls />
				<Panel>
					<div className="ia_symbolComponent ia_symbolComponent__column">
						<button className="button" onClick={addValveNodeInstance}>
							<IconHandClick />
						</button>
					</div>
				</Panel>
				<DevTools position="top-right" />
			</ReactFlow>
		</div>
	);
};

export class FlowComponentDelegate extends ComponentStoreDelegate {
	handleEvent(eventName: string, eventObject: JsObject): void {
		return;
	}
}
export class FlowMeta implements ComponentMeta {
	t = ComponentStoreState;
	getComponentType(): string {
		return COMPONENT_TYPE;
	}
	createDelegate(
		component: AbstractUIElementStore
	): ComponentStoreDelegate | undefined {
		return new FlowComponentDelegate(component);
	}
	getViewComponent(): PComponent {
		return Flow as unknown as PComponent;
	}
	getDefaultSize(): SizeObject {
		return {
			width: 1800,
			height: 1000,
		};
	}
	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): JsObject {
		const props = tree.read();
		return {
			props,
		};
	}
}


