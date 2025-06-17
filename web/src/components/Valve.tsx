/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
	ItemIdPositionType,
	ProcessObject,
	type ValveProps,
	type ValveState,
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
import { ValveMpCompound } from "./process-objects/valve-mp/ValveMp";
import { processObjectProps } from "../api/initialState";
// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";

export const COMPONENT_TYPE = "hmi.process_objects.Valve_mp";

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
	processObject: ProcessObject =
		this.props.props.processObject || processObjectProps;
	status: ValveState = this.processObject.status;
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
			<ValveMpCompound.Root
				componentProps={this.props}
				valveProps={this.props.props}
				onActionPerformed={this.onActionPerformed}
			>
				<ValveMpCompound.valve />
				<ValveMpCompound.popover anchorEl={this.valveRef.current} />
			</ValveMpCompound.Root>
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
		return Valve;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 20,
			height: 40,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): ValveProps {
		console.log(
			`itemName: ${tree.readString(
				"processObject.status.itemName"
			)} showLabel ${tree.readBoolean("showLabel")}`
		);

		return {
			processObject: {
				status: {
					alarm: tree.readBoolean("processObject.status.alarm", false),
					actFB: tree.readBoolean("processObject.status.actFB", false),
					deActFB: tree.readBoolean("processObject.status.deActFB", false),
					activatedConfig: tree.readNumber(
						"processObject.status.activatedConfig",
						511
					),
					deactivatedConfig: tree.readNumber(
						"processObject.status.deactivatedConfig",
						4095
					),
					itemName: tree.readString("processObject.status.itemName", ""),
					manual: tree.readBoolean("processObject.status.manual", false),
					masked: tree.readBoolean("processObject.status.masked", false),
					changing: tree.readBoolean("processObject.status.changing", false),
					locate: tree.readBoolean("processObject.status.locate", false),
					usl: tree.readBoolean("processObject.status.usl", false),
					lsl: tree.readBoolean("processObject.status.lsl", false),
				},
			},
			showLabel: tree.readBoolean("showLabel", false),
			labelPosition: tree.readString("labelPosition", "top-left"),
		};
	}
}
