import React, { SetStateAction, use, useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import {
	IconAutomation,
	IconHandClick,
	IconCapsule,
	IconCapsuleFilled,
} from "../utils/icons";
import { ControlProps } from "./types/control";
import { useControlContext, ControlContextProps} from "./stores/ControlContext";
import { Commands_LowerSeat, Commands_OnOff, Commands_Selections_Auto_Manual, Commands_UpperSeat, isCommandsLowerSeat, isCommandsOnOff, isCommandsSelections, isCommandsUpperSeat } from "./types/commands";

const Control: React.FC<ControlProps & ControlContextProps> = ({
 controlItem
}): React.ReactElement => {
	// Deconstruct the controlItem object

	const {state, dispatch} = useControlContext();

	const [selection, setSelection] = React.useState<Commands_Selections_Auto_Manual>({type: "AUTO", payload: {target: "main"}});

	const handleSelection = (
		event: React.MouseEvent<HTMLElement>,
		newSelection: string | null
	) => {

		if (newSelection !== null) {
			if (isCommandsSelections(newSelection)) {
			setSelection({type:newSelection, payload: {target: "main"}});
			dispatch({type: newSelection, payload: {target: "main"}});
			// If AUTO is selected, turn off all solenoids
			if (newSelection === "AUTO") {
				dispatch({type: "OFF", payload: {target: "main"}});
				handleOnOff((event), "OFF");
				dispatch({type: "OFF", payload: {target: "upperSeat"}});
				handleUpperSeatOnOff((event), "OFF");
				dispatch({type: "OFF", payload: {target: "lowerSeat"}});
				handleLowerSeatOnOff((event), "OFF");
			}
		}}
	};

	const [onOff, setOnOff] = React.useState<Commands_OnOff>({type: "OFF", payload: {target: "main"}});
	const handleOnOff = (
		event: React.MouseEvent<HTMLElement>,
		newOnOff: string
	) => {
		if (newOnOff !== null) {
			if (isCommandsOnOff(newOnOff)) {
			setOnOff({type:newOnOff, payload: {target: "main"}});
			dispatch({type: newOnOff, payload: {target: "main"}});
		}}
	};
	const [upperSeatOnOff, setUpperSeatOnOff] = React.useState<Commands_UpperSeat>({type: "OFF", payload: {target: "upperSeat"}});
	const handleUpperSeatOnOff = (
		event: React.MouseEvent<HTMLElement>,
		newOnOff: string
	) => {
		if (newOnOff !== null) {
			if (isCommandsUpperSeat(newOnOff)) {
			setUpperSeatOnOff({type:newOnOff, payload: {target: "upperSeat"}});
			dispatch({type: newOnOff, payload: {target: "upperSeat"}});
			}}
	};
	const [lowerSeatOnOff, setLowerSeatOnOff] = React.useState<Commands_LowerSeat>({type: "OFF", payload: {target: "lowerSeat"}});
	const handleLowerSeatOnOff = (
		event: React.MouseEvent<HTMLElement>,
		newOnOff: string
	) => {
		if (newOnOff !== null) {
			if (isCommandsLowerSeat(newOnOff)) {
			setLowerSeatOnOff({type:newOnOff, payload: {target: "lowerSeat"}});
			dispatch({type: newOnOff, payload: {target: "lowerSeat"}});
		}}
	};
	console.log(state ,selection, onOff, upperSeatOnOff, lowerSeatOnOff);
	return (
		//Grid Container
		<div className="lif-valve-faceplate__control">
			{/* Main */}
			<div className="lif-valve-faceplate__control__main">
			<div className="lif-valve-faceplate__control__main--label">
				{/* Main Label */}
				{controlItem.main?.label}
			</div>
			{/* Auto */}
			{/* Button security & interlock inhibit */}
			{/* {controlItem.main.auto && ( */}
			<ToggleButtonGroup
				// disabled={controlItem.security?.accesslevel === 0 || controlItem.interlocks?.main}
				aria-label="Control of Main solenoid"
				exclusive
				value={selection.type}
				onChange={handleSelection}
				className="lif-valve-faceplate__control__main--auto-manual-group"
				>
				<ToggleButton
					className="lif-valve-faceplate__control__main--auto"
					size="small"
					color="primary"
					aria-label="automation"
					onClick={controlItem.main?.onActionPerformed__auto}
					value="AUTO"
				>
					<IconAutomation />
				</ToggleButton>
				<ToggleButton
					className="lif-valve-faceplate__control__main--manual"
					size="small"
					color="primary"
					aria-label="automation"
					onClick={controlItem.main?.onActionPerformed__manual}
					value="MANUAL"
				>
					<IconHandClick />
				</ToggleButton>
			</ToggleButtonGroup>
			{/* Manual On Off selection of Main solenoid */}
			<ToggleButtonGroup
				// Disable if not in manual mode
				disabled={ selection.type !== "MANUAL"}
				aria-label="Manual On Off selection of Main solenoid"
				exclusive
				value={onOff}
				onChange={handleOnOff}
				className="lif-valve-faceplate__control__main--off-on-group"
			>
				<ToggleButton
					className="lif-valve-faceplate__control__main--off"
					size="small"
					color="primary"
					aria-label="automation"
					selected={onOff.type === "OFF" && selection.type === "MANUAL"}
					onClick={controlItem.main?.onActionPerformed__off}
					value="OFF"
				>
					<IconCapsule />
				</ToggleButton>
				<ToggleButton
					className="lif-valve-faceplate__control__main--on"
					size="small"
					color="primary"
					aria-label="automation"
					selected={onOff.type === "ON" && selection.type === "MANUAL"}
					onClick={controlItem.main?.onActionPerformed__on}
					value="ON"
				>
					<IconCapsuleFilled />
				</ToggleButton>
			</ToggleButtonGroup>
			</div>
			{/* )} */}

			{/* Upper Seat */}
			<div className="lif-valve-faceplate__control__upper-seat">
				<div className="lif-valve-faceplate__control__upper-seat--label">
					{/* Upper-seat Label */}
					{controlItem.upperSeat?.label}
				</div>
				<ToggleButtonGroup
					// Disable if not in manual mode
					disabled={selection.type !== "MANUAL"}
					className="lif-valve-faceplate__control__upper-seat--off-on-group"
					aria-label="Manual On Off selection of SV2 (UpperSeat- Lift) solenoid"
					exclusive
					value={upperSeatOnOff}
					onChange={handleUpperSeatOnOff}
				>
					<ToggleButton
						className="lif-valve-faceplate__control__upper-seat--off"
						size="small"
						color="primary"
						aria-label="upper seat manual off"
						selected={upperSeatOnOff.type === "OFF" && selection.type === "MANUAL"}
						onClick={controlItem.upperSeat?.onActionPerformed__off}
						value="OFF"
					>
						<IconCapsule />
					</ToggleButton>
					<ToggleButton
						className="lif-valve-faceplate__control__upper-seat--on"
						size="small"
						color="primary"
						aria-label="upper seat manual on"
						selected={upperSeatOnOff.type === "ON" && selection.type === "MANUAL"}
						onClick={controlItem.upperSeat?.onActionPerformed__on}
						value="ON"
					>
						<IconCapsuleFilled />
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
			{/* Lower Seat */}
			<div className="lif-valve-faceplate__control__lower-seat">
				<div className="lif-valve-faceplate__control__lower-seat--label">
					{/* Lower seat Label */}
					{controlItem.lowerSeat?.label}
				</div>
				<ToggleButtonGroup
					// Disable if not in manual mode
					disabled={selection.type !== "MANUAL"}
					className="lif-valve-faceplate__control__lower-seat--off-on-group"
					aria-label="Manual On Off selection of Main solenoid"
					exclusive
					value={lowerSeatOnOff}
					onChange={handleLowerSeatOnOff}
				>
					<ToggleButton
						className="lif-valve-faceplate__control__lower-seat--off"
						size="small"
						color="primary"
						aria-label="automation"
						selected={lowerSeatOnOff.type === "OFF" && selection.type === "MANUAL"}
						onClick={controlItem.lowerSeat?.onActionPerformed__off}
						value="OFF"
					>
						<IconCapsule />
					</ToggleButton>
					<ToggleButton
						className="lif-valve-faceplate__control__lower-seat--on"
						size="small"
						color="primary"
						aria-label="automation"
						selected={lowerSeatOnOff.type === "ON" && selection.type === "MANUAL"}
						onClick={controlItem.lowerSeat?.onActionPerformed__on}
						value="ON"
					>
						<IconCapsuleFilled />
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</div>
	);
};
Control.displayName = "Control";
export default Control;
