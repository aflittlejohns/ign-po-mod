import type { Node } from "@xyflow/react";
import type { ComponentProps } from "@inductiveautomation/perspective-client";
import { v4 as uuid } from "uuid";
import type { EmbeddedViewProps } from "../Components";


export const createFlowNode = (
   position: { x: number; y: number },
  componentProps: ComponentProps<EmbeddedViewProps>
): Node => {
	if (componentProps){
		console.log("valveNode ComponentProps", componentProps);

	}
  return {
    id: uuid( ),
    type: 'valve',
    position,
    data: {...componentProps }as ComponentProps<EmbeddedViewProps>,
    }
  };
// Create Component Def
