/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
	PUMP_COMPONENT_TYPE,
	type ElementRef,
	type PumpCompoundContextType,
	type PumpCompoundRootProps,
} from "../../../api/types";
import { useCreateContext } from "../../../utils/createContext";
import Item from "../valve/item";
import {
	getItemIdPositionClassName,
	getPumpItemClassName,
	pumpItemNames,
} from "../../../api/utils";

export const COMPONENT_TYPE = PUMP_COMPONENT_TYPE;

export const [PumpContextProvider, usePumpContext] =
	useCreateContext<PumpCompoundContextType>("PumpCompound");

const Root = ({
	componentProps,
	pumpProps,
	onActionPerformed,
	children,
}: PumpCompoundRootProps) => {
	return (
		<PumpContextProvider
			{...{
				pumpProps,
				componentProps,
				onActionPerformed,
			}}
		>
			{children}
		</PumpContextProvider>
	);
};
const pump = () => {
	const { pumpProps, onActionPerformed, componentProps } =
		usePumpContext("Valve");
	const elRef: ElementRef = React.useRef<HTMLDivElement>(null);
	const { emit } = componentProps;
	const { processObject } = pumpProps;
	const { status } = processObject || {};

	// if not locate, trim last item from valveMpItemNames
	let componentItemNames = pumpItemNames;
	if (!status?.locate) {
		componentItemNames = componentItemNames.slice(0, -1);
	}

	return (
		<div className="hmi-component pump">
			<div
				ref={elRef}
				{...emit({
					classes: [`hmi-component hmi-component-pump `],
				})}
				data-component={COMPONENT_TYPE}
				onClick={onActionPerformed}
			>
				{componentItemNames.map(({ name, index, key }) => (
					<Item
						itemClassName={
							name +
							" " +
							getPumpItemClassName(
								index,
								status?.activation || false,
								status?.configuration || 7
							)
						}
						key={key}
					/>
				))}
			</div>
		</div>
	);
};

const popover = ({ anchorEl }: { anchorEl: HTMLDivElement | null }) => {
	const { pumpProps, componentProps } = usePumpContext("Popover");
	const { showLabel, labelPosition, processObject } = pumpProps;
	const { status } = processObject || {};
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

export const PumpCompound = {
	Root,
	pump,
	popover,
};
