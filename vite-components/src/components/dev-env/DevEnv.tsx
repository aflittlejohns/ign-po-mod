// import React from 'react'
import { DevEnvCompound } from "./DevEnvCompound";
import SimInterfaceForm from "../simInterface/SimInterfaceForm";
import ValveConfigAid from "../valve-config-aid/ValveConfigAid";
import { useValveReducer } from "../../api/hooks";
import { ValveFCCompound } from "../valve/ValveFC";





export const DevEnv = () => {
	const useReducer = useValveReducer();
	const {state} = useReducer
	const {} = state
	// const handleOnActionPerformed = ()=>{
	// 	console.log("Valve onActionPerformed")
	// }

	return (
		<DevEnvCompound.Root useReducer={useReducer}>
			<DevEnvCompound.Grid>
				<DevEnvCompound.Sidebar>
					<section>SideBar</section>
				</DevEnvCompound.Sidebar>
				<SimInterfaceForm />
				{/* <ValveFCCompound.Root
					// componentProps={props}
					valveProps={{ValveStatus: state}}
					onActionPerformed={handleOnActionPerformed}
				>
					<ValveFCCompound.valve />
				</ValveFCCompound.Root> */}
				<DevEnvCompound.ComponentView>
					<ValveConfigAid />
				</DevEnvCompound.ComponentView>
			</DevEnvCompound.Grid>
		</DevEnvCompound.Root>
	);
};
