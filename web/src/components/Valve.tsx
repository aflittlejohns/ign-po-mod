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
import { ValveMpCompound } from "./process-objects/valve-mp/ValveMp";
import { valveStatus } from "../api/initialState";
// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";

export const COMPONENT_TYPE = "hmi.process_objects.Valve";

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export class Valve extends Component<ComponentProps<ValveProps>, any> {
	valveRef: React.RefObject<HTMLDivElement>;

	constructor(props: ComponentProps<ValveProps>) {
		super(props);
		this.valveRef = React.createRef<HTMLDivElement>();
	}

	// This is a lifecycle method that is called when the component is first mounted to the DOM.
	componentDidMount(): void {
		// No need to initialize valveRef here
	}
	valveStatus: ValveState = this.props.props.ValveStatus || valveStatus;

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
		<ValveMpCompound.Root
		componentProps={this.props}
		valveProps={this.props.props}
		onActionPerformed={this.onActionPerformed}
		 >
			  <ValveMpCompound.valve />
			  <ValveMpCompound.popover anchorEl={this.valveRef.current} />
		 </ValveMpCompound.Root>
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
			width: 24,
			height: 48,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): ValveProps {
		console.log("ValveStatus", tree.read("ValveStatus"));
		return {
			ValveStatus: {
				alarm: tree.readBoolean("ValveStatus.alarm", false),
				actFB: tree.readBoolean("ValveStatus.actFB", false),
				deActFB: tree.readBoolean("ValveStatus.deActFB", false),
				activatedConfig: tree.readNumber("ValveStatus.activatedConfig", 6),
				deactivatedConfig: tree.readNumber("ValveStatus.deactivatedConfig", 0),
				itemName: tree.readString("ValveStatus.itemName", ""),
				manual: tree.readBoolean("ValveStatus.manual", false),
				masked: tree.readBoolean("ValveStatus.masked", false),
				changing: tree.readBoolean("ValveStatus.changing", false),
				locate: tree.readBoolean("ValveStatus.locate", false),
				usl: tree.readBoolean("ValveStatus.usl", false),
				lsl: tree.readBoolean("ValveStatus.lsl", false),

			},
			showItemId: tree.readBoolean("showItemId", false),
			itemIdPosition: tree.readString("itemIdPosition", "top-left"),
		};
	}
}
