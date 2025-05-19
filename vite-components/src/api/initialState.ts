/**
 * The purpose of initialStates.ts is to provide initial state for component props
 */
// initialState.ts



export const valveStatus = {
	alarm: false,
	actFB: false,
	deActFB: true,
	activatedConfig: 7,
	deactivatedConfig: 5,
	tagName: "VXXX",
	manual: false,
	masked: false,
	changing: false,
};

export const valveProps = {
	ValveStatus: valveStatus,
	handleClick: () => {
		console.log("Valve clicked");
	},
};

