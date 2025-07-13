import * as React from "react";
import { ValveNodeCompound } from "./ValveNodeCompound";
import { AbstractUIElementStore, ComponentMeta, ComponentProps, ComponentStoreDelegate, PComponent, PropertyTree, SizeObject, type JsObject } from "@inductiveautomation/perspective-client";
import type { ValveProps } from "../../../api/types";
import type { Node, NodeProps } from "@xyflow/react";


const COMPONENT_TYPE = "hmi.flow.ValveNode";

type rfValveNodeProps = Node<{
	componentProps?: ComponentProps<ValveProps>;
},'valve'>;



export function ValveNode(
d
: NodeProps<rfValveNodeProps> ){

	const {data} = d;
	const componentProps = data.componentProps;
	const eventsEnabled = componentProps?.eventsEnabled
	const componentEvents = componentProps?.componentEvents
	const {custom} = componentProps || {}


	React.useEffect(()=> {
		custom && custom.write("value.tagpath", "V401")
	},[]);

	/**
	 * Handler for the component's action event.
	 */
	const onActionPerformed = () => {
		// If the designer is in "design" mode, don't do anything
		if (!eventsEnabled) {
			console.log("Valve is disabled in the design-scope");
			return;
		}
		console.log("Valve clicked!");
		componentEvents?.fireComponentEvent("onActionPerformed", {});
	};
	return (
		<>
			<ValveNodeCompound.node
			componentProps={data.componentProps}
			valveProps={data.componentProps.props}
			onActionPerformed={onActionPerformed}
			>
				<ValveNodeCompound.valveMp />
				<ValveNodeCompound.popover />
			</ValveNodeCompound.node>
		</>
	);
}
export class ValveNodeComponentDelegate extends ComponentStoreDelegate{
	handleEvent(eventName: string, eventObject: JsObject): void {
		return
	}
}

export class ValveNodeMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	createDelegate(component: AbstractUIElementStore): ComponentStoreDelegate | undefined {
		return new ValveNodeComponentDelegate(component)
	}

	/**
	 * @returns The React component class.
	 */
	getViewComponent(): PComponent {
		return ValveNode as unknown as PComponent;
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
