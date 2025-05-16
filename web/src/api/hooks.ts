import { useImmerReducer } from 'use-immer';
import { initialValveStatus } from './initialise';
import type { ValveAction, ValveState} from './types';

function valveReducer(draft: ValveState , action: ValveAction): ValveState{
	switch (action.type){
		case 'alarm':
			if (action.payload?.boolValue) {
				draft.alarm = action.payload.boolValue;
			}else{
				console.log("action.payload.boolValue is undefined for alarm")
			}
			return draft;
		default:
			return draft
	}
};

export function useValveReducer() {
	const [state, dispatch] = useImmerReducer(
		valveReducer,
		initialValveStatus
	)
	/**
	 * Update alarm in state
	 * @Param alarm the alarm to update
	 * @return void
	 */
	function handleChangeAlarm(alarm: boolean){
		dispatch({
			type: 'alarm',
			payload: {
				boolValue: alarm
			}
		})
	}
	return {state, handleChangeAlarm}
}
