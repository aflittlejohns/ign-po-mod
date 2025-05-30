import { getBoolAtIndex } from "../utils/numberUtil";
import {
	ItemIdPositionType,
	ItemNameEnum,
	valveMpItemNameEnum,
	type ValveState,
} from "../api/types";
import { v4 as uuidv4 } from "uuid";
/**
 * This is a utility function for the component "process-object/ValveFC"
 *
 * @param index: number the index of an dynamic visual element "item" within the Valve component
 * @param valveStatus?:ValveStatus the status representing physical process valve
 * @returns className:string returns additional classnames for an visual element of the valve component.
 *
 * Returned classnames are;
 * 	hide - this hides the item
 * 	show -
 */
export const getItemClassName = (
	index: number,
	valveStatus?: ValveState
): string => {
	let className = "";
	// Handle the fact that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
	const ActivatedConfigValue = valveStatus?.activatedConfig ?? 0;
	const DeactivatedConfigValue = valveStatus?.deactivatedConfig ?? 0;
	if (index < 12) {
		if (
			(getBoolAtIndex(ActivatedConfigValue, index) && valveStatus?.actFB) ||
			(getBoolAtIndex(DeactivatedConfigValue, index) && valveStatus?.deActFB)
		) {
			className = "show item";
		} else {
			className = "hide item";
		}
	} else if (index === 14) {
		className = "show";
	} else if (index === 12) {
		if (
			getBoolAtIndex(ActivatedConfigValue, index) ||
			getBoolAtIndex(DeactivatedConfigValue, index)
		) {
			className = "show";
		} else {
			className = "hide";
		}
	} else if (index === 13) {
		if (
			getBoolAtIndex(ActivatedConfigValue, index) ||
			getBoolAtIndex(DeactivatedConfigValue, index)
		) {
			className = "show";
		} else {
			className = "hide";
		}
	} else if (index === 15) {
		if (
			getBoolAtIndex(ActivatedConfigValue, 12) ||
			getBoolAtIndex(DeactivatedConfigValue, 12)
		) {
			className = "show";
		} else {
			className = "hide";
		}
	} else if (index === 16) {
		if (
			getBoolAtIndex(ActivatedConfigValue, 12) ||
			getBoolAtIndex(DeactivatedConfigValue, 12)
		) {
			className = "show";
		} else {
			className = "hide";
		}
	} else if (index === 17) {
		if (
			getBoolAtIndex(ActivatedConfigValue, 13) ||
			getBoolAtIndex(DeactivatedConfigValue, 13)
		) {
			className = "show";
		} else {
			className = "hide";
		}
	} else if (index === 18) {
		if (
			getBoolAtIndex(ActivatedConfigValue, 13) ||
			getBoolAtIndex(DeactivatedConfigValue, 13)
		) {
			className = "show";
		} else {
			className = "hide";
		}
	} else {
		className = "hide";
	}
	// Additions to the className

	if (className.includes("show") && !className.includes("item")) {
		// console.log("index", index, className);
		if (valveStatus?.alarm) {
			className = className.replace("AlarmState", "") + " AlarmState";
		}
		if (valveStatus?.changing) {
			className = className.replace("Changing", "") + " Changing";
		}
		if (valveStatus?.manual) {
			className = className.replace("Manual", "") + " Manual";
		}
		if (valveStatus?.masked && !valveStatus.alarm) {
			className = className.replace("NoAlarmMask", "") + " NoAlarmMask";
		}
		if (valveStatus?.masked) {
			className = className.replace("Masked", "") + " Masked";
		}
		if (valveStatus?.actFB) {
			className = className.replace("Activated", "") + " Activated";
		}
		if (valveStatus?.deActFB) {
			className = className.replace("Deactivated", "") + " Deactivated";
		}
		if (valveStatus?.locate) {
			className = className.replace("circle", "") + " circle";
		}
	}

	return className; // default return value if no other condition is met
};
export const getValveMpItemClassName = (
	index: number,
	valveStatus?: ValveState
): string => {
	let className = "";
	// Handle the fact that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
	const ActivatedConfigValue = valveStatus?.activatedConfig ?? 0;
	const DeactivatedConfigValue = valveStatus?.deactivatedConfig ?? 0;
	// console.log(valveStatus);

	if (index < 8) {
		if (
			(getBoolAtIndex(ActivatedConfigValue, index) && valveStatus?.actFB) ||
			(getBoolAtIndex(DeactivatedConfigValue, index) && valveStatus?.deActFB)
		) {
			className = "show item";
		} else {
			className = "hide item";
		}
	} else if (index === 9) {
		className = "show";
	} else if (index === 8) {
		if (
			getBoolAtIndex(ActivatedConfigValue, index) ||
			getBoolAtIndex(DeactivatedConfigValue, index)
		) {
			className = "show";
		} else {
			className = "hide";
		}
	} else if (index === 10) {
		// console.log(
		// 	`index ${index} deact config ${DeactivatedConfigValue} bit is ${getBoolAtIndex(
		// 		DeactivatedConfigValue,
		// 		10
		// 	)}`
		// );

		if (
			getBoolAtIndex(ActivatedConfigValue, 10) ||
			getBoolAtIndex(DeactivatedConfigValue, 10)
		) {
			className = "show item";
			if (valveStatus?.usl) {
				className = className.replace("Activated", "") + " Activated";
			} else {
				className = className.replace("Deactivated", "") + " Deactivated";
			}
		} else {
			className = "hide item";
		}
	} else if (index === 11) {
		if (
			getBoolAtIndex(ActivatedConfigValue, 11) ||
			getBoolAtIndex(DeactivatedConfigValue, 11)
		) {
			className = "show item";
			if (valveStatus?.lsl) {
				className = className.replace("Activated", "") + " Activated";
			} else {
				className = className.replace("Deactivated", "") + " Deactivated";
			}
		} else {
			className = "hide item";
		}
	} else if (index === 12) {
		if (valveStatus?.locate) {
			className = className.replace("show item", "") + " show item";
			if(getBoolAtIndex(ActivatedConfigValue, 8) ||
			getBoolAtIndex(DeactivatedConfigValue, 8)){
				className = className.replace("show large item", "") + " show large item";
			}
		} else {
			className = className.replace("hide item", "") + " hide item";
		}
	}
	// Additions to the className

	if (className.includes("show") && !className.includes("item")) {
		// console.log("index", index, className);
		if (valveStatus?.alarm) {
			className = className.replace("AlarmState", "") + " AlarmState";
		}
		if (valveStatus?.changing) {
			className = className.replace("Changing", "") + " Changing";
		}
		if (valveStatus?.manual) {
			className = className.replace("Manual", "") + " Manual";
		}
		if (valveStatus?.masked && !valveStatus.alarm) {
			className = className.replace("NoAlarmMask", "") + " NoAlarmMask";
		}
		if (valveStatus?.masked) {
			className = className.replace("Masked", "") + " Masked";
		}
		if (valveStatus?.actFB) {
			className = className.replace("Activated", "") + " Activated";
		}
		if (valveStatus?.deActFB) {
			className = className.replace("Deactivated", "") + " Deactivated";
		}
	}
	// console.log("index", index, className);

	return className; // default return value if no other condition is met
};
/**
 * @returns Array of itemName(s) for each visual element of a valve component
 */
