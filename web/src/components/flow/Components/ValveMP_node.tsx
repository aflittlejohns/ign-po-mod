import React from "react";
import { useCreateContext } from "../../../store";
import { FLOW_COMPONENT_TYPE } from "../constants/flowComponentTypes";
import type { ValveNodeContext } from "../types";
import {
	HMI_COMPONENT_CLASS,
	IA_SYMBOL_COMPONENT_COLUMN,
	IA_SYMBOL_COMPONENT_ROW,
	IA_SYMBOL_COMPONENT_WRAPPER,
} from "../../../constants";
import { getValveMpItemClassName, valveMpItemNames } from "../../../api/utils";
import Item from "../../process-objects/valve/item";
import { Handle, Position } from "@xyflow/react";

const COMPONENT_TYPE = FLOW_COMPONENT_TYPE.VALVE_NODE;

/**
 * Setup Context Store
 */

export const [ValveNodeContextProvider, useValveNodeContext] =
	useCreateContext<ValveNodeContext>("ValveNodeContext");

const node = ({ emit, position, props, children }: ValveNodeContext) => {
	return (
		<ValveNodeContextProvider
			{...{
				emit,
				position,
				props,
			}}
		>
			{children}
		</ValveNodeContextProvider>
	);
};
const valveMp = () => {
	const { props, emit } = useValveNodeContext("Valve");
	const valveRef = React.useRef<HTMLDivElement>(null);
	// const { emit } = componentProps;

	const onActionPerformed = () => {
		console.log("onActionPerform Event");
	};
	// const inCoord = position?.x ?? false;
	// if not locate, trim last item from valveMpItemNames
	let componentItemNames = valveMpItemNames;
	if (!props?.locate) {
		componentItemNames = componentItemNames.slice(0, -1);
	}
	const componentClassName = "valve__mp";
	// if (!inCoord) {
	return (
		<div
			className={`${IA_SYMBOL_COMPONENT_COLUMN}`}
			ref={valveRef}
			{...emit({
				classes: [`${IA_SYMBOL_COMPONENT_COLUMN}`],
			})}
			data-component={COMPONENT_TYPE}
			onClick={onActionPerformed}
		>
			<div className={`${IA_SYMBOL_COMPONENT_ROW}`}>
				<div className={`${IA_SYMBOL_COMPONENT_WRAPPER}`}>
					<div className={`${HMI_COMPONENT_CLASS} ${componentClassName}`}>
						{componentItemNames.map(({ value, index, key }) => (
							// console.log(
							// 	`re-rendered ,key ${key} value ${value} index ${index}`
							// ),
							<Item
								itemClassName={
									value + " " + getValveMpItemClassName(index, props)
								}
								key={key}
							/>
						))}
						<Handle
							type="target"
							position={Position.Top}
							id="valve-top"
							className="valvemp-handle-top"
						/>
						<Handle
							type="source"
							position={Position.Right}
							id="valve-top-right"
							className="valvemp-handle-top-right"
						/>
						<Handle
							type="source"
							position={Position.Right}
							id="valve-bottom-right"
							className="valvemp-handle-bottom-right"
						/>
						<Handle
							type="source"
							position={Position.Bottom}
							id="valve-bottom"
							className="valvemp-handle-bottom"
						/>
						<Handle
							type="target"
							position={Position.Left}
							id="valve-top-left"
							className="valvemp-handle-top-left"
						/>
						<Handle
							type="target"
							position={Position.Left}
							id="valve-bottom-left"
							className="valvemp-handle-bottom-left"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

// const popover = () => {
// 	const { valveProps, position } = useValveNodeContext("Popover");
// 	const { showLabel, labelPosition, processObject } = valveProps;
// 	const { status } = processObject || {};
// 	if (!showLabel) return null;
// 	// const { position } = componentProps;
// 	let className = "itemId popover position-left";
// 	if (labelPosition) {
// 		className = getItemIdPositionClassName(className, labelPosition);
// 	}
// 	return (
// 		<div
// 			className={className}
// 			style={{
// 				top: position.y,
// 				left: position.x,
// 			}}
// 		>
// 			<div style={{ padding: 8 }}>{status?.itemName}</div>
// 		</div>
// 	);
// };
export const ValveNodeCompound = {
	node,
	valveMp,
	// popover,
};
