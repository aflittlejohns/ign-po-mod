import * as React from "react";

import Item from "./item";
import { ItemNameEnum } from "../../../api/types";
import { ValveProps } from "../Valve";
import { v4 as uuidv4 } from "uuid";
import { ComponentProps } from "node_modules/@inductiveautomation/perspective-client/build/dist/typedefs/perspective-client";

const bit = (n: number, i: number): number => {
	return (n >> i) & 1;
};

const Grid: React.FC<ComponentProps<ValveProps>> = ({
	ValveStatus,
	handleClick,
}): React.ReactElement => {
	const itemNames = Object.keys(ItemNameEnum).map((itemName) => {
		return {
			key: uuidv4(),
			name: itemName,
			value: ItemNameEnum[itemName as keyof typeof ItemNameEnum],
			index: Object.keys(ItemNameEnum).indexOf(itemName),
		};
	});

	// deconstructing the props
	const {
		ActFB = ValveStatus?.ActFB ?? false,
		DeActFB = ValveStatus?.DeActFB ?? false,
		ActivatedConfig = ValveStatus?.ActivatedConfig ?? 10,
		DeactivatedConfig = ValveStatus?.DeactivatedConfig ?? 0,
		Changing = ValveStatus?.Changing ?? false,
		Manual = ValveStatus?.Manual ?? false,
		Alarm = ValveStatus?.Alarm ?? false,
		Masked = ValveStatus?.Masked ?? false,
	} = ValveStatus ?? {};
	console.log("ValveStatus", ValveStatus);
	// function to determine the className of the items
	const getItemClassName = (
		//valveStatus: ValveStatus,
		index: number
	): string => {
		let className = "";
		// Handle the fAct that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
		const ActivatedConfigValue = ActivatedConfig ?? 0;
		const DeactivatedConfigValue = DeactivatedConfig ?? 0;
		if (index < 12) {
			if (
				(bit(ActivatedConfigValue, index) && ActFB) ||
				(bit(DeactivatedConfigValue, index) && DeActFB)
			) {
				className = "visible";
			} else {
				className = "hidden";
			}
		} else if (index === 14) {
			className = "visible";
		} else if (index === 12) {
			if (
				bit(ActivatedConfigValue, index) ||
				bit(DeactivatedConfigValue, index)
			) {
				className = "visible";
			} else {
				className = "hidden";
			}
		} else if (index === 13) {
			if (
				bit(ActivatedConfigValue, index) ||
				bit(DeactivatedConfigValue, index)
			) {
				className = "visible";
			} else {
				className = "hidden";
			}
		} else if (index === 15) {
			if (
				bit(ActivatedConfigValue, 12) ||
				bit(DeactivatedConfigValue, 12)
			) {
				className = "visible";
			} else {
				className = "hidden";
			}
		} else if (index === 16) {
			if (
				bit(ActivatedConfigValue, 12) ||
				bit(DeactivatedConfigValue, 12)
			) {
				className = "visible";
			} else {
				className = "hidden";
			}
		} else if (index === 17) {
			if (
				bit(ActivatedConfigValue, 13) ||
				bit(DeactivatedConfigValue, 13)
			) {
				className = "visible";
			} else {
				className = "hidden";
			}
		} else if (index === 18) {
			if (
				bit(ActivatedConfigValue, 13) ||
				bit(DeactivatedConfigValue, 13)
			) {
				className = "visible";
			} else {
				className = "hidden";
			}
		} else {
			className = "hidden";
		}
		// Additions to the className

		if (className.includes("visible")) {
			if (Alarm) {
				className = className.replace("AlarmState", "") + " AlarmState";
			}
			if (Changing) {
				className = className.replace("Changing", "") + " Changing";
			}
			if (Manual) {
				className = className.replace("Manual", "") + " Manual";
			}
			if (Masked && !Alarm) {
				className =
					className.replace("NoAlarmMask", "") + " NoAlarmMask";
			}
			if (Masked) {
				className = className.replace("Masked", "") + " Masked";
			}
		}

		return className; // default return value if no other condition is met
	};
	const onActionPerformed = (): void => {
		console.log("clicked");
		handleClick();
	};
	return (
		<div onClick={() => onActionPerformed()}>
			{itemNames.map(({ value, index, key }) => (
				<Item
					itemClassName={value + " " + getItemClassName(index)}
					key={key}
				/>
			))}
		</div>
	);
};
Grid.displayName = "Grid";
export default Grid;
