// import React from 'react'
import './dev-env.module.css'
import { DevEnvCompound } from "./DevEnvCompound";
import SimInterfaceForm from "../simInterface/SimInterfaceForm";
import ValveConfigAid from "../valve-config-aid/ValveConfigAid";
// import type {EditDevEnvCompoundProps} from './types';
// import type { UseValveReducer } from '../../api/types'
export const DevEnv = () => {
	return (
		<DevEnvCompound.Root >
			<DevEnvCompound.Grid>
				<DevEnvCompound.Sidebar>
					<section>SideBar</section>
				</DevEnvCompound.Sidebar>
				<SimInterfaceForm
					onSubmit={() => {
					}}
				/>
				<DevEnvCompound.ComponentView>
					<ValveConfigAid />
				</DevEnvCompound.ComponentView>
			</DevEnvCompound.Grid>
		</DevEnvCompound.Root>
	);
}
