// import './valveConfig.module.css'
import type{ HTMLInputTypeAttribute}from "react";
import React, {useState} from "react";
import ItemClickable from "../valve-mp-itemClickable/ItemClickable";
import { valveMpItemClickableNameEnum } from "../../api/types";
import { UseCheckboxContext } from './hooks';

export type ValveConfigData = {
	config: number;
};
export type CheckboxData = {
	key: number;
	className: string;
	type: HTMLInputTypeAttribute;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled: boolean;
};
//type initialCheckBoxDataArr = CheckboxData[]
export const initialCheckboxDataArr: CheckboxData[] = [
	{
		key: 0,
		className: "",
		type: "checkbox",
		checked: false,
		onChange: () => {},
		disabled: false
	},
	{
		key: 1,
		className: "",
		type: "checkbox",
		checked: false,
		onChange: () => {},
		disabled: false
	},
];
const ValveConfigAid = () => {
	const itemNames = Object.keys(valveMpItemClickableNameEnum).map(
		(itemName, index) => {
			return {
				key: index,
				name: itemName,
				value: valveMpItemClickableNameEnum[
					itemName as keyof typeof valveMpItemClickableNameEnum
				],
				index: Object.keys(valveMpItemClickableNameEnum).indexOf(itemName),
			};
		}
	);
	const [config, updateConfig] = useState<ValveConfigData>({
		config: 0,
	});
	// const [isChecked, setChecked] = useState<CheckboxData[]>(
	// 	initialCheckboxDataArr
	// );
	const {draft, reducer} = UseCheckboxContext();
	const {checked} = reducer;
	const checkboxes = ["v2body"];
	const anyChecked = draft.checkboxDataArr.some(cb => cb.checked);

    const checkBoxArr = checkboxes.map((item, index): CheckboxData => {
		const disabled = anyChecked && !draft.checkboxDataArr[index].checked ;
		let className = item;
		if (disabled){
			className = `${item} disabled ` ;
		} else if(draft.checkboxDataArr[index].checked){
			className = `${item} clicked`;
		}
		return {
			key: index,
			className: className,
			type: "checkbox" as HTMLInputTypeAttribute,
			checked: draft.checkboxDataArr[index]?.checked || false, //if isChecked[index] is undefined return false
			onChange: (): void => {
				checked(index)
				// setChecked(updatedCheckBoxes);
				let newIndex = 8 + index;
				updateConfig((prev): ValveConfigData => {
					const bitValue = 2 ** newIndex;
					let newConfig = 0;
					if (draft.checkboxDataArr[index].checked) {
						// If unchecked, remove the bit
						newConfig = prev.config - bitValue;
					} else {
						// If checked, add the bit
						newConfig = prev.config + bitValue;
					}
					return {
						...prev,
						config: newConfig,
					};
				});
			},
			disabled: anyChecked && !draft.checkboxDataArr[index].checked,
		};
	});

	const getConfig = ({
		index,
		clicked,
	}: {
		event: React.MouseEvent<HTMLDivElement>;
		index: number;
		clicked: boolean;
	}) => {
		updateConfig((prev): ValveConfigData => {
			console.log(`update Config ${prev.config}`);
			let temp = prev.config;
			const bitValue = 2 ** index;
			if (clicked) {
				console.log("isClicked");
				temp = temp + bitValue;
			} else {
				console.log("Not isClicked");
				temp = temp - bitValue;
			}
			console.log("BitValue is: " + bitValue + " Config " + temp);
			return {
				...prev,
				config: temp,
			};
		});
		//	console.log(event, index, config);
	};

	return (
		<div className="gridItemClickable">
			<label className="configLabel" htmlFor="config">
				Value for this config =<br /> {config.config}
			</label>
			{checkBoxArr.map(({ key, className, type, checked, onChange }) => (
				<input
					key={key}
					className={className}
					type={type}
					checked={checked}
					onChange={onChange}
				/>
			))}
			{itemNames.map(({ key, value }, index) => {
				let addToClassName = "";
				if (index >= 8 && index <= 9) {
					addToClassName = draft.checkboxDataArr[index - 8]?.checked
						? " clicked"
						: "";
					console.log(
						`addToClassName = ${addToClassName} is checked = ${
							draft.checkboxDataArr[index - 8]?.checked
						}`
					);
				}

				return (
					<ItemClickable
						itemClassName={`${value} ${addToClassName}`}
						key={key}
						bitPosition={index}
						handleClick={(event, clicked) =>
							getConfig({ event, index, clicked })
						}
					/>
				);
			})}
		</div>
	);
};

export default ValveConfigAid;
