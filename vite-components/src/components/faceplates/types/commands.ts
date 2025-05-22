// Command types for faceplates

export const auto = (target: string): {
	type: "AUTO";
	payload: {
		target: string;
	};
} => ({
	type: "AUTO",
	payload: {
		target,
	},
})

export const manual = (target: string): {
	type: "MANUAL";
	payload: {
		target: string;
	};
} => ({
	type: "MANUAL",
	payload: {
		target,
	},
})

export const off = (target: string): {
	type: "OFF";
	payload: {
		target: string;
	};
} => ({
	type: "OFF",
	payload: {
		target,
	},
})

export const on = (target: string): {
	type: "ON";
	payload: {
		target: string;
	};
} => ({
	type: "ON",
	payload: {
		target,
	},
})



export type Commands_Selections_Auto_Manual =
| ReturnType<typeof auto>
| ReturnType<typeof manual>;

export type Commands_OnOff =
| ReturnType<typeof off>
| ReturnType<typeof on>;

export type Commands_UpperSeat =
| ReturnType<typeof off>
| ReturnType<typeof on>;

export type Commands_LowerSeat =
| ReturnType<typeof off>
| ReturnType<typeof on>;

export type Commands_Main =
| ReturnType<typeof auto>
| ReturnType<typeof manual>
| ReturnType<typeof off>
| ReturnType<typeof on>;

// Type Guards
export const isCommandsSelections = (value: string): value is Commands_Selections_Auto_Manual['type'] => {
	value = value.toUpperCase();
	return value === "AUTO" || value === "MANUAL";
}

export const isCommandsOnOff = (value: string): value is Commands_OnOff['type'] => {
	value = value.toUpperCase();
	return value === "OFF" || value === "ON";
}

// Commands_UpperSeat Guard
export const isCommandsUpperSeat = (value: string): value is Commands_UpperSeat['type'] => {
	value = value.toUpperCase();
	return value === "OFF" || value === "ON";
}
// Commands_LowerSeat Guard
export const isCommandsLowerSeat = (value: string): value is Commands_LowerSeat['type'] => {
	value = value.toUpperCase();
	return value === "OFF" || value === "ON";
}
// Commands_Main Guard
export const isCommandsMain = (value: string): value is Commands_Main['type'] => {
	value = value.toUpperCase();
	return value === "AUTO" || value === "MANUAL" || value === "OFF" || value === "ON";
}
