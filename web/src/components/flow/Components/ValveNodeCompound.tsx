import * as React from "react";
import { useCreateContext } from "../../../store";
// import { FLOW_COMPONENT_TYPE } from "../constants/flowComponentTypes";
import type { ValveNodeContext } from "../types";
import {
	HMI_COMPONENT_CLASS,
	IA_SYMBOL_COMPONENT_COLUMN,
	IA_SYMBOL_COMPONENT_ROW,
	IA_SYMBOL_COMPONENT_WRAPPER,
} from "../../../constants";
import { getItemIdPositionClassName, getValveMpItemClassName, valveMpItemNames } from "../../../api/utils";
import Item from "../../process-objects/valve/item";
import { processObjectProps, valveProps } from "../../../api/initialState";
import type { ValveProps } from "../../../api/types";
import type { ComponentProps } from "@inductiveautomation/perspective-client";
import { FLOW_COMPONENT_TYPE } from "../constants";


const COMPONENT_TYPE = FLOW_COMPONENT_TYPE.VALVE_NODE;

/**
 * Setup Context Store
 */

export const [ValveNodeContextProvider, useValveNodeContext] =
	useCreateContext<ValveNodeContext>("ValveNodeContext");

const Root = ({
	componentProps,
	onActionPerformed,
	children
}: ValveNodeContext) => {
	return (
		// #TODO use zustand store here
		<ValveNodeContextProvider
			{...{
				componentProps,
				onActionPerformed,
			}}
		>
			{children}
		</ValveNodeContextProvider>
	);
};
const valveMp = (props: ComponentProps<ValveProps>) => {

	const valveRef = React.useRef<HTMLDivElement>(null);

	const { processObject } = props || valveProps ;
	const { status } = processObject || processObjectProps;
	const onActionPerformed = () => {
		console.log("onActionPerform Event");
		const value = props.store.custom.read("value.tagpath")
		console.log("value", value);

	};
	// const inCoord = position?.x ?? false;
	// if not locate, trim last item from valveMpItemNames
	let componentItemNames = valveMpItemNames;
	if (!status?.locate) {
		componentItemNames = componentItemNames.slice(0, -1);
	}
	const componentClassName = "valve__mp";
	// emit null check
	// if (!inCoord) {
	return (
		<div
		className={`${IA_SYMBOL_COMPONENT_COLUMN}`}
			ref={valveRef}
			// {...emit({
				// 	classes: [`${IA_SYMBOL_COMPONENT_COLUMN}`],
				// })}
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
									value + " " + getValveMpItemClassName(index, valveProps.processObject?.status)
								}
								key={key}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const popover = () => {
	const { componentProps } = useValveNodeContext("Popover");
	if (!componentProps) return <div>ERROR</div>
	const { props } = componentProps;
	const { showLabel, labelPosition, processObject  } = props;
	const { status } = processObject || {};
	if (!showLabel) return null;
	// const { position } = componentProps;
	let className = "itemId popover position-left";
	if (labelPosition) {
		className = getItemIdPositionClassName(className, labelPosition);
	}

	return (
		<div
			className={className}
			// style={{
			// 	top: position.x,
			// 	left: position.y,
			// }}
		>
			<div style={{ padding: 8 }}>{status?.itemName}</div>
		</div>
	);
};
export const ValveNodeCompound = {
	Root,
	valveMp,
	popover,
};
