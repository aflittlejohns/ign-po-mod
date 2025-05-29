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
import { ParametersListState, ParamItem } from "src/api/types";
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

		console.log(`transformedProps: label ${transformedProps[0].label.text}`);
		return(
			<>
		{transformedProps.map((param: ParamItem, index: number)=>{
			const { input} = param;
			console.log(input.value);

			return (
				<label key={index}className="field">
					<span className="label">Numeric</span>
					<input type="text"
					inputMode="numeric"
					pattern="[0-9]*"
					placeholder="Placeholder"
					// value={input.value}
					onChange={(e) => {
						console.log(e);
						props.store.props.write
						// updateValue(parseFloat(parseFloat(e.target.value).toFixed(2)), index);
					}}
					/>
				</label>
					)

		})
	}</>
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
		console.log("parameters", tree.read("parameters"));
		return {
			parameters:tree.read('parameters')
		}
	}

	getViewComponent(): PComponent {
		return ParameterListComponent as PComponent
	}
}
