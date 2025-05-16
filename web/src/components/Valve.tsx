/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
	type ValveProps,
	type ValveState
} from "../api/types";


import {
	Component,
	PropertyTree,
} from '@inductiveautomation/perspective-client';
import type {
	ComponentProps
	,ComponentMeta
	,PComponent
	,SizeObject
} from '@inductiveautomation/perspective-client'//'@inductiveautomation/perspective-client';
import { ValveFCCompound } from "./process-objects/valve/ValveFC";
import { initialValveStatus } from "src/api/initialise";
// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";

export const COMPONENT_TYPE = "hmi.process_objects.Valve";

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export class Valve extends Component<ComponentProps<ValveProps>, any> {

	// This is a lifecycle method that is called when the component is first mounted to the DOM.
	componentDidMount(): void {}
	valveStatus: ValveState = this.props.props.ValveStatus || initialValveStatus;

		/**
	 * Handler for the component's action event.
	*/
	onActionPerformed = () => {
		// If the designer is in "design" mode, don't do anything
		if (!this.props.eventsEnabled) {
			console.log("Valve is disabled in the design-scope");
			return;
		}
		console.log("Valve clicked!");
		this.props.componentEvents. fireComponentEvent("onActionPerformed", {});
	};

	render(){
		return(
			// <div>This is Valve</div>
		<ValveFCCompound.Root
		componentProps={this.props}
		valveProps={this.props.props}
		onActionPerformed={this.onActionPerformed}
		 >
			  <ValveFCCompound.Valve />
		 </ValveFCCompound.Root>
	)
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
		return Valve;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 75,
			height: 75,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): ValveProps {
		console.log("ValveStatus", tree.read("ValveStatus"));
		return {
			ValveStatus: {
				alarm: tree.readBoolean("ValveStatus.Alarm", false),
				actFB: tree.readBoolean("ValveStatus.ActFB", false),
				deActFB: tree.readBoolean("ValveStatus.DeActFB", false),
				activatedConfig: tree.readNumber("ValveStatus.ActivatedConfig", 6),
				deactivatedConfig: tree.readNumber("ValveStatus.DeactivatedConfig", 0),
				tagName: tree.readString("ValveStatus.TagName", ""),
				manual: tree.readBoolean("ValveStatus.Manual", false),
				masked: tree.readBoolean("ValveStatus.Masked", false),
				changing: tree.readBoolean("ValveStatus.Changing", false),
			},
		};
	}
}
