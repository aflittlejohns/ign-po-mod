/**
 * HMI Component - Heat Exchanger - Plate Utility functions
 */
import {v4 as uuidv4 } from 'uuid';
import { HxItemList, type HeatExchangerTypes, type HxModes } from '../../../ar-types/processObjects/heatExchangers/hx-types'
import { getBoolAtIndex } from '../../../utils/numberUtil';
export const hxItemNames = HxItemList.map(
	(key, index) => {
		// console.log(`In build ItemNames name ${key} index ${index}`);
		return {
			key: uuidv4(),
			name: key,
			index: index,
		};
	}
);

const getHxConfiguration = (type: HeatExchangerTypes):number =>{
	switch (type){
		case "plate":
			return 1
		case "tubelar":
			return 1
		default:
			throw Error(`In getPumpConfiguration() pump type: ${type} not found`)
	}
}


export const getHxItemClassName = (
	index: number,
	type: HeatExchangerTypes,
	mode?: HxModes[keyof HxModes],
	): string => {
	const configuration = getHxConfiguration(type)
	let className = "";
	// Handle the fact that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
	if (index < 2) {
		if (getBoolAtIndex(configuration, index)) {
			className = `show item ${type}`;
		} else {
			className = "hide item";
		}
	}
	return className;
}
export const getHxModeClassNames = (className: string, mode: HxModes[keyof HxModes])=>{
	// Additions to the className

	if (className.includes("show") && !className.includes("item")) {

		switch (mode) {
			case "alarm":
				className = className.replace("AlarmState", "") + " AlarmState";
				break;
			case "heating":
				className = className.replace("heating", "") + " heating";
				break;
			case "cooling":
				className = className.replace("cooling", "") + " cooling";
				break;
			default:
					break;
				}
			}
	return className;
};
