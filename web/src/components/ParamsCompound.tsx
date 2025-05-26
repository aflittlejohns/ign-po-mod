import * as React from "react";
import {
	PropertyTree,
} from '@inductiveautomation/perspective-client';
import type {
	ComponentProps
	,ComponentMeta
	,PComponent
	,SizeObject
} from '@inductiveautomation/perspective-client';

import { useCreateContext } from "src/utils/createContext";
import { ParamItem, UseParameterReducer } from "src/api/types";
// Types

// type EditParamInputContextType = {
// 	paramItem: ParamItem;
// 	setParamItem: (paramItem: ParamItem) => void;
// }
type EditParamInputContextType = {
	state: ParamItem[];
	reducer: UseParameterReducer;
}

type EditParamInputComponentProps = {
	state: ParamItem[];
}
const [EditParamInputContextProvider, useEditParamInputContext] =
useCreateContext<EditParamInputContextType>("EditParamInputContext");

export const COMPONENT_TYPE = "hmi.input.Parameter";

function Root(props: ComponentProps<EditParamInputComponentProps>) {
const { state , reducer} = useEditParamInputContext("root");

	return (
		<EditParamInputContextProvider
		{...{
				state,
				reducer,
				}
			}
			>
			{props.children}
		</EditParamInputContextProvider>
	);
};
type ParamProps = {index: number}
const Param = ({index}: ParamProps) => {
	const { state, reducer  } = useEditParamInputContext("Params");
	const {updateValue} = reducer.reducer

		// const { label, input } = paramItem;
		const { label, input } =  state[index];
		return (
			<label className="field">
				<span className="label">{label.text}</span>
				<input type="text"
				inputMode="numeric"
				pattern="[0-9]*"
				placeholder={input?.placeholder}
				onChange={(e) => {
					console.log(e);
					updateValue(parseFloat(parseFloat(e.target.value).toFixed(2)), index);
				}}
				/>
			</label>
				)

};


export const ParameterComponent = {
	Root,
	Param,
};

export class ParameterMeta implements ComponentMeta {
	getComponentType():string{
return COMPONENT_TYPE
	}

	getDefaultSize(): SizeObject{
		return {
			width: 120,
			height: 30,
		}
	}

	getPropsReducer(tree: PropertyTree): ParamItem[] {
		return tree.read('parameters', [])
	}

	getViewComponent(): PComponent {
		return ParameterComponent as PComponent
	}
}
