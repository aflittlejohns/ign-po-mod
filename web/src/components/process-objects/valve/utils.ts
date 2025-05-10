import { getBoolAtIndex } from "../../../utils/numberUtil";
import { ItemNameEnum, type ValveStatus } from "../../../api/types";
import {v4 as uuidv4 } from 'uuid'
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
export const getItemClassName = (index: number, valveStatus?: ValveStatus): string => {
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
			if (getBoolAtIndex(ActivatedConfigValue, 12) || getBoolAtIndex(DeactivatedConfigValue, 12)) {
				className = "show";
			} else {
				className = "hide";
			}
		} else if (index === 16) {
			if (getBoolAtIndex(ActivatedConfigValue, 12) || getBoolAtIndex(DeactivatedConfigValue, 12)) {
				className = "show";
			} else {
				className = "hide";
			}
		} else if (index === 17) {
			if (getBoolAtIndex(ActivatedConfigValue, 13) || getBoolAtIndex(DeactivatedConfigValue, 13)) {
				className = "show";
			} else {
				className = "hide";
			}
		} else if (index === 18) {
			if (getBoolAtIndex(ActivatedConfigValue, 13) || getBoolAtIndex(DeactivatedConfigValue, 13)) {
				className = "show";
			} else {
				className = "hide";
			}
		} else {
			className = "hide";
		}
		// Additions to the className

		if (className.includes("show") && !className.includes("item")) {
			console.log("index", index, className);
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

		return className; // default return value if no other condition is met
	}
/**
 * @returns Array of itemName(s) for each visual element of a valve component
 */
export const itemNames = Object.keys(ItemNameEnum).map((itemName) => {
		return {
			key: uuidv4(),
			name: itemName,
			value: ItemNameEnum,
			index: Object.keys(ItemNameEnum).indexOf(itemName),
		};
	});
