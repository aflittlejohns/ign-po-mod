// import React from 'react'
import { DevEnvCompound } from "./DevEnvCompound";
import SimInterfaceForm from "../simInterface/SimInterfaceForm";
import ValveConfigAid from "../valve-config-aid/ValveConfigAid";
import { useValveReducer } from '../../api/hooks';


export const DevEnv = () => {
	const useReducer = useValveReducer();
	return (
		<DevEnvCompound.Root useReducer={useReducer}>
			<DevEnvCompound.Grid>
				<DevEnvCompound.Sidebar>
					<section>SideBar</section>
				</DevEnvCompound.Sidebar>
				<SimInterfaceForm />
				<DevEnvCompound.ComponentView>
					<ValveConfigAid />
				</DevEnvCompound.ComponentView>
			</DevEnvCompound.Grid>
		</DevEnvCompound.Root>
	);
}
