/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { ItemIdPositionType} from "../api/types";

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
import type { HxProps } from "../ar-types/processObjects/heatExchangers/hx-types";
import { HeatExchangerCompound } from "./process-objects/heat-exchangers/HeatExchangerCompound";

export const COMPONENT_TYPE = "hmi.process_objects.HeatExchanger";

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export class HeatExchanger extends Component<ComponentProps<HxProps>, any> {
	valveRef: React.RefObject<HTMLDivElement>;

	constructor(props: ComponentProps<HxProps>) {
		super(props);
		this.valveRef = React.createRef<HTMLDivElement>();
	}

	// This is a lifecycle method that is called when the component is first mounted to the DOM.
	componentDidMount(): void {
		// No need to initialize valveRef here
	}
	type = this.props.props.type;
	itemName = this.props.props.itemName;
	mode = this.props.props.mode;
	locate = this.props.props.locate;
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
			<HeatExchangerCompound.Root
				componentProps={this.props}
				itemProps={this.props.props}
				onActionPerformed={this.onActionPerformed}
			>
				<HeatExchangerCompound.plate />
				<HeatExchangerCompound.popover anchorEl={this.valveRef.current} />
			</HeatExchangerCompound.Root>
		);
	}
}
// This is the actual thing that gets registered with the component registry.
export class HeatExchangerMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	/**
	 * @returns The React component class.
	 */
	getViewComponent(): PComponent {
		return HeatExchanger;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 36,
			height: 60,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): HxProps {
		return {
			type: tree.readString("pumpType", "plate"),
			mode: tree.readString("mode", "heating"),
			itemName: tree.readString("itemName", ""),
			locate: tree.readBoolean("locate", false),
			showLabel: tree.readBoolean("showLabel", false),
			labelPosition: tree.readString("labelPosition", "top-left"),
		};
	}
}
