import * as React from "react";
// import type { tExtdParam, tExtdParamsProps } from "./types/extdparams";

/**
 * Represents a label input item.
 * @typedef {Object} tLabelInput
 * @property {Object} payload - The payload of the label input item.
 * @property {string} payload.label - The label of the input item.
 * @property {string} payload.value - The value of the input item.
 * @property {boolean} payload.editable - Indicates if the input item is editable.
 * @property {number} key - The key of the input item.
 */
type tLabelInputProps = {
	payload:{
		label: string;
		value: string;
		editable: boolean;
	}
	key: number;
};

export const LabelInput: React.FC<tLabelInputProps> = ({ payload , key}): React.ReactElement => {
	const [value, setValue] = React.useState(payload.value);
	const handleChange = (value: string) => {
		setValue(value);
	};
	return (
		<label key={key} className="lif-label-input__item">
			{payload.label}

			<input className="lif-label-input__item-input"
				type="text"
				value={value}
				onChange={(e) => {handleChange(e.target.value);}}
				disabled={!payload.editable}
				/>
		</label>
	);
};
LabelInput.displayName = "LabelInput";
export default LabelInput;
