/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
	type ElementRef,
} from "../../../api/types";
import { useCreateContext } from "../../../utils/createContext";
import Item from "../valve/item";
import {
	getItemIdPositionClassName,
} from "../../../api/utils";
import { getHxItemClassName, getHxModeClassNames, hxItemNames } from "../../../ar-utils/processObjects/heatExchangers/hx-utils";
import { HX_COMPONENT_TYPE, HxModes, type HxCompoundContextType } from "../../../ar-types/processObjects/heatExchangers/hx-types";

export const COMPONENT_TYPE = HX_COMPONENT_TYPE;

export const [HxContextProvider, useHxContext] =
	useCreateContext<HxCompoundContextType>("PumpCompound");

const Root = ({
	componentProps,
	itemProps,
	onActionPerformed,
	children,
}: HxCompoundContextType) => {
	return (
		<HxContextProvider
			{...{
				itemProps,
				componentProps,
				onActionPerformed,
			}}
		>
			{children}
		</HxContextProvider>
	);
};
const plate = () => {
	const { itemProps, onActionPerformed, componentProps } =
		useHxContext("Plate");
	const elRef: ElementRef = React.useRef<HTMLDivElement>(null);
	const { emit } = componentProps;
	const { type,locate, mode } = itemProps;


	// if not locate, trim last item from valveMpItemNames
	let componentItemNames = hxItemNames;
	if (!locate) {
		componentItemNames = componentItemNames.slice(0, -1);
	}
	const isCoordChild:boolean = componentProps.store.isCoordContainerChild;
	console.log(`isCoordChild ${isCoordChild}`);

	const flexRowWrapper = !isCoordChild ? "hmi-component__row" : "display-none";
	const flexColWrapper = !isCoordChild ? "hmi-component__column" : "display-none";
	const componentClassName = "hmi-component hmi-component-plate-hx";
	const emitClassNames = !isCoordChild ? `hmi-component ${flexColWrapper} ` : "hmi-component hmi-component-plate-hx";
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
			<Item itemClassName={`${getHxModeClassNames("base-1 show", HxModes.heating )}`}/>
			{/* <Item itemClassName={`${getPumpStatusClassNames("base-2 show item",status)}`}/> */}
			{/* <Item itemClassName={`${getPumpStatusClassNames("base-3 show item",status)}`}/> */}
			<Item itemClassName={"base-2 show item"}/>
			<Item itemClassName={"base-3 show item"}/>

				{componentItemNames.map(({ name, index, key }) => (
					<Item
					itemClassName={
						name +
						" " +
						getHxItemClassName(
							index,
							type || "plate",
							mode || HxModes.heating,
						)
					}
					key={key}
					/>
				))}
			</div>
				<Item itemClassName={`locate ${locate ? "show item" : "hide item"}`}/>
		</div>
		</div>
	);
};

const popover = ({ anchorEl }: { anchorEl: HTMLDivElement | null }) => {
	const { itemProps, componentProps } = useHxContext("Popover");
	const { showLabel, labelPosition, itemName} = itemProps;

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
			<div style={{ padding: 8 }}>{itemName}</div>
		</div>
	);
};

export const HeatExchangerCompound = {
	Root,
	plate,
	popover,
};
