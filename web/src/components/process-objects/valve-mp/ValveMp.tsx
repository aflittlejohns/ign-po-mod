import * as React from "react";
import type {
	ValveCompoundContextType,
	ValveCompoundRootProps,
} from "../../../api/types";
import { useValveReducer } from "../../../api/hooks";
import { getItemIdPositionClassName, getValveMpItemClassName, valveMpItemNames } from "../../../api/utils";
import Item from "../valve/item";
import { useCreateContext } from "../../../utils/createContext";
import { VALVE_COMPONENT_TYPE } from "../../../api/types";

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
				useValveReducer,
			}}
		>
			{children}
		</ValveContextProvider>
	);
};
const valve = () => {
	const { valveProps, onActionPerformed, componentProps } =
		useValveContext("Valve");
		const valveRef = React.useRef<HTMLDivElement>(null)
	const { position, emit } = componentProps;
	const { ValveStatus } = valveProps;
	const inCoord = position?.x ?? false;
	// if not locate, trim last item from valveMpItemNames
	let componentItemNames = valveMpItemNames;
	if (!ValveStatus?.locate) {
		componentItemNames = componentItemNames.slice(0, -1);
	}

	if (!inCoord) {
		return (
			<div
			ref={valveRef}
			{...emit({
				classes: [`hmi-component hmi-component__column `],
			})}
				data-component={COMPONENT_TYPE}
				onClick={onActionPerformed}
			>
				<div className="hmi-component__row">
					<div className="hmi-component-valve__mp">
						{componentItemNames.map(
							({ value, index, key }) => (
								// console.log(
								// 	`re-rendered ,key ${key} value ${value} index ${index}`
								// ),
								(
									<Item
									itemClassName={
										value + " " + getValveMpItemClassName(index, ValveStatus)
									}
									key={key}
									/>
								)
							)
						)}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div
			ref={valveRef}
			{...emit({
				classes: [`hmi-component hmi-component-valve__mp `],
			})}
			data-component={COMPONENT_TYPE}
			onClick={onActionPerformed}
			>
				{componentItemNames.map(
					({ value, index, key }) => (
						// console.log(
						// 	`re-rendered ,key ${key} value ${value} index ${index}`
						// ),
						(
							<Item
								itemClassName={
									value + " " + getValveMpItemClassName(index, ValveStatus)
								}
								key={key}
							/>
						)
					)
				)}
			</div>
		);
	}
};

const popover = ({ anchorEl }: { anchorEl: HTMLDivElement | null }) => {
	const { valveProps, componentProps } = useValveContext("Popover");
    const { showItemId,itemIdPosition, ValveStatus } = valveProps;
	if (!showItemId) return null;
    const { position } = componentProps;
	let className = "itemId popover position-left";
	if (itemIdPosition) {
		className = getItemIdPositionClassName(className, itemIdPosition)
	}
    return (
        <div
			className={className}
            style={{
                top: position.y,
                left: position.x,
            }}
        >
            <div style={{ padding: 8 }}>{ValveStatus?.itemName}</div>
        </div>
    );
};


export const ValveMpCompound = {
	Root,
	valve,
	popover,
};
