import React from "react";
import type {
	DevEnvCompoundConextType,
	EditDevEnvCompoundProps,
} from "./types";
import { useCreateContext } from '../../utils/createContext';



export const [EditDevEnvContextProvider, useEditDevEnvContext] =
	useCreateContext<DevEnvCompoundConextType>("EditDevEnv");
function Root({ children, valveState, reducer}: EditDevEnvCompoundProps) {
	return(
		<EditDevEnvContextProvider
		{...{
			valveState,
			reducer
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
