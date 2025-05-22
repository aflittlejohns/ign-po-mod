import * as React from "react";
import { createContext } from "../utils/createContext";
import { paramItemsReducer } from "../utils/hooks";
// Types
export type ParamLabel = {
	text: string;
	className?: string;
	tooltipText?: string;
	tooltipPosition?: string;
	tooltipClassName?: string;
	tooltipId?: string;
}
export type ParamInput = {
	type: string;
	inputmode: string;
	placeholder: string;
	editable: boolean;
	pattern: string;
	min: number;
	max: number;
	decimalPlaces: number;
	// pattern: "^[0-9]*[.,]?[0-9]*$" for decimal numbers
	// pattern: "^[0-9]*$" for integers
	eu: string;
	value: number;
}
// type ParamsHeader = {
// 	label: string
// }
export type ParamItem = {
	label: ParamLabel;
	input: ParamInput;
}
// type EditParamInputContextType = {
// 	paramItem: ParamItem;
// 	setParamItem: (paramItem: ParamItem) => void;
// }
type EditParamInputContextType = {
	paramItems: ParamItem[];
	reducer: (paramItem: ParamItem, index: number) => void;
}

type EditParamInputComponentProps = {
	paramItems: ParamItem | ParamItem[];
	children: React.ReactNode;
}
const [EditParamInputContextProvider, useEditParamInputContext] =
createContext<EditParamInputContextType>("EditParamInputContext");



const Root: React.FC<EditParamInputComponentProps> = ({children}) => {
	const [paramItems, dispatch] = React.useReducer(paramItemsReducer, [{
		label: {
			text: "label",
			className: "",
			tooltipText: "",
			tooltipPosition: "",
			tooltipClassName: "",
			tooltipId: "",
		},
		input: {
			type: "text",
			inputmode: "numeric",
			placeholder: "",
			editable: true,
			pattern: "^[0-9]*[.,]?[0-9]*$",
			min: 0,
			max: 100,
			decimalPlaces: 2,
			eu: "",
			value: 0,
		},
	}]);

	return (
		<EditParamInputContextProvider
		// {...{
		// 		paramItems,
		// 		reducer: (paramItems: any, index: number) => {
		// 			dispatch({
		// 				type: "UPDATE_PARAM_ITEM",
		// 				payload: { paramItems, index },
		// 			});
		// 		}
		// 	}}
		value={{paramItems: paramItems, reducer: dispatch}}
			>
			{children}
		</EditParamInputContextProvider>
	);
};
const Param = (index:number) => {
	const { paramItems  } = useEditParamInputContext("Params");


		// const { label, input } = paramItem;
		const { label, input } =  paramItems[index];
		return (
			<label className="field">
				<span className="label">{label.text}</span>
				<input type="text"
				inputMode="numeric"
				pattern="[0-9]*"
				placeholder={input?.placeholder}
				onChange={(e) => {
					console.log(e);

					// const value = e.target.value;
					// reducer({
					// 	...paramItems,
					// 	input: {
					// 		...input,
					// 		value: parseFloat(value),
					// 	},
					// });
				}}
				/>
			</label>
				)

};


export const ParamCompound = {
	Root,
	Param,
};
