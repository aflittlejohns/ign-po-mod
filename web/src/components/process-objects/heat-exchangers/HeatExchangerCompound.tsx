/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import { type ElementRef } from "../../../api/types";
import { useCreateContext } from "../../../utils/createContext";
import Item from "../valve/item";
import {
	getClassNameWithStatus,
	getItemIdPositionClassName,
} from "../../../api/utils";
import {
	buildComponentElements,
	// getHxItemClassName,
	// getHxModeClassNames,
	//  hxItemNames
} from "../../../ar-utils/processObjects/heatExchangers/hx-utils";
import {
	type HeatExchangerTypes,
	// HxModes,
	type HxCompoundContextType,
	type HxModes,
} from "../../../ar-types/processObjects/heatExchangers/hx-types";
import {
	HMI_COMPONENT_CLASS,
	HX_COMPONENT_TYPE,
	hxElements,
	IA_SYMBOL_COMPONENT_COLUMN,
	IA_SYMBOL_COMPONENT_ROW,
	IA_SYMBOL_COMPONENT_WRAPPER,
} from "../../../constants";

const getPlateColor = (mode: HxModes[keyof HxModes]) => {
	console.log(`mode: ${mode}`);

	switch (mode) {
		case "alarm":
			return "var(--_error)";
		case "heating":
			return "var(--_heating)";
		case "cooling":
			return "var(--_cooling)";
		default:
			return "lime";
	}
};
const getBaseItemCount = (type: HeatExchangerTypes[keyof HeatExchangerTypes]) => {
		switch (type) {
		case "plate":
			return 18;
		case "tubular":
			return 18;
		default:
			return 0;
	}
}
export const COMPONENT_TYPE = HX_COMPONENT_TYPE;

export const [HxContextProvider, useHxContext] =
	useCreateContext<HxCompoundContextType>("HxCompound");

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
	const {
		type,
		locate,
		mode
	} = itemProps;

	// Component Constants
	const BASE_ITEM_COUNT = getBaseItemCount(type ?? 0);
	const BASE_ITEM_CONFIG = 524287;
	const DYNAMIC_ITEM_COUNT = 0; // Enable display of base Items
	const DYNAMIC_ITEM_CONFIG = 0;

	let componentItemNames = buildComponentElements(
		BASE_ITEM_COUNT,
		DYNAMIC_ITEM_COUNT
	);

	if (!locate) {
		console.log(`locate is: ${locate}`);

		componentItemNames = componentItemNames.slice(0, -1);
	}
	console.log(
		`componentItemNames: ${JSON.stringify(componentItemNames, null, 2)}`
	);
	const componentClassName = "heat-exchanger";
	return (
		<div
			ref={elRef}
			{...emit({
				classes: [`${IA_SYMBOL_COMPONENT_COLUMN}`],
			})}
			data-component={COMPONENT_TYPE}
			onClick={onActionPerformed}
		>
			<div className={`${IA_SYMBOL_COMPONENT_ROW}`}>
				<div className={`${IA_SYMBOL_COMPONENT_WRAPPER}`}>
					<div
						className={`${HMI_COMPONENT_CLASS} ${componentClassName}`}
						style={{ "--hmi-plate-color": getPlateColor(mode ?? "") } as React.CSSProperties}
					>
						{/* <Item itemClassName={`${getHxModeClassNames("base-1 show", HxModes.heating )}`}/> */}

						{componentItemNames.map(({ name, index, key }) => (
							<Item
								itemClassName={
									name +
									" " +
									getClassNameWithStatus(
										index, //index
										undefined, // status
										hxElements, //elementVariants
										"", //baseClassName
										BASE_ITEM_COUNT, // baseElements
										BASE_ITEM_CONFIG, //baseConfig
										DYNAMIC_ITEM_COUNT, //dynamicItems
										DYNAMIC_ITEM_CONFIG //dynamicConfig
									)
									// name +
									// " " +
									// getHxItemClassName(
									// 	index,
									// 	type || "plate",
									// 	mode || HxModes.heating,
									// )
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
	const { itemProps, componentProps } = useHxContext("Popover");
	const { showLabel, labelPosition, itemName } = itemProps;

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
