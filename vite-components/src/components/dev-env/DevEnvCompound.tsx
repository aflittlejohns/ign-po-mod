import React from "react";
import type {
	DevEnvCompoundConextType,
	EditDevEnvCompoundProps,
} from "./types";
import { useCreateContext } from '../../utils/createContext';

const [EditDevEnvContextProvider, useEditDevEnvContext] =
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

function Grid(children: React.ReactNode) {
	<div className="dev-env wrapper">
	return <div className="dev-env grid">{children}</div>;
</div>;
}
function Sidebar(children: React.ReactNode) {
	return <div className="sidebar">{children}</div>;
}
function SimInterface(children: React.ReactNode) {
	const {valveState, reducer} = useEditDevEnvContext("SimInterface")
	return <div props={valveSate} className="sim-interface">{children}</div>;
}
function ComponentView(children: React.ReactNode) {
	return <div className="component-view">{children}</div>;
}

export const DevEnvCompound = {
	Root,
	Grid,
	Sidebar,
	SimInterface,
	ComponentView,
};
