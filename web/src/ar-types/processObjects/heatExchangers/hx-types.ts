/**
 * HMI Component - Heat Exchanger types defs
 */

import type { ComponentProps } from "@inductiveautomation/perspective-client";
import type { ReactNode } from "react";
import type { ItemIdPositionType } from "../../../api/types";

export const HX_COMPONENT_TYPE = "hmi.process_objects.HeatExchanger";

const HeatExchangerTypes = [
	"plate",
	"tubelar",
];
export type HeatExchangerTypes = (typeof HeatExchangerTypes)[number];
export enum HxModes {
	alarm = "alarm",
	heating = "heating",
	cooling = "cooling",
};


export type HxProps = {
	type?: HeatExchangerTypes;
	itemName?: string;
	mode?: HxModes[keyof HxModes];
	locate?: boolean;
	showLabel?: boolean;
	labelPosition?: ItemIdPositionType
}

export const HxItemList = [
	"item-1",
	"item-2",
	"item-3",
	"item-4",
	"item-5",
	"item-6",
	"item-7",
	"base-1",
	"locate",
]
export type HxItems = (typeof HxItemList)[number];

export type HxCompoundContextType = {
	componentProps: ComponentProps<any, any>;
	itemProps: HxProps;
	onActionPerformed: () => void;
	children: ReactNode;
};
