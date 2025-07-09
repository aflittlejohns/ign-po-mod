import * as React from 'react';
import {
	BaseEdge,
	getSmoothStepPath,
	type EdgeProps,
} from "@xyflow/react";

export default function Pipeline(props: EdgeProps) {
	const {
		id,
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourcePosition,
		targetPosition,
	} = props;
	// const { getEdges} = useReactFlow();
	// const edges = getEdges();
	// console.log(`Edges: ${JSON.stringify(edges)}`);
	// const onLoad = ()=>{
	// 	console.log(`Edge ${id} loaded`)
	// }

	const [edgePath] = getSmoothStepPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourcePosition,
		targetPosition,
	});
	// Add path to edge data

	// const intersections = findIntersections(edgePath, edges.filter(e => e.id !== id))
	return (
	// <g onLoad={onLoad} >
		<BaseEdge id={id} path={edgePath} />

	// </g>
)
}
