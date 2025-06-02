import React from 'react';
import { CommandsValveMpCompoundContextType, CommandsValveMpCompoundRootProps } from '../../../api/types';
import { useCreateContext } from '../../../utils/createContext';
import { IconAuto, IconHandClick } from '../../../utils/icons';

// const COMPONENT_TYPE = "hmi.components.iput.command-valve-mp";

export const [ CommandsValveMpContextProvider, UseCommandsValveMpContext] =
	useCreateContext<CommandsValveMpCompoundContextType>("CommandsValveMpCompound")

const root = ({
componentProps,
command,
children,

}: CommandsValveMpCompoundRootProps) => {
	const {useReducer} = UseCommandsValveMpContext('root');
return(
	<CommandsValveMpContextProvider
	{...{
		componentProps,
		useReducer,
		command,
	}}>
	{children}
	</CommandsValveMpContextProvider>
);
}

const valveControl = () => {
	return (
		<div role="group" className="toggle-button-group">
			<button className="selected">
				<IconAuto />
			</button>
			<button className="enabled">
				<IconHandClick />
			</button>


		</div>
	)
}

export const CommandsValveMpCompound = {
root,
valveControl
}
