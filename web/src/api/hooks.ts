import { useImmerReducer } from "use-immer";

import {
	initialControlState,
	// initialControlState,
	parameterInitialState,
	valveStatus,
} from "./initialState";
import type {
	CommandValveMpProps,
	ParameterAction,
	ParamItem,
	UseParameterReducer,
	UseValveMpCommandReducer,
	UseValveReducer,
	ValveAction,
	ValveMpCommandAction,
	ValveState,
} from "./types";

function valveReducer(draft: ValveState, action: ValveAction): ValveState {
	switch (action.type) {
		case "UPDATE_ACT_CONFIG":
			draft.activatedConfig = action.value;
			return draft;
		case "UPDATE_DEACT_CONFIG":
			draft.deactivatedConfig = action.value;
			return draft;
		case "UPDATE_ACT_FB":
			draft.actFB = !draft.actFB;
			return draft;
		case "UPDATE_DE_ACT_FB":
			draft.deActFB = !draft.deActFB;
			return draft;
		case "UPDATE_USL":
			draft.usl = !draft.usl;
			return draft;
		case "UPDATE_LSL":
			draft.lsl = !draft.lsl;
			return draft;
		case "UPDATE_MANUAL":
			draft.manual = !draft.manual;
			return draft;
		case "UPDATE_ALARM":
			draft.alarm = !draft.alarm;
			return draft;
		case "UPDATE_MASKED":
			draft.masked = !draft.masked;
			return draft;
		case "UPDATE_CHANGING":
			draft.changing = !draft.changing;
			return draft;
		case "UPDATE_LOCATE":
			draft.locate = !draft.locate;
			return draft;
		default: // #TODO Add more reducer case statements
			return draft;
	}
}

export function useValveReducer(): UseValveReducer {
	const [state, dispatch] = useImmerReducer(valveReducer, valveStatus);

	function updateActConfig(value: number) {
		dispatch({ type: "UPDATE_ACT_CONFIG", value });
	}
	function updateDeActConfig(value: number) {
		dispatch({ type: "UPDATE_DEACT_CONFIG", value });
	}
	function updateUsl() {
		dispatch({ type: "UPDATE_USL" });
	}
	function updateLsl() {
		dispatch({ type: "UPDATE_LSL" });
	}
	function updateAlarm() {
		dispatch({ type: "UPDATE_ALARM" });
	}
	function updateActFB() {
		dispatch({ type: "UPDATE_ACT_FB" });
	}
	function updateDeActFB() {
		dispatch({ type: "UPDATE_DE_ACT_FB" });
	}
	function updateManual() {
		dispatch({ type: "UPDATE_MANUAL" });
	}
	function updateMasked() {
		dispatch({ type: "UPDATE_MASKED" });
	}
	function updateChanging() {
		dispatch({ type: "UPDATE_CHANGING" });
	}
	function updateLocate() {
		dispatch({ type: "UPDATE_LOCATE" });
	}

	const useEditValveReducer = {
		state,
		reducer: {
			updateActConfig,
			updateDeActConfig,
			updateAlarm,
			updateActFB,
			updateDeActFB,
			updateUsl,
			updateLsl,
			updateManual,
			updateMasked,
			updateChanging,
			updateLocate,
		},
	};

	return useEditValveReducer;
}
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
					draft.command.main = {
						label: draft.command.main.label,
						auto: true,
						manual: false,
						off: draft.command.main.off,
						on: draft.command.main.on,
					};
				} else if (action.mode === "manual") {
					draft.command.main = {
						label: draft.command.main.label,
						auto: false,
						manual: true,
						off: draft.command.main.off,
						on: draft.command.main.on,
					};
				}
				return draft;
			}
			return draft;
		case "UPDATE_MAIN_MAN_ON":
			if (draft.command?.main) {
				draft.command.main.on = true;
				draft.command.main.off = false;
			}
			return draft;
		case "UPDATE_MAIN_MAN_OFF":
			if (draft.command?.main) {
				draft.command.main.on = false;
				draft.command.main.off = true;
			}
			return draft;
		case "UPDATE_USL_MAN_ON":
			if (draft.command?.upperSeat) {
				draft.command.upperSeat.on = true;
				draft.command.upperSeat.off = false;
			}
			return draft;
		case "UPDATE_USL_MAN_OFF":
			if (draft.command?.upperSeat) {
				draft.command.upperSeat.on = false;
				draft.command.upperSeat.off = true;
			}
			return draft;
		case "UPDATE_LSL_MAN_ON":
			if (draft.command?.lowerSeat) {
				draft.command.lowerSeat.on = true;
				draft.command.lowerSeat.off = false;
			}
			return draft;
		case "UPDATE_LSL_MAN_OFF":
			if (draft.command?.lowerSeat) {
				draft.command.lowerSeat.on = false;
				draft.command.lowerSeat.off = true;
			}
			return draft;

		default: // #TODO Add more reducer case statements
			return draft;
	}
}

export function useValveMpCommandReducer(): UseValveMpCommandReducer {
	const [state, dispatch] = useImmerReducer(valveMpReducer, initialControlState);

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
