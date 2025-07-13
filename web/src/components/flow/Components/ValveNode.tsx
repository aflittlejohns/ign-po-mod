import * as React from "react";
import { Handle, Position } from "@xyflow/react";
import type { NodeProps, Node } from "@xyflow/react";
import { ValveNodeCompound } from "./ValveNodeCompound";
import { ComponentStoreDelegate, type AbstractUIElementStore, type ComponentMeta, type ComponentProps, type JsObject, type PComponent, type PropertyTree, type SizeObject } from "@inductiveautomation/perspective-client";
import type { ValveProps } from "../../../api/types";
const COMPONENT_TYPE = "hmi.flow.ValveNode"
// Define the node data structure
type ValveNodeData = {
  componentProps: ComponentProps<ValveProps>;
  // Add any React Flow specific data
  id: string; // Unique Id
  label?: string;
  position?: { x: number; y: number };
};

type ValveFlowNode = Node<ValveNodeData, 'valve'>;

export function ValveNode({ data, selected }: NodeProps<ValveFlowNode>) {
  // Validate that we have the required data
  if (!data?.componentProps) {
    console.warn("ValveNode: Missing componentProps in data");
    return (
      <div className="valve-node-error">
        <div>Invalid Valve Node</div>
        <div>Missing component data</div>
      </div>
    );
  }

  const { componentProps } = data;
  const { props, eventsEnabled, componentEvents, custom } = componentProps;

  // Handle Ignition component lifecycle
  React.useEffect(() => {
    if (custom) {
      // Initialize any custom properties or bindings
      custom.write("value.tagpath", "V401");
    }
  }, [custom]);

  // Handle component actions
  const onActionPerformed = React.useCallback(() => {
    if (!eventsEnabled) {
      console.log("Valve is disabled in design mode");
      return;
    }

    console.log("Valve clicked!");
    componentEvents?.fireComponentEvent("onActionPerformed", {
      nodeId: data.id,
      position: data.position
    });
  }, [eventsEnabled, componentEvents, data]);

  return (
    <div className={`valve-flow-node ${selected ? 'selected' : ''}`}>
      {/* React Flow Handles */}
      <Handle
        type="target"
        position={Position.Top}
        id="valve-top"
        className="valve-handle valve-handle-top"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="valve-right"
        className="valve-handle valve-handle-right"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="valve-bottom"
        className="valve-handle valve-handle-bottom"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="valve-left"
        className="valve-handle valve-handle-left"
      />

      {/* Wrapped Ignition Component */}
      <ValveNodeCompound.Root
        componentProps={componentProps}
        itemProps={props}
        onActionPerformed={onActionPerformed}
      >
        <ValveNodeCompound.valveMp />
        {props.showLabel && <ValveNodeCompound.popover />}
      </ValveNodeCompound.Root>
    </div>
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
