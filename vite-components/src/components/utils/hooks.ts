import {ParamItem} from "../faceplates/ParamsCompound";

export function paramItemsReducer(state:ParamItem[], action: { type: string; payload?: any }) {
	switch (action.type) {
		case "SET_PARAM_ITEM":
			return state.map((item, index) =>
				index === action.payload.index ? { ...item, ...action.payload.value } : item
			);
		default:
			return state;
	}
}
