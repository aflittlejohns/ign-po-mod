import { useImmerReducer } from 'use-immer';
import { valveStatus } from './initialState';
import type { ValveAction, ValveState} from './types';

function valveReducer(state: ValveState, action: ValveAction): ValveState{
	switch (action.type){
		case 'alarm':
			if (action.payload) {
				state.alarm = action.payload.boolValue;
			}
			return state;
		default:
			return state
	}
};

export function useValveReducer() {
	const [state, dispatch] = useImmerReducer(
		valveReducer,
		valveStatus
	)
	// /**
	//  * Update alarm in state
	//  * @Param alarm the alarm to update
	//  * @return void
	//  */
	// function handleChangeAlarm(alarm: boolean){
	// 	dispatch({
	// 		type: 'alarm',
	// 		payload: {
	// 			boolValue: alarm
	// 		}
	// 	})
	// }
	// return {state, handleChangeAlarm}
	return {state, dispatch}
}

