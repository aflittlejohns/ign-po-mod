/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
	type CommandValveMpProps,
} from "../api/types";

import {
	Component,
	PropertyTree,
} from "@inductiveautomation/perspective-client";
import type {
	ComponentProps,
	ComponentMeta,
	PComponent,
	SizeObject,
} from "@inductiveautomation/perspective-client"; //'@inductiveautomation/perspective-client';
import {
	CommandsValveMpCompound,
} from "../components/input/commands-valve/commands";

// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";

export const COMPONENT_TYPE = "hmi.input.CommandsValve_mp";

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export class CommandValveMp extends Component<
	ComponentProps<CommandValveMpProps>,
	any
> {
	constructor(props: ComponentProps<CommandValveMpProps>){
		super(props);
	}

	// This is a lifecycle method that is called when the component is first mounted to the DOM.
	componentDidMount(): void {
		// No need to initialize valveRef here
	}

	render() {
		return (
			<CommandsValveMpCompound.root
				componentProps={this.props}
				command={this.props.props}
			>
				<CommandsValveMpCompound.valveControl />
			</CommandsValveMpCompound.root>
		);
	}
}
// This is the actual thing that gets registered with the component registry.
export class ValveMeta implements ComponentMeta {
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
