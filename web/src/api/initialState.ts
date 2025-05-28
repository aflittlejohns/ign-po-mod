/**
 * The purpose of initialStates.ts is to provide initial state for component props
 */
// initialState.ts

import { ParamItem } from "./types";



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

export const valveProps = {
	ValveStatus: valveStatus,
	handleClick: () => {
		console.log("Valve clicked");
	},
};

export const parameterInitialState = [{
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
			placeholder: "",
			editable: true,
			pattern: "^[0-9]*[.,]?[0-9]*$",
			min: 0,
			max: 100,
			decimalPlaces: 2,
			eu: "",
			value: 0,
		},
	} as ParamItem ];
