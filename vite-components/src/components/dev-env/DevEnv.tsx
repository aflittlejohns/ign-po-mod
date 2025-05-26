// import React from 'react'
import { DevEnvCompound } from "./DevEnvCompound";
import SimInterfaceForm from "../simInterface/SimInterfaceForm";
import ValveConfigAid from "../valvemp-config-aid/ValveConfigAid";
import { useValveReducer } from "../../api/hooks";
import { ValveMpCompound, useValveContext } from "../valve-mp/ValveMp";
import type { UseValveReducer } from "../../api/types";
import ValveFaceplate from "../faceplates/ValveFaceplate";
import { ControlProvider } from "../faceplates/stores/ControlContext";
// import ValveFaceplate from "../faceplates/ValveFaceplate";
// import { valveProps } from "../../api/initialState";
// import './dev-env.module.css'

export const DevEnv = () => {
	const useReducer = useValveReducer();
	const { state } = useReducer;

	// const handleOnActionPerformed = ()=>{
	// 	console.log("Valve onActionPerformed")
	// }
  return (
	<ControlProvider>
    <ValveMpCompound.Root popup={<ValveFaceplate />}valveProps={{ ValveStatus: state }}>
      <DevEnvCompoundContextBridge useReducer={useReducer} />
    </ValveMpCompound.Root>
	</ControlProvider>
  );
};
// New component that is a child of ValveMpCompound.Root
type EditDevEnvCompoundContextBridgeProps = {
	useReducer: UseValveReducer;
}
function DevEnvCompoundContextBridge({ useReducer }: EditDevEnvCompoundContextBridgeProps) {
  const componentContext = useValveContext("devenv-root");
  return (
    <DevEnvCompound.Root useReducer={useReducer} componentContext={componentContext}>
      <DevEnvCompound.Grid>
        <DevEnvCompound.Sidebar>
          <section>SideBar</section>
        </DevEnvCompound.Sidebar>
        <SimInterfaceForm />
        <ValveMpCompound.valve />
        <DevEnvCompound.ComponentView>
          <ValveConfigAid />
        </DevEnvCompound.ComponentView>
      </DevEnvCompound.Grid>
    </DevEnvCompound.Root>
  );
}
