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
import {
	type ComponentProps,
} from "@inductiveautomation/perspective-client";
import { ValveFlowNode } from "./Components";
import { IconHandClick } from "../../utils/icons";
import { createValveFlowNode } from "./utils";
import { DevTools } from "./DevTools";
import type { ValveProps } from "../../api/types";

// const COMPONENT_TYPE = FLOW_PROVIDER_COMPONENT_TYPE;

const edgeTypes = {
	pipeline: Pipeline,
};

const nodeTypes = {
	valve: ValveFlowNode,
};
export type IgNodeProps = {
	key?: string;
	id?: string;
	tagpath?: string;
};
export type FlowProps = {
	flowProviderProps: ComponentProps<IgNodeProps[]>;
};
export const Flow = (props: ComponentProps<ValveProps>) => {
	const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]); // Empty Node State for now
	const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]); // Empty Edges State for now

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

	const addValveNodeInstance = () => {
		if (!props) {
			console.warn("No flowProviderProps");
			return;
		} else {
			const componentProps = {
				props: props.props,
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

			const inst = createValveFlowNode({ x: 100, y: 100 }, componentProps);
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

// export class FlowMeta implements ComponentMeta {
// 	getComponentType(): string {
// 		return COMPONENT_TYPE;
// 	}
// 	getViewComponent(): PComponent {
// 		return Flow;
// 	}
// 	getDefaultSize(): SizeObject {
// 		return {
// 			width: 1800,
// 			height: 1000,
// 		};
// 	}
// }
