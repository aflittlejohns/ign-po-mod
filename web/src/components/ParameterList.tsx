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
import { ParametersListState, ParamItem } from "../api/types";
import { parameterInitialState } from "../api/initialState";

// Types

// type EditParamInputContextType = {
// 	paramItem: ParamItem;
// 	setParamItem: (paramItem: ParamItem) => void;
// }
// type EditParamInputContextType = {
// 	state: ParamItem[];
// 	reducer: UseParameterReducer;
// }

type ParametersListComponentProps = {
	parameters: ParamItem[]
}
const initParameters = [{
	label:{
		text: "text"
	},
	input: {
		value: null,
		placeholder: "Enter a Number"
	}
}]

// const [EditParamInputContextProvider, useEditParamInputContext] =
// useCreateContext<EditParamInputContextType>("EditParamInputContext");

export const COMPONENT_TYPE = "hmi.input.ParameterList";

export const ParameterListComponent = (props: ComponentProps<ParametersListComponentProps>) => {
const transformedProps = React.useMemo(() => {
	const { parameters} = props.props || initParameters
	return parameters
}, [props.props.parameters])



		return(
			<div className="display-flex-column"
			>
		{transformedProps.map((param: ParamItem, index: number)=>{
			const { label,input} = param;
			console.log(input.value);

			return (
				<label key={`${label.text}-parameter${index}`}className="field small">
					<span className="label">{label.text}</span>
					<span className="eu">{input.eu}</span>
					<input type="text"
					id={`${label.text}-parameter${index}`}
					inputMode={input.inputmode}
					pattern={input.pattern || "[0-9]*"}
					placeholder={input.placeholder}
					disabled={!input.editable}
					value={input.value}
					onChange={
						(e) => {
							// console.log(`On change event ${e.currentTarget.value}`);
							props.store.props.write(
								`parameters[${index}].input.value`,
								e.currentTarget.value
							)
						// updateValue(parseFloat(parseFloat(e.target.value).toFixed(2)), index);
					}}
					/>
				</label>
					)

		})
	}</div>
		)

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

	getPropsReducer(tree: PropertyTree): ParametersListState {
		return {
			parameters:tree.read ('parameters', parameterInitialState)
		}
	}

	getViewComponent(): PComponent {
		return ParameterListComponent as PComponent
	}
}
