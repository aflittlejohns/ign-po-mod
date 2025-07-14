import * as React from "react";
import { ValveNodeCompound } from "../flow/Components/ValveNodeCompound";
import type { ComponentProps } from "@inductiveautomation/perspective-client";
import type { ValveProps } from "../../api/types";

interface ValveCoreProps {
  componentProps: ComponentProps<ValveProps>;
  onActionPerformed?: () => void;
  className?: string;
}

export function ValveCore({ componentProps, onActionPerformed, className = "" }: ValveCoreProps) {
  const { props, eventsEnabled } = componentProps;

  const handleAction = React.useCallback(() => {
    if (!eventsEnabled) {
      console.log("Valve is disabled in design mode");
      return;
    }
    onActionPerformed?.();
  }, [eventsEnabled, onActionPerformed]);

  return (
    <div className={`valve-core ${className}`}>
      <ValveNodeCompound.Root
        componentProps={componentProps}
        onActionPerformed={handleAction}
      >
        <ValveNodeCompound.valveMp
		{...componentProps} />
        {props.showLabel && <ValveNodeCompound.popover />}
      </ValveNodeCompound.Root>
    </div>
  );
}
