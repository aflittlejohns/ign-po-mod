import { getBoolAtIndex } from "../utils/numberUtil";
import {
	ItemIdPositionType,
	ItemNameEnum,
	pumpItemList,
	valveMpItemNameEnum,
	type PumpState,
	type PumpType,
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
			className = className.replace("alarm", "") + " alarm";
		}
		if (valveStatus?.changing) {
			className = className.replace("changing", "") + " changing";
		}
		if (valveStatus?.manual) {
			className = className.replace("manual", "") + " manual";
		}
		if (valveStatus?.masked && !valveStatus.alarm) {
			className = className.replace("no-alarm-mask", "") + " no-alarm-mask";
		}
		if (valveStatus?.masked) {
			className = className.replace("masked", "") + " masked";
		}
		if (valveStatus?.actFB) {
			className = className.replace("activated", "") + " activated";
		}
		if (valveStatus?.deActFB) {
			className = className.replace("deactivated", "") + " deactivated";
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
				className = className.replace("activated", "") + " activated";
			} else {
				className = className.replace("deactivated", "") + " deactivated";
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
				className = className.replace("activated", "") + " activated";
			} else {
				className = className.replace("deactivated", "") + " deactivated";
			}
		} else {
			className = "hide item";
		}
	} else if (index === 12) {
		if (valveStatus?.locate) {
			className = className.replace("small", "") + " small";
			if (
				getBoolAtIndex(ActivatedConfigValue, 8) ||
				getBoolAtIndex(DeactivatedConfigValue, 8)
			) {
				className =
					className.replace("large", "") + " large";
			}
		} else {
			className = className.replace("hide item", "") + " hide item";
		}
	}
	// Additions to the className

	if (className.includes("show") && !className.includes("item")) {
		// console.log("index", index, className);
		if (valveStatus?.alarm) {
			className = className.replace("alarm", "") + " alarm";
		}
		if (valveStatus?.changing) {
			className = className.replace("changing", "") + " changing";
		}
		if (valveStatus?.manual) {
			className = className.replace("manual", "") + " manual";
		}
		if (valveStatus?.masked && !valveStatus.alarm) {
			className = className.replace("no-alarm-mask", "") + " no-alarm-mask";
		}
		if (valveStatus?.masked) {
			className = className.replace("masked", "") + " masked";
		}
		if (valveStatus?.actFB) {
			className = className.replace("activated", "") + " activated";
		}
		if (valveStatus?.deActFB) {
			className = className.replace("deactivated", "") + " deactivated";
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
export const getItemIdPositionClassName = (
	className: string,
	itemIdPosition: ItemIdPositionType
): ItemIdPositionType => {
	// Check className includes 'itemId popover', if not return className and warn
	if (!className.includes("itemId popover")) {
		console.warn(
			"Function getItemIdPositionClassName called when 'itemId popover' not in given className"
		);
		return className;
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
			className =
				className.replace("position-top-left", "") + " position-top-left";
			break;
		case "top-right":
			className =
				className.replace("position-top-right", "") + " position-top-right";
			break;
		case "bottom-left":
			className =
				className.replace("position-bottom-left", "") + " position-bottom-left";
			break;
		case "bottom-right":
			className =
				className.replace("position-bottom-right", "") +
				" position-bottom-right";
			break;

		default:
			break;
	}

	return className;
};


export const pumpItemNames = pumpItemList.map(
	(key, index) => {
		// console.log(`In build ItemNames name ${key} index ${index}`);
		return {
			key: uuidv4(),
			name: key,
			index: index,
		};
	}
);
const getPumpConfiguration = (pumpType: PumpType):number =>{
	switch (pumpType){
		case "centrifugal":
			return 1
		case "diaphragm":
			return 1
		case "positive-displacment":
			return 1
		case "progressive-cavity":
			return 1
		case "gear":
			return 3
		case "liquid-ring":
			return 3
		case "positive-screw":
			return 3
		default:
			throw Error(`In getPumpConfiguration() pump type: ${pumpType} not found`)
	}


}
export const getPumpItemClassName = (
	index: number,
	pumpType: PumpType,
	status?: PumpState,
	): string => {
	const configuration = getPumpConfiguration(pumpType)
	let className = "";
	// Handle the fact that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
	if (index < 2) {
		if (getBoolAtIndex(configuration, index)) {
			className = `show item ${pumpType}`;
		} else {
			className = "hide item";
		}
	}
	return className;
};

export const getPumpStatusClassNames = (className: string, status: PumpState) => {
	// Additions to the className
	// console.log(`status: ${JSON.stringify(status,null, 2)}`);


	if (className.includes("show") && !className.includes("item")) {
		if (status?.alarm) {
			className = className.replace("AlarmState", "") + " AlarmState";
		}
		if (status?.changing) {
			className = className.replace("Changing", "") + " Changing";
		}
		if (status?.manual) {
			className = className.replace("Manual", "") + " Manual";
		}
		if (status?.masked && !status.alarm) {
			className = className.replace("NoAlarmMask", "") + " NoAlarmMask";
		}
		if (status?.masked) {
			className = className.replace("Masked", "") + " Masked";
		}
		if (status?.actFB) {
			className = className.replace("Activated", "") + " Activated";
		}
		if (status?.deActFB) {
			className = className.replace("Deactivated", "") + " Deactivated";
		}
	}
	return className;
}
