import type { ReactNode } from "react";
import type { ComponentProps } from "@inductiveautomation/perspective-client";


export type ElementRef = React.RefObject<HTMLDivElement>;
export type ValveState = {
	alarm?: boolean;
	actFB: boolean;
	deActFB: boolean;
	usl?: boolean;
	lsl?: boolean;
	activatedConfig: number;
	deactivatedConfig: number;
	itemName: string;
	manual: boolean;
	masked: boolean;
	changing: boolean;
	locate: boolean;
};
export type StatusLike = {
	configuration?:number
    activatedConfig?: number;
    deactivatedConfig?: number;
    actFB?: boolean;
    deActFB?: boolean;
    usl?: boolean;
    lsl?: boolean;
    locate?: boolean;
    alarm?: boolean;
    changing?: boolean;
    manual?: boolean;
    masked?: boolean;
};

export type ValveCompoundContextType = {
	componentProps: ComponentProps<any, any>;
	valveProps: ValveProps;
	onActionPerformed: () => void;
	children: ReactNode;
};
export type ValveCompoundRootProps = {
	componentProps: ComponentProps<any, any>;
	valveProps: ValveProps;
	onActionPerformed: () => void;
	children: ReactNode;
};

export type PumpState = {
	alarm: boolean;
	actFB: boolean;
	deActFB: boolean;
	itemName: string;
	manual: boolean;
	masked: boolean;
	changing: boolean;
	locate: boolean;
};

export type PumpCompoundContextType = {
	componentProps: ComponentProps<any, any>;
	pumpProps: PumpProps;
	onActionPerformed: () => void;
	children: ReactNode;
};
export type PumpCompoundRootProps = {
	componentProps: ComponentProps<any, any>;
	pumpProps: PumpProps;
	onActionPerformed: () => void;
	children: ReactNode;
};
/**
 * Define the shape of the ParameterAction type
 * @Useage useParameterReducer
 */
export type ParameterAction = {
	type: "UPDATE_VALUE";
	value: number;
	index: number;
};

export type ParameterReducer = (
	state: ParamItem | ParamItem[],
	action: ParameterAction
) => ValveState;

export type UseParameterReducer = {
	state: ParamItem[];
	reducer: {
		updateValue: (value: number, index: number) => void;
		//add more handlers as needed
	};
};
export type ParamLabel = {
	text: string;
	className?: string;
	tooltipText?: string;
	tooltipPosition?: string;
	tooltipClassName?: string;
	tooltipId?: string;
};
export type ParamInput = {
	type: string;
	inputmode:
		| "none"
		| "text"
		| "tel"
		| "url"
		| "email"
		| "numeric"
		| "decimal"
		| "search"
		| undefined;
	placeholder: string;
	editable: boolean;
	pattern: string;
	min: number;
	max: number;
	decimalPlaces: number;
	// pattern: "^[0-9]*[.,]?[0-9]*$" for decimal numbers
	// pattern: "^[0-9]*$" for integers
	eu: string;
	value: number;
};
// type ParamsHeader = {
// 	label: string
// }
export type ParamItem = {
	label: ParamLabel;
	input: ParamInput;
};
export type ParametersListState = {
	parameters: ParamItem[];
};

export const ValveClassNameEnum = {
	AlarmState: "AlarmState",
	Activated: "Activated",
	Deactivated: "Deactivated",
	Manual: "Manual",
	Masked: "Masked",
	Changing: "Changing",
	NoAlarmMask: "NoAlarmMask",
	Locate: "Locate",
};
export type ValveClassNameEnum =
	(typeof ValveClassNameEnum)[keyof typeof ValveClassNameEnum];

export const valveMpItemNameEnum = {
	V1b1: "v1b1", // index 0
	V1b2: "v1b2", // index 1
	V1b3: "v1b3", // index 2
	V1b4: "v1b4", // index 3
	V2b1: "v2b1", // index 4
	V2b2: "v2b2", // index 5
	V2b3: "v2b3", // index 6
	V2b4: "v2b4", // index 7
	V2: "v2", // index 8
	v1: "v1", // index 9
	usl: "usl", // index 10 upper-seat-lift
	lsl: "lsl", // index 11 lower-seat-lift
	locate: "locate", // index 12 locate animation
};
export type valveMpItemNameEnum =
	(typeof valveMpItemNameEnum)[keyof typeof valveMpItemNameEnum];



