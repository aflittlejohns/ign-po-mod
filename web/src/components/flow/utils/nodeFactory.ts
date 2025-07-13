import type { Node } from "@xyflow/react";
import type { ComponentProps } from "@inductiveautomation/perspective-client";
import type { ValveProps } from "../../../api/types";

export const createValveNode = (
  id: string,
  position: { x: number; y: number },
  valveProps: ValveProps,
  componentProps?: Partial<ComponentProps<ValveProps>>
): Node => {
  return {
    id,
    type: 'valve',
    position,
    data: {
      componentProps: {
        props: valveProps,
        eventsEnabled: true,
        componentEvents: {
          fireComponentEvent: (eventName: string, eventObject: any) => {
            console.log(`Event fired: ${eventName}`, eventObject);
          }
        },
        custom: {
          write: (path: string, value: any) => {
            console.log(`Writing ${value} to ${path}`);
          }
        },
        ...componentProps
      } as ComponentProps<ValveProps>,
      label: valveProps.processObject?.status?.itemName || `Valve ${id}`,
      position
    }
  };
};
