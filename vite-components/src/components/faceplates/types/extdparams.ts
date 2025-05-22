
export type tExtdParam = {
	label:{
		value: string;
		isHeader?: boolean;
	},
	input:{
		type: string;
		value: number;
		editable: boolean;
		decimalPlaces?: number;
		pattern?: string;
		// pattern: "^[0-9]*[.,]?[0-9]*$" for decimal numbers
		// pattern: "^[0-9]*$" for integers
		eu?: string;
		min?: number;
		max?: number;
		placeholder?: string;
	}
}

export type tExtdParamsProps = {
	extdParamItems:tExtdParam[];
}

