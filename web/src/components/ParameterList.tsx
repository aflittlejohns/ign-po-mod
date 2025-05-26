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

// import { useCreateContext } from "src/utils/createContext";
import { ParamItem, UseParameterReducer } from "src/api/types";
// Types

// type EditParamInputContextType = {
// 	paramItem: ParamItem;
// 	setParamItem: (paramItem: ParamItem) => void;
// }
// type EditParamInputContextType = {
// 	state: ParamItem[];
// 	reducer: UseParameterReducer;
// }

type EditParamInputComponentProps = {
	state: ParamItem[];
	reducer: UseParameterReducer;
}
// const [EditParamInputContextProvider, useEditParamInputContext] =
// useCreateContext<EditParamInputContextType>("EditParamInputContext");

export const COMPONENT_TYPE = "hmi.input.ParameterList";

export const ParameterListComponent = (props: ComponentProps<EditParamInputComponentProps>) => {
		const { state, reducer } =  props.props;
		state.map((param, index)=>{
			const { label, input } = param;
			const { updateValue} = reducer.reducer;
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

		})

};

export class ParameterListComponentMeta implements ComponentMeta {
	getComponentType():string{
return COMPONENT_TYPE
	}

	getDefaultSize(): SizeObject{
		return {
			width: 120,
			height: 240,
		}
	}

	getPropsReducer(tree: PropertyTree): ParamItem[] {
		return tree.read('parameters', [])
	}

	getViewComponent(): PComponent {
		return ParameterListComponent as PComponent
	}
}
