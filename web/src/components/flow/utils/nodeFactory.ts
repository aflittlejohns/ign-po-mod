import type { Node } from "@xyflow/react";
import type { ComponentProps } from "@inductiveautomation/perspective-client";
import { v4 as uuid } from "uuid";
import type { JsonViewProps } from "../../perspective/JsonView";


export const createValveFlowNode = (
   position: { x: number; y: number },
  componentProps: ComponentProps<JsonViewProps>
): Node => {
	if (componentProps){
		console.log("valveNode ComponentProps", componentProps);

	}
  return {
    id: uuid( ),
    type: 'valve',
    position,
    data: {
		props: componentProps.props,
        store: componentProps.store,
		emit: componentProps.emit,
      }as ComponentProps<JsonViewProps>,
    }
  };
// Create Component Def
