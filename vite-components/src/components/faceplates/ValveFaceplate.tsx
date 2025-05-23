import React from "react";
import Header from "./header";
import Status from "./status";
import SwiperPanel from "./swiper";
import Control from "./control";
import "./css/swiper.css";
import "./css/index.css";
import type { ControlProps } from "./types/control";
import type { StatusProps } from "./types/status";
import type { HeaderProps } from "./types/header";
import {
	// ControlProvider,
	useControlContext,
} from "./stores/ControlContext";
// import { extdParamsProps } from "../utils/constants";
// import ExtdParams from "./faceplates/extdParams";
// import { ParamCompound, type ParamItem } from "./ParamsCompound";
// import { Param } from "./Param";
import { ParamList } from "./ParamList";
export interface ValveFaceplateProps {
	config?: number | boolean[];
	header?: HeaderProps;
	status?: StatusProps;
	control?: ControlProps;
	footer?: any;
	eventsEnabled?: boolean;
	componentEvents?: {
		fireComponentEvent: (eventName: string, eventData: any) => void;
	};
}
export const valveFaceplateProps: ValveFaceplateProps = {
	header: { itemId: "V002" },
	status: {
		statusItems: [
			{ label: "Status 1", status: true },
			{ label: "Status 2", status: false },
			{ label: "Status 3", status: true },
			{ label: "Status 1", status: true },
			{ label: "Status 2", status: false },
			{ label: "Status 3", status: true },
			{ label: "Status 1", status: true },
			{ label: "Status 2", status: false },
			{ label: "Status 3", status: true },
			{ label: "Status 1", status: true },
			{ label: "Status 2", status: false },
			{ label: "Status 3", status: true },
			{ label: "Status 1", status: true },
			{ label: "Status 2", status: false },
			{ label: "Status 3", status: true },
		],
	},
	control: {
		controlItem: {
			main: {
				label: "Main",
				auto: true,
				onActionPerformed__auto: () => console.log("Auto"),
				manual: false,
				onActionPerformed__manual: () => console.log("Manual"),
				off: false,
				onActionPerformed__off: () => console.log("Off"),
				on: false,
				onActionPerformed__on: () => console.log("On"),
			},
			upperSeat: {
				label: "Upper Seat",
				off: false,
				onActionPerformed__off: () => console.log("UpperSeat Off"),
				on: false,
				onActionPerformed__on: () => console.log("UpperSeat On"),
			},
			lowerSeat: {
				label: "Lower Seat",
				off: false,
				onActionPerformed__off: () => console.log("LowerSeat Off"),
				on: false,
				onActionPerformed__on: () => console.log("LowerSeat On"),
			},
		},
	},
	eventsEnabled: true,
};

// const ParamProps = {
// 	paramItem: {
// 		label: {
// 			text: "12345678901234567890",
// 			className: "label",
// 			tooltipText: "Tooltip text",
// 			tooltipPosition: "top",
// 			tooltipClassName: "tooltip-class",
// 			tooltipId: "tooltip-id",
// 		},
// 		input: {
// 			type: "text",
// 			inputmode: "numeric",
// 			placeholder: "Enter value",
// 			editable: false,
// 			pattern: "^[0-9]*[.,]?[0-9]*$",
// 			min: 0,
// 			max: 100,
// 			decimalPlaces: 2,
// 			eu: "°C",
// 			value: 0,
// 		},
// 	},
// };
const ParamListProps = {
	paramItemList: [
		{
			label: {
				text: "12345678901234567890",
				className: "label",
				tooltipText: "Tooltip text",
				tooltipPosition: "top",
				tooltipClassName: "tooltip-class",
				tooltipId: "tooltip-id",
			},
			input: {
				type: "text",
				inputmode: "numeric",
				placeholder: "Enter value",
				editable: false,
				pattern: "^[0-9]*[.,]?[0-9]*$",
				min: 0,
				max: 100,
				decimalPlaces: 2,
				eu: "°C",
				value: 0,
			},
		},
		{
			label: {
				text: "12345678901234567890",
				className: "label",
				tooltipText: "Tooltip text",
				tooltipPosition: "top",
				tooltipClassName: "tooltip-class",
				tooltipId: "tooltip-id",
			},
			input: {
				type: "text",
				inputmode: "numeric",
				placeholder: "Enter value",
				editable: false,
				pattern: "^[0-9]*[.,]?[0-9]*$",
				min: 0,
				max: 100,
				decimalPlaces: 2,
				eu: "°C",
				value: 0,
			},
		},
		{
			label: {
				text: "12345678901234567890",
				className: "label",
				tooltipText: "Tooltip text",
				tooltipPosition: "top",
				tooltipClassName: "tooltip-class",
				tooltipId: "tooltip-id",
			},
			input: {
				type: "text",
				inputmode: "numeric",
				placeholder: "Enter value",
				editable: false,
				pattern: "^[0-9]*[.,]?[0-9]*$",
				min: 0,
				max: 100,
				decimalPlaces: 2,
				eu: "°C",
				value: 0,
			},
		},
		{
			label: {
				text: "12345678901234567890",
				className: "label",
				tooltipText: "Tooltip text",
				tooltipPosition: "top",
				tooltipClassName: "tooltip-class",
				tooltipId: "tooltip-id",
			},
			input: {
				type: "text",
				inputmode: "numeric",
				placeholder: "Enter value",
				editable: false,
				pattern: "^[0-9]*[.,]?[0-9]*$",
				min: 0,
				max: 100,
				decimalPlaces: 2,
				eu: "°C",
				value: 0,
			},
		},
		{
			label: {
				text: "12345678901234567890",
				className: "label",
				tooltipText: "Tooltip text",
				tooltipPosition: "top",
				tooltipClassName: "tooltip-class",
				tooltipId: "tooltip-id",
			},
			input: {
				type: "text",
				inputmode: "numeric",
				placeholder: "Enter value",
				editable: false,
				pattern: "^[0-9]*[.,]?[0-9]*$",
				min: 0,
				max: 100,
				decimalPlaces: 2,
				eu: "°C",
				value: 0,
			},
		},
	],
};

const ValveFaceplate: React.FC<ValveFaceplateProps> = (props) => {
	// Deconstruct props
	const { header, status } = props;
	const { state, dispatch } = useControlContext();
	return (
		<div className="lif-valve-faceplate">
			<Header itemId={header?.itemId || "Unknown"} />
			<SwiperPanel>
				<Status statusItems={status?.statusItems || []} />
				<div>
					<ParamList {...ParamListProps} />
				</div>
				{/* <ExtdParams {...extdParamsProps} /> */}
			</SwiperPanel>

			<Control
				controlItem={props?.control?.controlItem || {}}
				state={state}
				dispatch={dispatch}
			/>
		</div>
	);
};

export default ValveFaceplate;
{
	/* <button className="lif-valve-faceplate__control__auto-1"onClick={onActionPerformed}>Perform Action</button> */
}

// <Status statusItems={[
// 	{ label: "Status 1", status: true },
// 	{ label: "Status 2", status: false },
// 	{ label: "Status 3", status: true },
// 	{ label: "Status 4", status: false },
// 	{ label: "Status 4", status: false },
// 	{ label: "Status 4", status: false },
// 	{ label: "Status 4", status: false },
// 	{ label: "Status 4", status: false },
// 	{ label: "Status 4", status: false },
// 	{ label: "Status 4", status: false },
// 	{ label: "Status 4", status: false },
// ]}/>
