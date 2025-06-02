/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
	type CommandValveMpProps,
} from "../api/types";
import { IconAuto, IconHandClick } from '../utils/icons';
import {
	PropertyTree,
} from "@inductiveautomation/perspective-client";
import type {
	ComponentProps,
	ComponentMeta,
	PComponent,
	SizeObject,
} from "@inductiveautomation/perspective-client"; //'@inductiveautomation/perspective-client';
import { useValveMpCommandReducer } from "../api/hooks";
import { initialControlState } from "../api/initialState";

// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";

export const COMPONENT_TYPE = "hmi.input.CommandValveMp";

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export const CommandValveMp = (props:ComponentProps<CommandValveMpProps>) => {
const transformedProps = React.useMemo(() => {
	const { main, upperSeat, lowerSeat } = props.props || initialControlState
	return {main, upperSeat, lowerSeat}
}, [props.props.main, props.props.upperSeat, props.props.lowerSeat])

 const {main} = transformedProps;
 console.log(main);


const {reducer } = useValveMpCommandReducer();
const {updateAutoManSelection} = reducer;
		return (
			<div role="group" className="toggle-button-group">
			<button
			className="selected "
			disabled={false}
			onClick={() => updateAutoManSelection("auto")}
			>
				<IconAuto />
			</button>
			<button
			className="enabled"
			disabled={false}
			onClick={() => updateAutoManSelection("manual")}
			>
				<IconHandClick />
			</button>


		</div>
		);
	}

// This is the actual thing that gets registered with the component registry.
export class CommandValveMpMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	/**
	 * @returns The React component class.
	 */
	getViewComponent(): PComponent {
		return CommandValveMp;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 24,
			height: 48,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): CommandValveMpProps {
		return {
			security: tree.read("security", {}),
			interlocks: tree.read("interlocks", {}),
			main: tree.read("main", {}),
			upperSeat: tree.read("upperSeat", {}),
			lowerSeat: tree.read("lowerSeat", {}),
		};
	}
}
