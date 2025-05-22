export const extdParamsProps = {
	extdParamItems: [
		{
			label: {
				value: "Extended Parameters",
				isHeader: true,
			},
			input:{
				type: "text",
				value: 0,
				editable: false,
			}
		},
		{
			label: {
				value: "Pressure",
				isHeader: false,
			},
			input:{
				type: "text",
				decimalPlaces: 1,
				value: 0,
				max: 100,
				min: 0,
				eu: "bar",
				editable: false,}
		},
		{
			label: {
				value: "Temperature",
				isHeader: false,
			},
			input:{
				type: "number",
				eu: "°C",
				min: 0,
				max: 100,
				decimalPlaces: 1,
				value: 0,
				editable: true,
			}
		}
	]
};
