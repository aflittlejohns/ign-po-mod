import { useImmerReducer } from "use-immer";

import {
	initialControlState,
	parameterInitialState,
} from "./initialState";
import type {
	CommandValveMpProps,
	ParameterAction,
	ParamItem,
	UseParameterReducer,
	UseValveMpCommandReducer,
	ValveMpCommandAction,
} from "./types";


/**
 *  Update a parameter item in a list of parameter items
 */

export function ParameterReducer(
	draft: ParamItem[],
	action: ParameterAction
): ParamItem[] {
	switch (action.type) {
		case "UPDATE_VALUE":
			draft[action.index].input.value = action.value;
			return draft;
		default: // #TODO Add more reducer case statements
			return draft;
	}
}

export function paramItemsReducer(): UseParameterReducer {
	const [state, dispatch] = useImmerReducer(
		ParameterReducer,
		parameterInitialState
	);

	function updateValue(index: number, value: number) {
		dispatch({ type: "UPDATE_VALUE", index: index, value: value });
	}
	// Add more dispatch functions here
	const useParameterReducer = {
		state,
		reducer: {
			updateValue,
		},
	};
	return useParameterReducer;
}
function valveMpReducer(
	draft: CommandValveMpProps,
	action: ValveMpCommandAction
): CommandValveMpProps {
	switch (action.type) {
		case "UPDATE_AUTO_MANUAL":
			if (draft.command?.main) {
				if (action.mode === "auto") {
					draft.command.main.autoManual = false;
					console.log(`In Auto`);

				} else if (action.mode === "manual") {
					draft.command.main.autoManual = true;
					console.log(`In Manual`);
					return draft;
				}
			}
			return draft;
		case "UPDATE_MAIN_MAN_ON":
			if (draft.command?.main) {
				draft.command.main.activation = true;
			}
			return draft;
		case "UPDATE_MAIN_MAN_OFF":
			if (draft.command?.main) {
				draft.command.main.activation = false;
			}
			return draft;
		case "UPDATE_USL_MAN_ON":
			if (draft.command?.upperSeat) {
				draft.command.upperSeat.activation = true;
			}
			return draft;
		case "UPDATE_USL_MAN_OFF":
			if (draft.command?.upperSeat) {
				draft.command.upperSeat.activation = false;
			}
			return draft;
		case "UPDATE_LSL_MAN_ON":
			if (draft.command?.lowerSeat) {
				draft.command.lowerSeat.activation = true;
			}
			return draft;
		case "UPDATE_LSL_MAN_OFF":
			if (draft.command?.lowerSeat) {
				draft.command.lowerSeat.activation = false;
			}
			return draft;
		case "UPDATE_MAIN_AVAIL":
			if (draft.command?.available) {
				if(action.value)
				draft.command.available.main = action.value;
			}
			return draft;

		default: // #TODO Add more reducer case statements
			return draft;
	}
}

export function useValveMpCommandReducer(): UseValveMpCommandReducer {
	const [state, dispatch] = useImmerReducer(
		valveMpReducer,
		initialControlState
	);

	function updateMainAvailable(value: boolean) {
		dispatch({ type: "UPDATE_MAIN_AVAIL", value });
	}
	function updateUpperSeatAvailable(value: boolean) {
		dispatch({ type: "UPDATE_UPPERSEAT_AVAIL", value });
	}
	function updateLowerSeatAvailable(value: boolean) {
		dispatch({ type: "UPDATE_LOWERSEAT_AVAIL", value });
	}
	function updateAutoManSelection(mode: "auto" | "manual") {
		dispatch({ type: "UPDATE_AUTO_MANUAL", mode });
	}
	function updateMainManualOn() {
		dispatch({ type: "UPDATE_MAIN_MAN_ON" });
	}
	function updateMainManualOff() {
		dispatch({ type: "UPDATE_MAIN_MAN_OFF" });
	}
	function updateUslManualOn() {
		dispatch({ type: "UPDATE_USL_MAN_ON" });
	}
	function updateUslManualOff() {
		dispatch({ type: "UPDATE_USL_MAN_OFF" });
	}
	function updateLslManualOn() {
		dispatch({ type: "UPDATE_LSL_MAN_ON" });
	}
	function updateLslManualOff() {
		dispatch({ type: "UPDATE_LSL_MAN_OFF" });
	}

	const useCommandsValveMpReducer = {
		state,
		reducer: {
			updateAutoManSelection,
			updateMainAvailable,
			updateUpperSeatAvailable,
			updateLowerSeatAvailable,
			updateMainManualOn,
			updateMainManualOff,
			updateUslManualOn,
			updateUslManualOff,
			updateLslManualOn,
			updateLslManualOff,
		},
	};

	return useCommandsValveMpReducer;
}
