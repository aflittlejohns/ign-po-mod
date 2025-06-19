/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
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
import {
	HMI_COMPONENT_CLASS,
	IA_SYMBOL_COMPONENT_COLUMN,
	IA_SYMBOL_COMPONENT_ROW,
	IA_SYMBOL_COMPONENT_WRAPPER,
	PUMP_COMPONENT_TYPE,
} from "../../../constants";

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
	const componentItemNames = React.useMemo(() => {
		if (!status?.locate) {
			return pumpItemNames.slice(0, -1);
		}
		return pumpItemNames;
	}, [status?.locate]);

	const componentClassName = "pump";

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
					<div className={`${HMI_COMPONENT_CLASS} ${componentClassName}`}>
						<Item
							itemClassName={`${getPumpStatusClassNames(
								"base-1 show",
								status
							)}`}
						/>
						<Item itemClassName={"base-2 show item"} />
						<Item itemClassName={"base-3 show item"} />

						{componentItemNames.map(({ name, index, key }) => (
							<Item
								itemClassName={
									name +
									" " +
									getPumpItemClassName(index, pumpType || "centrifugal", status)
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
