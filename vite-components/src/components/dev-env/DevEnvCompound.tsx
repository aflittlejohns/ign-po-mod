import React from "react";
import type {
	DevEnvCompoundContextType,
	EditDevEnvCompoundProps,
} from "../../api/types";
import { useCreateContext } from '../../utils/createContext';
// import { ValveContextProvider } from "../valve-mp/ValveMp";
// import type { UseValveReducer } from "../../api/types";


export const [EditDevEnvContextProvider, useEditDevEnvContext] =
	useCreateContext<DevEnvCompoundContextType>("EditDevEnv");

function Root({ children, useReducer, componentContext }: EditDevEnvCompoundProps) {

	return(
		<EditDevEnvContextProvider
		{...{
			useReducer,
			componentContext
		}}
		>
			{children}
		</EditDevEnvContextProvider>
	)
};

const Grid = ({children}: {children:React.ReactNode}): React.ReactNode =>{
	return (
		<div className="dev-env wrapper">
	 <div className="dev-env grid">{children}</div>
		</div>);
}
const Sidebar = ({children}: {children:React.ReactNode}): React.ReactElement => {
	return <div className="sidebar">{children}</div>;
}
const SimInterface = ({children}: {children:React.ReactNode}): React.ReactElement => {
	return <div className="sim-interface">{children}</div>;
}

const ComponentView = ({children}: {children:React.ReactNode}): React.ReactElement => {
	return <div className="component-view">{children}</div>;
}

export const DevEnvCompound = {
	Root,
	Grid,
	Sidebar,
	SimInterface,
	ComponentView,
};