const ValveStateEnum = {
	alarm: "alarm",
	manual: "manual",
	masked: "masked",
};
export type ValveStateEnum =
	(typeof ValveStateEnum)[keyof typeof ValveStateEnum];

const itemIdPositions = [
	"right",
	"left",
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right",
];

export type ItemIdPositionType = (typeof itemIdPositions)[number];
export type ProcessObject = {
	status: ValveState;
};
export type Pump = {
	status: PumpState;
};
export type ValveProps = {
	processObject?: ProcessObject;
	labelPosition?: ItemIdPositionType;
	showLabel?: boolean;
	handleClick?: () => void;
};
const pumpTypes= [
	"centrifugal",
	"diaphragm",
	"gear",
	"liquid-ring",
	"positive-displacement",
	"positive-screw",
	"progressive-cavity",
]
export type PumpType = (typeof pumpTypes)[number];
export type PumpProps = {
	pumpType?: PumpType;
	processObject?: Pump;
	labelPosition?: ItemIdPositionType;
	showLabel?: boolean;
	handleClick?: () => void;
};
export const pumpItemList = [
	"symbol-1",
	"symbol-2",
 	"locate",
]
export type PumpItemList = (typeof pumpItemList)[number];

export type ItemData = {
	key: string;
	value: string;
	props: ValveState;
};

export type itemNameProps = {
	key: string;
	name: [string, string];
	value: string;
	index: number;
};
export type CommandValveMpProps = {
	command?: {
		available?: {
			main: boolean;
			upperSeat?: boolean;
			lowerSeat?: boolean;
		};
		main?: {
			label: string;
			autoManual: boolean;
			activation: boolean;
		};
		upperSeat?: {
			label: string;
			activation: boolean;
		};
		lowerSeat?: {
			label: string;
			activation: boolean;
		};
	};
};

export type CommandsValveMpCompoundContextType = {
	componentProps: ComponentProps<any, any>;
	useReducer: UseValveMpCommandReducer;
	children: ReactNode;
};
export type CommandsValveMpCompoundRootProps = {
	componentProps: ComponentProps<any, any>;
	command: CommandValveMpProps;
	children: ReactNode;
};
/**
 * Define the shape of the ValveAction type
 * @Useage useValveReducer
 */
export type ValveMpCommandAction =
	| { type: "UPDATE_AUTO_MANUAL"; mode: "auto" | "manual" }
	| { type: "UPDATE_MAIN_AVAIL"; value: boolean }
	| { type: "UPDATE_UPPERSEAT_AVAIL"; value: boolean }
	| { type: "UPDATE_LOWERSEAT_AVAIL"; value: boolean }
	| { type: "UPDATE_MAIN_MAN_ON" }
	| { type: "UPDATE_MAIN_MAN_OFF" }
	| { type: "UPDATE_USL_MAN_ON" }
	| { type: "UPDATE_USL_MAN_OFF" }
	| { type: "UPDATE_LSL_MAN_ON" }
	| { type: "UPDATE_LSL_MAN_OFF" };
export type ValveMpCommandReducer = (
	state: CommandValveMpProps,
	action: ValveMpCommandAction
) => ValveState;

export type UseValveMpCommandReducer = {
	state: CommandValveMpProps;
	reducer: {
		updateAutoManSelection: (mode: "auto" | "manual") => void;
		updateMainAvailable: (value: boolean) => void;
		updateUpperSeatAvailable: (value: boolean) => void;
		updateLowerSeatAvailable: (value: boolean) => void;
		updateMainManualOn: () => void;
		updateMainManualOff: () => void;
		updateUslManualOn: () => void;
		updateUslManualOff: () => void;
		updateLslManualOn: () => void;
		updateLslManualOff: () => void;
		//add more handlers as needed
	};
};
export const hxItemNameEnum = {
	b1: "base-1", // index 0
	b2: "base-2", // index 1
	b3: "base-3", // index 2
	b4: "base-4", // index 3
	V2b1: "v2b1", // index 4
	V2b2: "v2b2", // index 5
	V2b3: "v2b3", // index 6
	V2b4: "v2b4", // index 7
	V2: "v2", // index 8
	v1: "v1", // index 9
	usl: "usl", // index 10 upper-seat-lift
	lsl: "lsl", // index 11 lower-seat-lift
	locate: "locate", // index 12 locate animation
};
export type HxItemNameEnum =
	(typeof hxItemNameEnum)[keyof typeof hxItemNameEnum];
