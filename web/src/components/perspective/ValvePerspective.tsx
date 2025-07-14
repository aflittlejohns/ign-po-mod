import * as React from "react";
import { ValveCore } from "../common/ValveCore";
import {
	ComponentStoreDelegate,
	type AbstractUIElementStore,
	type ComponentMeta,
	type ComponentProps,
	type JsObject,
	type PComponent,
	type PropertyTree,
	type SizeObject,
} from "@inductiveautomation/perspective-client";
import type { ValveProps } from "../../api/types";
import { createValveFlowNode } from "../flow/utils";
import type { Node } from "@xyflow/react";

const COMPONENT_TYPE = "hmi.flow.ValvePerspective";

// Perspective Component (receives ComponentProps<ValveProps>)
export function ValvePerspective(props: ComponentProps<ValveProps>) {
	const { componentEvents } = props;

	const onActionPerformed = React.useCallback(() => {
		componentEvents?.fireComponentEvent("onActionPerformed", {});
	}, [componentEvents]);
	React.useEffect(() => {
		ValvePerspectiveMeta.createFlowNode({ x: 100, y: 100 }, props);
	}, []);

	return (
		<ValveCore
			componentProps={props}
			onActionPerformed={onActionPerformed}
			className="valve-perspective"
		/>
	);
}

// Perspective Meta Classes
export class ValvePerspectiveComponentDelegate extends ComponentStoreDelegate {
	handleEvent(eventName: string, eventObject: JsObject): void {
		if (eventName === "onActionPerformed") {
			console.log("Valve action performed:", eventObject);
		}
	}
}

export class ValvePerspectiveMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	createDelegate(
		component: AbstractUIElementStore
	): ComponentStoreDelegate | undefined {
		return new ValvePerspectiveComponentDelegate(component);
	}

	getViewComponent(): PComponent {
		return ValvePerspective as PComponent;
	}

	getDefaultSize(): SizeObject {
		return { width: 48, height: 48 };
	}

	getPropsReducer(tree: PropertyTree): ValveProps {
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
	static createFlowNode(
		position: { x: number; y: number },
		componentProps: ComponentProps<ValveProps>
	): Node {
		return createValveFlowNode(position, componentProps);
	}
}
