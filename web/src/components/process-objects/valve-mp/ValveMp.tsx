import * as React from "react";
import type {
	ValveCompoundContextType,
	ValveCompoundRootProps,
} from "../../../api/types";
// import { useValveReducer } from "../../../api/hooks";
import {
	getItemIdPositionClassName,
	getValveMpItemClassName,
	valveMpItemNames,
} from "../../../api/utils";
import Item from "../valve/item";
import { useCreateContext } from "../../../utils/createContext";
import { processObjectProps } from "../../../api/initialState";
import {
	HMI_COMPONENT_CLASS,
	IA_SYMBOL_COMPONENT_COLUMN,
	IA_SYMBOL_COMPONENT_ROW,
	IA_SYMBOL_COMPONENT_WRAPPER,
	VALVE_COMPONENT_TYPE,
} from "../../../constants";

// import './valve-mp.module.css'
// import {valveStatus} from '../../api/initialState'
const COMPONENT_TYPE = VALVE_COMPONENT_TYPE;

// import {valveStatus} from './initialState'

export const [ValveContextProvider, useValveContext] =
	useCreateContext<ValveCompoundContextType>("ValveMpCompound");

const Root = ({
	componentProps,
	valveProps,
	onActionPerformed,
	children,
}: ValveCompoundRootProps) => {
	return (
		<ValveContextProvider
			{...{
				valveProps,
				componentProps,
				onActionPerformed,
				// useValveReducer,
			}}
		>
			{children}
		</ValveContextProvider>
	);
};
const valve = () => {
	const { valveProps, onActionPerformed, componentProps } =
		useValveContext("Valve");
	const valveRef = React.useRef<HTMLDivElement>(null);
	const { emit } = componentProps;
	const { processObject } = valveProps;
	const { status } = processObject || processObjectProps;
	// const inCoord = position?.x ?? false;
	// if not locate, trim last item from valveMpItemNames
	let componentItemNames = valveMpItemNames;
	if (!status?.locate) {
		componentItemNames = componentItemNames.slice(0, -1);
	}
	const componentClassName = "valve__mp";
	// if (!inCoord) {
		return (
			<div
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
										value + " " + getValveMpItemClassName(index, status)
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

const popover = ({ anchorEl }: { anchorEl: HTMLDivElement | null }) => {
	const { valveProps, componentProps } = useValveContext("Popover");
	const { showLabel, labelPosition, processObject } = valveProps;
	const { status } = processObject || processObjectProps;
	if (!showLabel) return null;
	const { position } = componentProps;
	let className = "itemId popover position-left";
	if (labelPosition) {
		className = getItemIdPositionClassName(className, labelPosition);
	}
	return (
		<div
			className={className}
			style={{
				top: position.y,
				left: position.x,
			}}
		>
			<div style={{ padding: 8 }}>{status?.itemName}</div>
		</div>
	);
};

export const ValveMpCompound = {
	Root,
	valve,
	popover,
};
