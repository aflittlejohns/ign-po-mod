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
	getPumpStatusClassNames,
	pumpItemNames,
} from "../../../api/utils";
import { pumpInitialProps } from "../../../api/initialState";

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
	const { processObject, pumpType } = pumpProps;
	const { status } = processObject || pumpInitialProps;

	// if not locate, trim last item from valveMpItemNames
	let componentItemNames = pumpItemNames;
	if (!status?.locate) {
		componentItemNames = componentItemNames.slice(0, -1);
	}
	const isCoordChild:boolean = componentProps.store.isCoordContainerChild;
	console.log(`isCoordChild ${isCoordChild}`);

	const flexRowWrapper = !isCoordChild ? "hmi-component__row" : "display-none";
	const flexColWrapper = !isCoordChild ? "hmi-component__column" : "display-none";
	const componentClassName = "hmi-component hmi-component-pump";
	const emitClassNames = !isCoordChild ? `hmi-component ${flexColWrapper} ` : "hmi-component hmi-component-pump";
	return (

		<div
				ref={elRef}
				{...emit({
					classes: [`${emitClassNames}`],
				})}
				data-component={COMPONENT_TYPE}
				onClick={onActionPerformed}
			>
				<div className={`${flexRowWrapper}`}>
				<div className={`${componentClassName}`}>
			<Item itemClassName={`${getPumpStatusClassNames("base-1 show",status)}`}/>
			{/* <Item itemClassName={`${getPumpStatusClassNames("base-2 show item",status)}`}/> */}
			{/* <Item itemClassName={`${getPumpStatusClassNames("base-3 show item",status)}`}/> */}
			<Item itemClassName={"base-2 show item"}/>
			<Item itemClassName={"base-3 show item"}/>

				{componentItemNames.map(({ name, index, key }) => (
					<Item
					itemClassName={
						name +
						" " +
						getPumpItemClassName(
							index,
							status,
							pumpType || "centrifugal",
						)
					}
					key={key}
					/>
				))}
			</div>
				<Item itemClassName={`locate ${status.locate ? "show item" : "hide item"}`}/>
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
