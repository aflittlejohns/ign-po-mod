/**
 * The purpose of initialStates.ts is to provide initial state for component props
 */
// initialState.ts


import { CommandValveMpProps, ParamItem } from "./types";

export const valveStatus = {
	alarm: false,
	actFB: false,
	deActFB: true,
	activatedConfig: 7,
	deactivatedConfig: 5,
	itemName: "VXXX",
	manual: false,
	masked: false,
	changing: false,
	locate: false,
};

export const processObjectProps = {
	status: valveStatus,
};
export const valveProps = {
	processObject: processObjectProps,
	handleClick: () => {
		console.log("Valve clicked");
	},
	labelPosition: "left",
	showLabel: false,
};

export const parameterInitialState = [
	{
		label: {
			text: "label",
			className: "",
			tooltipText: "",
			tooltipPosition: "",
			tooltipClassName: "",
			tooltipId: "",
		},
		input: {
			type: "text",
			inputmode: "numeric",
			placeholder: "Enter a number",
			editable: true,
			pattern: "^[0-9]*[.,]?[0-9]*$",
			min: 0,
			max: 100,
			decimalPlaces: 2,
			eu: "\u00B5C",
			value: 0,
		},
	} as ParamItem,
];

export const initialAutoManState = {
	auto: true,
	manual: false,
};
export const initialOffOnState = {
	off: false,
	on: false,
};
export const initialControlState = {
	command: {
		security:{
			enabled: false,
			accesslevel: 0,
			userNames: ["admin"],
			userRoles: ["Administrator"],
		},
		interlocks: {
			main: [],
			upperSeat: [],
			lowerSeat: []
		},
		main: {
			label: "Main",
			auto: true,
			manual: false,
			off: true,
			on: false,
		},
		upperSeat: {
			label: "Upper Seat",
			off: true,
			on: false,
		},
		lowerSeat: {
			label: "Lower Seat",
			off: true,
			on: false,
		},
	},
	writeData: ()=>{}
} as CommandValveMpProps;
