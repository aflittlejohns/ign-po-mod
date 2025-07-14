import type { Node } from "@xyflow/react";
import type { ComponentProps } from "@inductiveautomation/perspective-client";
import type { ValveProps } from "../../../api/types";
import { v4 as uuid } from "uuid";


export const createValveFlowNode = (
   position: { x: number; y: number },
  componentProps: ComponentProps<ValveProps>
): Node => {
	if (componentProps){
		console.log("valveNode ComponentProps", componentProps);

	}
  return {
    id: uuid( ),
    type: 'valve',
    position,
    data: {
        ...componentProps
      } as ComponentProps<ValveProps>,
    }
  };
// Create Component Def
