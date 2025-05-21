import { useImmerReducer } from 'use-immer';
import { valveStatus } from './initialState';
import type { UseValveReducer, ValveAction, ValveState} from './types';

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
	const [state, dispatch] = useImmerReducer(
		valveReducer,
		valveStatus,
	)
	/**
	 * Set alarm in state
	 * @return void
	 */
	function updateActConfig(value: number){
		dispatch({
			type: 'UPDATE_ACT_CONFIG',
			value: value
		})
	}
	function updateDeActConfig(value: number){
		dispatch({
			type: 'UPDATE_DEACT_CONFIG',
			value: value
		})
	}
	function updateUsl(){
		dispatch({
			type: 'UPDATE_USL',
		})
	}
	function updateLsl(){
		dispatch({
			type: 'UPDATE_LSL',
		})
	}
	function updateAlarm(){
		dispatch({
			type: 'UPDATE_ALARM',
		})
	}
	function updateActFB(){
		dispatch({
			type: 'UPDATE_ACT_FB',
		})
	}
	function updateDeActFB(){
		dispatch({
			type: 'UPDATE_DE_ACT_FB',
		})
	}
	function updateManual(){
		dispatch({
			type: 'UPDATE_MANUAL',
		})
	}
	function updateMasked(){
		dispatch({
			type: 'UPDATE_MASKED',
		})
	}
	function updateChanging(){
		dispatch({
			type: 'UPDATE_CHANGING',
		})
	}
	function updateLocate(){
		dispatch({
			type: 'UPDATE_LOCATE',
		})
	}

	const useEditValveReducer = {
		state,
		reducer:{
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
