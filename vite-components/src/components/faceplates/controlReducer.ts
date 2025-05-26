import type {
	Commands_Main,
	Commands_UpperSeat,
	Commands_LowerSeat,
} from "./types/commands";

export const initialAutoManState = {
	auto: true,
	manual: false,
};
export const initialOffOnState = {
	off: false,
	on: false,
};
export const initialControlState = {
	main: {
		...initialAutoManState,
		...initialOffOnState,
		label: "Main",
	},
	upperSeat: {
		...initialOffOnState,
		label: "Upper Seat",
	},
	lowerSeat: {
		...initialOffOnState,
		label: "Lower Seat",
	},
};
export type Store = typeof initialControlState;

export function mainReducer(
	state: Store['main'],
	type: string): Store['main'] {
		switch (type) {
		case "AUTO":
			return {
					...state,
					auto: true,
					manual: false,
			};
		case "MANUAL":
			return {
					...state,
					auto: false,
					manual: true,
			};
		case "OFF":
			return {
					...state,
					off: true,
					on: false,
			};
		case "ON":
			return {
					...state,
					off: false,
					on: true,
			};
		default:
			return state;
	}
}

export function upperSeatReducer(
	state: Store['upperSeat'],
	type: string): Store['upperSeat'] {
	switch (type) {
		case "OFF":
			return {
					...state,
					off: true,
					on: false,
			};
		case "ON":
			return {
					...state,
					on: true,
					off: false,
			};
		default:
			return state;
	}
}

export function lowerSeatReducer(
	state: Store['lowerSeat'],
	type: string): Store['lowerSeat'] {
	switch (type) {
		case "OFF":
			return {
					...state,
					off: true,
					on: false,
			};
		case "ON":
			return {
					...state,
					on: true,
					off: false,
			};
		default:
			return state;
	}
}
export default function controlsReducer(
	state: Store,
	commands: Commands_Main | Commands_UpperSeat | Commands_LowerSeat
): Store {
	const { type, payload } = commands;
	const { target } = payload;
	// TODO: build out the reducer
	switch (target) {
		case "main":
			return { ...state, main: mainReducer(state.main, type) };
		case "upperSeat":
			return {...state, upperSeat: upperSeatReducer(state.upperSeat, type) };
		case "lowerSeat":
			return {...state, lowerSeat: lowerSeatReducer(state.lowerSeat, type) };
		default:
			return state;
	}
}
