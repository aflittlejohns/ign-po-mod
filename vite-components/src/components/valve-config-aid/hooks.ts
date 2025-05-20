import { useImmerReducer } from "use-immer";
import type {CheckboxData } from "./ValveConfigAid";

type CheckboxDataState = {
	config: number;
	checkboxDataArr: CheckboxData[]
}
export const initialCheckboxDataArr: CheckboxData[] = [
	{
		key: 0,
		className: "",
		type: "checkbox",
		checked: false,
		onChange: () => {},
		disabled: false
	},
	{
		key: 1,
		className: "",
		type: "checkbox",
		checked: false,
		onChange: () => {},
		disabled: false
	},
];
const initialCheckboxData = {
	config: 0,
	checkboxDataArr: initialCheckboxDataArr,
}

/**
 * Define the shape of the CheckboxArrAction type
 * @Useage useCheckboxReducer
 */
export type CheckboxArrAction =
	| { type: "DISABLE"; index: number }
	| { type: "ENABLE"; index: number }
	| { type: "UPDATE_CHECKED", index: number }
	| { type: "UPDATE_CONFIG", index: number }


export type UseCheckboxContext = {
	draft: CheckboxDataState;
	reducer: {
		disable: (index:number) => void;
		enable: (index:number) => void;
		checked: (index:number) => void;
		updateConfig: (index:number) => void;
		//add more handlers as needed
	};
};


function checkboxReducer(draft:CheckboxDataState, action: CheckboxArrAction){
	switch (action.type){
		case 'DISABLE':
			console.log(`Checkbox ${action.index} Disabled`)
			return;
		case 'ENABLE':
			console.log(`Checkbox ${action.index} Enabled`)
			return;
		case 'UPDATE_CHECKED':
			draft.checkboxDataArr.forEach((cb, i) => {
				cb.checked = i === action.index ? !cb.checked : false;
			});
			return;
		case 'UPDATE_CONFIG':
			draft.config = 6;
			return;
		default:
			return;
	}
}

export function UseCheckboxContext(): UseCheckboxContext {
	const [draft, dispatch] = useImmerReducer(
		checkboxReducer,
		initialCheckboxData
	)
	function disable(index:number){
		dispatch({
			type: "DISABLE",
			index: index
		})
	}
	function enable(index:number){
		dispatch({
			type: "ENABLE",
			index: index
		})

	}
	function checked(index:number){
		dispatch({
			type: "UPDATE_CHECKED",
			index: index
		})
	}
	function updateConfig(index:number){
		dispatch({
			type: "UPDATE_CONFIG",
			index: index
		})

	}
	const useCheckboxContext = {
		draft,
		reducer:{
			disable:disable,
			enable:enable,
			checked:checked,
			updateConfig:updateConfig
		}
	}

	return useCheckboxContext;
}
