import { getBoolAtIndex } from "../utils/numberUtil";
import {
	ItemIdPositionType,
	// ItemNameEnum,
	pumpItemList,
	valveMpItemNameEnum,
	type PumpState,
	type PumpType,
	type StatusLike,
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
				className = className.replace("large", "") + " large";
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
 * Function getClassNameWithStatus.
 * This is a utility function which generates css classNames for each
 * element in a hmi-component symbol.
 * In the DOM tree base elements will have a class such as "base-1 to n"
 * with dynamicItems having a class such as "dynamic-1 to n"
 * @param index: number : Array index starting at zero
 * @param status: S : A StatusLike object
 * @param type: string:
 * @param baseElements: number :
 * @param baseConfig: number :
 * @param dynamicItems: number :
 * @param dynamicConfig: number :
 *elementVariants = [
 	{
 	statusKey: string,
 	additionalClass: string
	}
 ]
 */
export type ElementVariant = {
	statusKey?: HmiStatus;
	additionalClass?: string;
	baseClass?: string;
};
export type ElementVariantList = ElementVariant[];
export type boolString = {
	trueString?: string;
	falseString?: string;
}
export type HmiStatus = {
	alarm?: boolString;
	actFB?: boolString;
	deActFB?: boolString;
	manual?: boolString;
	masked?: boolString;
	changing?: boolString;
	locate?: boolString;
	activated?: boolString;
	usl?: boolString;
	lsl?: boolString;
}

export const getClassNameWithStatus = <S extends StatusLike>(
	index: number,
	status?: S,
	elementVariants?: ElementVariantList,
	baseClassName?: string,
	baseElements?: number,
	baseConfig?: number,
	dynamicItems?: number,
	dynamicConfig?: number
): string => {
	let className = "";
	let additionalClass = "";


if (elementVariants && elementVariants[index]?.statusKey && status) {
  const statusKeyObj = elementVariants[index].statusKey;
  // Get keys from statusKeyObj that are also in status
  const matchingKeys = Object.keys(statusKeyObj).filter(
    (key) => key in status
  ) as (keyof typeof statusKeyObj & keyof typeof status)[];

  for (const key of matchingKeys) {
    // Now you can safely access both statusKeyObj[key] and status[key]
    const keyStatusValue = statusKeyObj[key];
    const statusValue = status[key];
    if (statusValue){
		additionalClass += ` ${keyStatusValue?.trueString ? keyStatusValue.trueString : ""}`
	}else{
		additionalClass += ` ${keyStatusValue?.falseString ? keyStatusValue.falseString : ""}`
	}
  }
}
	// Base Elements
	if (baseElements && baseConfig) {
		if (index < baseElements) {
			let itemString = index > 0 ? "item" :`${baseClassName}`;
			if (getBoolAtIndex(baseConfig, index)) {
				className = `show ${itemString} ${additionalClass}`;
			} else {
				className = `hide ${itemString}`;
			}
		}
		// Dynamic Items
		if (dynamicItems && dynamicConfig) {
			let dynamIndex = index - baseElements;
			if (index >= baseElements && index < baseElements + dynamicItems) {
				if (getBoolAtIndex(dynamicConfig, dynamIndex)) {
					className = `show item`;
				} else {
					className = `hide item`;
				}
			}
		}
	}
	return className
};
/**
 * @returns Array of itemName(s) for each visual element of a valve component
 */
// export const itemNames = Object.entries(ItemNameEnum).map((key, index) => {
// 	return {
// 		key: uuidv4(),
// 		name: key,
// 		value: key[1],
// 		index: index,
// 	};
// });
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

export const pumpItemNames = pumpItemList.map((key, index) => {
	// console.log(`In build ItemNames name ${key} index ${index}`);
	return {
		key: uuidv4(),
		name: key,
		index: index,
	};
});
const getPumpConfiguration = (pumpType: PumpType): number => {
	switch (pumpType) {
		case "centrifugal":
			return 1;
		case "diaphragm":
			return 1;
		case "positive-displacment":
			return 1;
		case "progressive-cavity":
			return 1;
		case "gear":
			return 3;
		case "liquid-ring":
			return 3;
		case "positive-screw":
			return 3;
		default:
			throw Error(`In getPumpConfiguration() pump type: ${pumpType} not found`);
	}
};
export const getPumpItemClassName = (
	index: number,
	pumpType: PumpType,
	status?: PumpState
): string => {
	const configuration = getPumpConfiguration(pumpType);
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

export const getPumpStatusClassNames = (
	className: string,
	status: PumpState
) => {
	// Additions to the className
	// console.log(`status: ${JSON.stringify(status,null, 2)}`);

	if (className.includes("show") && !className.includes("item")) {
		if (status?.alarm) {
			className = className.replace("alarm", "") + " alarm";
		}
		if (status?.changing) {
			className = className.replace("changing", "") + " changing";
		}
		if (status?.manual) {
			className = className.replace("manual", "") + " manual";
		}
		if (status?.masked && !status.alarm) {
			className = className.replace("no-alarm-mask", "") + " no-alarm-mask";
		}
		if (status?.masked) {
			className = className.replace("masked", "") + " masked";
		}
		if (status?.actFB) {
			className = className.replace("activated", "") + " activated";
		}
		if (status?.deActFB) {
			className = className.replace("deactivated", "") + " deactivated";
		}
	}
	return className;
};