export const itemNames = Object.entries(ItemNameEnum).map((key, index) => {
	// console.log(`In build ItemNames name ${key} index ${index}`);
	return {
		key: uuidv4(),
		name: key,
		value: key[1],
		index: index,
	};
});
export const valveMpItemNames = Object.entries(valveMpItemNameEnum).map(
	(key, index) => {
		// console.log(`In build ItemNames name ${key} index ${index}`);
		return {
			key: uuidv4(),
			name: key,
			value: key[1],
			index: index,
		};
	}
);
export const getItemIdPositionClassName = (className: string, itemIdPosition: ItemIdPositionType):ItemIdPositionType => {
	// Check className includes 'itemId popover', if not return className and warn
	if (!className.includes('itemId popover')){
		console.warn("Function getItemIdPositionClassName called when 'itemId popover' not in given className");
		return className
	}
	// Over write given className
	className = "itemId popover";
	switch (itemIdPosition) {
	case "left":
		className = className.replace("position-left", "") + " position-left";
		break;
	case "right":
		className = className.replace("position-right", "") + " position-right";
		break;
	case "top-left":
		className = className.replace("position-top-left", "") + " position-top-left";
		break;
	case "top-right":
		className = className.replace("position-top-right", "") + " position-top-right";
		break;
	case "bottom-left":
		className = className.replace("position-bottom-left", "") + " position-bottom-left";
		break;
	case "bottom-right":
		className = className.replace("position-bottom-right", "") + " position-bottom-right";
		break;

	default:
		break;
}

	return className;
}

