import React, { HTMLInputTypeAttribute, useState } from "react";
import ItemClickable from "./itemClickable";
import { ItemClickableNameEnum } from "../../../api/types";

type ValveConfigData = {
	config: number;
};
type CheckboxData = {
	key: number;
	className: string;
	type: HTMLInputTypeAttribute;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
//type initialCheckBoxDataArr = CheckboxData[]
const initialCheckboxDataArr: CheckboxData[] = [
	{
		key: 0,
		className: "",
		type: "checkbox",
		checked: false,
		onChange: () => {},
	},
	{
		key: 1,
		className: "",
		type: "checkbox",
		checked: false,
		onChange: () => {},
	},
];
const ValveConfigAid = () => {
	const itemNames = Object.keys(ItemClickableNameEnum).map(
		(itemName, index) => {
			return {
				key: index,
				name: itemName,
				value: ItemClickableNameEnum[
					itemName as keyof typeof ItemClickableNameEnum
				],
				index: Object.keys(ItemClickableNameEnum).indexOf(itemName),
			};
		}
	);
	const [config, updateConfig] = useState<ValveConfigData>({
		config: 0,
	});
	const [isChecked, setChecked] = useState<CheckboxData[]>(
		initialCheckboxDataArr
	);
	const checkboxes = ["v2body", "v3body"];
	const checkBoxArr = checkboxes.map((item, index): CheckboxData => {
		console.log("index== " + index);
		return {
			key: index,
			className: isChecked[index].checked ? `${item} clicked` : item,
			type: "checkbox" as HTMLInputTypeAttribute,
			checked: isChecked[index]?.checked || false, //if isChecked[index] is undefined return false
			onChange: (): void => {
				const updatedCheckBoxes = [...isChecked];
				updatedCheckBoxes[index] = {
					...updatedCheckBoxes[index],
					checked: !updatedCheckBoxes[index].checked,
				};
				setChecked(updatedCheckBoxes);
			},
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
			console.log(prev);
			let temp = prev.config;
			const bitValue = 2 ** index;
			console.log("BitValue is: " + bitValue + " Prev Config " + temp);
			if (clicked) {
				console.log("isClicked");
				temp = temp + bitValue;
			} else {
				console.log("Not isClicked");
				temp = temp - bitValue;
			}
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
				if (index >= 12 && index <= 13) {
					addToClassName = isChecked[index - 12]?.checked
						? " clicked"
						: "";
					console.log(
						`addToClassName = ${addToClassName} is checked = ${
							isChecked[index - 12]?.checked
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
