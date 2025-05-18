export type ValveState = {
	alarm: boolean;
	actFB: boolean;
	deActFB: boolean;
	activatedConfig: number;
	deactivatedConfig: number;
	tagName: string;
	manual: boolean;
	masked: boolean;
	changing: boolean;
}
/**
 * Define the shape of the ValveAction type
 * @Useage useValveReducer
 */
export type ValveAction =
{type: 'SET_ALARM'}
| {type: 'RESET_ALARM'}
| {type: 'SET_MANUAL'}
| {type: 'RESET_MANUAL'}
| {type: 'UPDATE_ACT_CONFIG'; valve: number}
| {type: 'UPDATE_DEACT_CONFIG'; valve: number}

export type ValveReducer = (state: ValveState, action: ValveAction) => ValveState;

export type UseValveReducer = {
	state: ValveState,
	 useReducer:{
		updateAlarm: () => ValveState
		//#TODO add more handlers as needed
	}};

export const ValveClassNameEnum = {
	AlarmState : "AlarmState",
	Activated : "Activated",
	Deactivated : "Deactivated",
	Manual : "Manual",
	Masked : "Masked",
	Changing : "Changing",
	NoAlarmMask : "NoAlarmMask",
}
export type ValveClassNameEnum = typeof ValveClassNameEnum[keyof typeof ValveClassNameEnum]
export const ItemNameEnum = {
	V1b2 : "v1b2", // index 1
	V1b3 : "v1b3", // index 2
	V1b4 : "v1b4", // index 3
	V1b1 : "v1b1", // index 0
	V2b1 : "v2b1", // index 4
	V2b2 : "v2b2", // index 5
	V2b3 : "v2b3", // index 6
	V2b4 : "v2b4", // index 7
	V3b1 : "v3b1", // index 8
	V3b2 : "v3b2", // index 9
	V3b3 : "v3b3", // index 10
	V3b4 : "v3b4", // index 11
	V2 : "v2", // index 12
	V3 : "v3", // index 13
	V1 : "v1", // index 14
	V2f1 : "v2f1", // index 15
	V2f2 : "v2f2", // index 16
	V3f1 : "v3f1", // index 17
	V3f2 : "v3f2", // index 18
}
export type ItemNameEnum = typeof ItemNameEnum[keyof typeof ItemNameEnum]

export const ItemClickableNameEnum = {
	V1b1 : "v1b1", // index 0
	V1b2 : "v1b2", // index 1
	V1b3 : "v1b3", // index 2
	V1b4 : "v1b4", // index 3
	V2b1 : "v2b1", // index 4
	V2b2 : "v2b2", // index 5
	V2b3 : "v2b3", // index 6
	V2b4 : "v2b4", // index 7
	V3b1 : "v3b1", // index 8
	V3b2 : "v3b2", // index 9
	V3b3 : "v3b3", // index 10
	V3b4 : "v3b4", // index 11
	V2 : "v2", // index 12
	V3 : "v3", // index 13
	V1 : "v1", // index 14
}
export type ItemClickableNameEnum = typeof ItemClickableNameEnum[keyof typeof ItemClickableNameEnum]
export const ItemPositionEnum = {
	v1b1:"v1b1",
	v1b2: "v1b2",
	v1b3: "v1b3",
	v1b4: "v1b4",
	v2b1: "v2b1",
	V2b2: "v2b2",
	v2b3: "v2b3",
	v2b4: "v2b4",
	v3b1: "v3b1",
	v3b2: "v3b2",
	v3b3: "v3b3",
	v3b4: "v3b4",
	v2: "v2",
	v3: "v3",
}
export type ItemPositionEnum = typeof ItemPositionEnum[keyof typeof ItemPositionEnum]

const ValveStateEnum = {
	alarm: "alarm",
	manual: "manual",
	masked: "masked",
}
export type ValveStateEnum = typeof ValveStateEnum[keyof typeof ValveStateEnum]

export type ValveProps = {
	ValveStatus?: ValveState;
	handleClick?: () => void;
}

export type ItemData = {
	key: string;
	value: string;
	props: ValveState;
}


