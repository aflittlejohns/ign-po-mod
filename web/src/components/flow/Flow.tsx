import * as React from "react";
import { useCallback } from "react";
import {
	addEdge,
	Background,
	Controls,
	getSmoothStepPath,
	MiniMap,
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
import type { ComponentProps } from "@inductiveautomation/perspective-client";
import { ValveNode } from "./Components";

// const COMPONENT_TYPE = FLOW_PROVIDER_COMPONENT_TYPE;

const edgeTypes = {
	pipeline: Pipeline,
};

const nodeTypes = {
	valve: ValveNode,
}
export type IgNodeProps = {
	key?:string;
	id?: string;
	tagpath?: string
}
export type FlowProps = {
	flowProviderProps?: ComponentProps<IgNodeProps[]>
}
export const Flow = (flowProviderProps: FlowProps) => {
	const [nodes, , onNodesChange] = useNodesState<Node>([]); // Empty Node State for now
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
