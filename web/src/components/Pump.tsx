/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
	ItemIdPositionType,
	type PumpProps,
	type PumpState,
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
import { PumpCompound } from "../components/process-objects/pumps/PumpCompound";
import { pumpInitialStatus } from "../api/initialState";
// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";

export const COMPONENT_TYPE = "hmi.process_objects.Valve_mp";

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export class Pump extends Component<ComponentProps<PumpProps>, any> {
	valveRef: React.RefObject<HTMLDivElement>;

	constructor(props: ComponentProps<PumpProps>) {
		super(props);
		this.valveRef = React.createRef<HTMLDivElement>();
	}

	// This is a lifecycle method that is called when the component is first mounted to the DOM.
	componentDidMount(): void {
		// No need to initialize valveRef here
	}
	processObject: PumpState =
		this.props.props.processObject?.status || pumpInitialStatus;
	status: PumpState = this.processObject;
	showLabel: boolean = this.props.props.showLabel || false;
	labelPosition: ItemIdPositionType = this.props.props.labelPosition || "left";

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
		this.props.componentEvents.fireComponentEvent("onActionPerformed", {});
	};

	render() {
		return (
			// <div>This is Valve</div>
			<PumpCompound.Root
				componentProps={this.props}
				pumpProps={this.props.props}
				onActionPerformed={this.onActionPerformed}
			>
				<PumpCompound.pump />
				<PumpCompound.popover anchorEl={this.valveRef.current} />
			</PumpCompound.Root>
		);
	}
}
// This is the actual thing that gets registered with the component registry.
export class PumpMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	/**
	 * @returns The React component class.
	 */
	getViewComponent(): PComponent {
		return Pump;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 24,
			height: 48,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): PumpProps {

		return {
			processObject: {
				status: {
					alarm: tree.readBoolean("processObject.status.alarm", false),
					activation: tree.readBoolean("processObject.status.activation", false),
					configuration: tree.readNumber(
						"processObject.status.configuration",
						7
					),
					itemName: tree.readString("processObject.status.itemName", ""),
					manual: tree.readBoolean("processObject.status.manual", false),
					masked: tree.readBoolean("processObject.status.masked", false),
					changing: tree.readBoolean("processObject.status.changing", false),
					locate: tree.readBoolean("processObject.status.locate", false),
				},
			},
			showLabel: tree.readBoolean("showLabel", false),
			labelPosition: tree.readString("labelPosition", "top-left"),
		};
	}
}
