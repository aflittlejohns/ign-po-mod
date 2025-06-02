import { useImmerReducer } from 'use-immer';
import { initialControlState, parameterInitialState, valveStatus } from './initialState';
import type { CommandValveMpProps, ParameterAction, ParamItem, UseParameterReducer, UseValveMpCommandReducer, UseValveReducer, ValveAction, ValveMpCommandAction, ValveState} from './types';

function valveReducer(draft: ValveState , action: ValveAction): ValveState{
	switch (action.type){
		case 'UPDATE_ACT_CONFIG':
			draft.activatedConfig = action.value;
			return draft;
			case 'UPDATE_DEACT_CONFIG':
				draft.deactivatedConfig = action.value;
				return draft;
				case 'UPDATE_ACT_FB':
					draft.actFB = !draft.actFB;
					return draft;
				case 'UPDATE_DE_ACT_FB':
					draft.deActFB = !draft.deActFB;
					return draft;
				case 'UPDATE_USL':
					draft.usl = !draft.usl;
					return draft;
				case 'UPDATE_LSL':
					draft.lsl = !draft.lsl;
					return draft;
				case 'UPDATE_MANUAL':
					draft.manual = !draft.manual;
					return draft;
				case 'UPDATE_ALARM':
					draft.alarm = !draft.alarm;
					return draft;
				case 'UPDATE_MASKED':
					draft.masked = !draft.masked;
					return draft;
				case 'UPDATE_CHANGING':
					draft.changing = !draft.changing;
					return draft;
				case 'UPDATE_LOCATE':
					draft.locate = !draft.locate;
					return draft;
		default: // #TODO Add more reducer case statements
			return draft
	}
};

export function useValveReducer(): UseValveReducer {
	const [state, dispatch] = useImmerReducer(valveReducer, valveStatus);

	function updateActConfig(value: number) {
		dispatch({ type: 'UPDATE_ACT_CONFIG', value });
	}
	function updateDeActConfig(value: number) {
		dispatch({ type: 'UPDATE_DEACT_CONFIG', value });
	}
	function updateUsl() {
		dispatch({ type: 'UPDATE_USL' });
	}
	function updateLsl() {
		dispatch({ type: 'UPDATE_LSL' });
	}
	function updateAlarm() {
		dispatch({ type: 'UPDATE_ALARM' });
	}
	function updateActFB() {
		dispatch({ type: 'UPDATE_ACT_FB' });
	}
	function updateDeActFB() {
		dispatch({ type: 'UPDATE_DE_ACT_FB' });
	}
	function updateManual() {
		dispatch({ type: 'UPDATE_MANUAL' });
	}
	function updateMasked() {
		dispatch({ type: 'UPDATE_MASKED' });
	}
	function updateChanging() {
		dispatch({ type: 'UPDATE_CHANGING' });
	}
	function updateLocate() {
		dispatch({ type: 'UPDATE_LOCATE' });
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
	}
}

	return useEditValveReducer

}
/**
 *  Update a parameter item in a list of parameter items
*/


export function ParameterReducer(draft: ParamItem[], action: ParameterAction): ParamItem[]{
	switch (action.type){
		case 'UPDATE_VALUE':
			draft[action.index].input.value = action.value;
			return draft;
		default: // #TODO Add more reducer case statements
			return draft
	}
};

export function paramItemsReducer(): UseParameterReducer {
	const [state, dispatch] = useImmerReducer(ParameterReducer, parameterInitialState );

	function updateValue(index: number, value: number) {
		dispatch({ type: 'UPDATE_VALUE', index: index , value: value});
	}
	// Add more dispatch functions here
const useParameterReducer ={
		state,
		reducer:{
			updateValue
		}
	}
	return useParameterReducer
}
function valveMpReducer(draft: CommandValveMpProps , action: ValveMpCommandAction): CommandValveMpProps{
	switch (action.type){
		case 'UPDATE_AUTO_MANUAL':
			if(draft.main){
				draft.main.auto = !draft.main.auto;
				draft.main.manual = !draft.main.manual;
			}
				return draft;
		case 'UPDATE_MAIN_MAN_ON':
			if(draft.main){
				draft.main.on = !draft.main.on;
			}
				return draft;
		case 'UPDATE_MAIN_MAN_OFF':
			if(draft.main){
				draft.main.off = !draft.main.off;
			}
				return draft;
		case 'UPDATE_USL_MAN_ON':
			if(draft.upperSeat){
				draft.upperSeat.on = !draft.upperSeat.on;
			}
				return draft;
		case 'UPDATE_USL_MAN_OFF':
			if(draft.upperSeat){
				draft.upperSeat.off = !draft.upperSeat.off;
			}
				return draft;
		case 'UPDATE_LSL_MAN_ON':
			if(draft.lowerSeat){
				draft.lowerSeat.on = !draft.lowerSeat.on;
			}
				return draft;
		case 'UPDATE_LSL_MAN_OFF':
			if(draft.lowerSeat){
				draft.lowerSeat.off = !draft.lowerSeat.off;
			}
				return draft;


			default: // #TODO Add more reducer case statements
			return draft
	}
};

export function useValveMpCommandReducer(): UseValveMpCommandReducer {
	const [state, dispatch] = useImmerReducer(valveMpReducer ,initialControlState );

	function updateAutoManSelection() {
		dispatch({ type: 'UPDATE_AUTO_MANUAL'});
	}
	function updateMainManualOn() {
		dispatch({ type: 'UPDATE_MAIN_MAN_ON'});
	}
	function updateMainManualOff() {
		dispatch({ type: 'UPDATE_MAIN_MAN_OFF' });
	}
	function updateUslManualOn() {
		dispatch({ type: 'UPDATE_USL_MAN_ON' });
	}
	function updateUslManualOff() {
		dispatch({ type: 'UPDATE_USL_MAN_OFF' });
	}
	function updateLslManualOn() {
		dispatch({ type: 'UPDATE_LSL_MAN_ON' });
	}
	function updateLslManualOff() {
		dispatch({ type: 'UPDATE_LSL_MAN_OFF' });
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
	}
}

	return useCommandsValveMpReducer

}
