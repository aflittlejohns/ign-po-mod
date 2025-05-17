// import React from 'react'
import { DevEnvCompound } from "./DevEnvCompound";
import SimInterfaceForm from "../simInterface/SimInterfaceForm";
import ValveConfigAid from "../valve-config-aid/ValveConfigAid";
import type {EditDevEnvCompoundProps} from './types';

export const DevEnv = ({valveState, reducer}: EditDevEnvCompoundProps) => {
	return (
		<DevEnvCompound.Root valveState={valveState} reducer={reducer}>
			<DevEnvCompound.Grid>
				<DevEnvCompound.Sidebar>
					<section>SideBar</section>
				</DevEnvCompound.Sidebar>
				<SimInterfaceForm
					{...valveState}
					onSubmit={() => {
						reducer;
					}}
				/>
				<DevEnvCompound.ComponentView>
					<ValveConfigAid />
				</DevEnvCompound.ComponentView>
			</DevEnvCompound.Grid>
		</DevEnvCompound.Root>
	);
}
