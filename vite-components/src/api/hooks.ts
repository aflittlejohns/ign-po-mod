import { useImmerReducer } from 'use-immer';
import { valveStatus } from './initialState';
import type { UseValveReducer, ValveAction, ValveState} from './types';

function valveReducer(draft: ValveState , action: ValveAction): ValveState{
	switch (action.type){
		case 'SET_ALARM':
			draft.alarm = true;
			return draft;
		case 'RESET_ALARM':
				draft.alarm = false;
			return draft;
		default: // #TODO Add more reducer case statements
			return draft
	}
};

export function useValveReducer(): UseValveReducer {
	const [state, dispatch] = useImmerReducer(
		valveReducer,
		valveStatus
	)
	/**
	 * Set alarm in state
	 * @return void
	 */
	function updateAlarm(){
		dispatch({
			type: 'SET_ALARM',
		})
	}
	const reducer = {
		state,
		useReducer:{updateAlarm}
	}

	return reducer

}
