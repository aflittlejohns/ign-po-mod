/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { type CommandValveMpProps } from "../api/types";
// import { IconAuto, IconHandClick } from '../utils/icons';
import { PropertyTree } from "@inductiveautomation/perspective-client";
import type {
	ComponentProps,
	ComponentMeta,
	PComponent,
	SizeObject,
} from "@inductiveautomation/perspective-client"; //'@inductiveautomation/perspective-client';
// import { initialControlState } from "../api/initialState";
import { useValveMpCommandReducer } from "../api/hooks";

export const COMPONENT_TYPE = "hmi.input.CommandValveMp";

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export const CommandValveMp = (props: ComponentProps<CommandValveMpProps>) => {
	const tree = props.store.props
// 1. Create local state for command
 const [localCommand, setLocalCommand] = React.useState(props.props.command);
  // 2. Sync local state with props.props.command on mount (and when it changes)
  React.useEffect(() => {
    setLocalCommand(props.props.command);
  }, [props.props.command]);

	const { reducer } = useValveMpCommandReducer();

	const { main , upperSeat, lowerSeat, interlocks} = localCommand;
	const { updateAutoManSelection,
		updateMainManualOn,
		updateMainManualOff,
		updateUslManualOn,
		updateUslManualOff,
		updateLslManualOn,
		updateLslManualOff,
	 } =
		reducer;

	const isInterlocked = (interlocks: boolean[]):boolean => {
		return interlocks.includes(true,0)
	}

	const handleMainAutoManualSelection = (mode: "auto" | "manual"): void => {
		updateAutoManSelection(mode);
		if (mode === "manual") {
			tree.write("command.main.auto", false);
			tree.write("command.main.manual", true);

		} else if (mode === "auto") {
			handleMainManualOff(); // When in Auto switch to manualOff to true
			tree.write("command.main.auto", true);
			tree.write("command.main.manual", false);
		}
	};

	const handleMainManualOn = () => {
		updateMainManualOn();
		tree.write("command.main.on", true);
		tree.write("command.main.off", false);
	}
	const handleMainManualOff = () => {
		updateMainManualOff();
		tree.write("command.main.off", true);
		tree.write("command.main.on", false);
	}
	const handleUslManualOn = () => {
		updateUslManualOn();
		tree.write("command.upperSeat.on", true);
		tree.write("command.upperSeat.off", false);
	}
	const handleUslManualOff = () => {
		updateUslManualOff();
		tree.write("command.upperSeat.off", true);
		tree.write("command.upperSeat.on", false);
	}
	const handleLslManualOn = () => {
		updateLslManualOn();
		tree.write("command.lowerSeat.on", true);
		tree.write("command.lowerSeat.off", false);
	}
	const handleLslManualOff = () => {
		updateLslManualOff();
		tree.write("command.lowerSeat.off", true);
		tree.write("command.lowerSeat.on", false);
	}


	return (
		<div className="hmi-component-command-valve-mp hmi-component-command-valve-mp__grid">
			<label className="main-label">{main?.label}</label>
			<div role="group" className="button-group outlined main-auto-manual">
				<button
					className={`button outlined ${main?.auto ? "selected" : ""}`}
					disabled={isInterlocked(interlocks?.main || [])}
					onClick={() => handleMainAutoManualSelection("auto")}
					>
					Auto {/* <IconAuto /> */}
				</button>
				<button
					className={`button outlined ${main?.manual ? "selected" : ""}`}
					disabled={
						isInterlocked(interlocks?.main || [])
					}
					onClick={() => handleMainAutoManualSelection("manual")}
					>
					Manual
					{/* <IconHandClick /> */}
				</button>
			</div>
			<div role="group" className="button-group outlined main-on-off">
				<button
					className={`button outlined ${main?.on ? "selected" : ""}`}
					disabled={
						isInterlocked(interlocks?.main || []) ||
						main?.auto
					}
					onClick={handleMainManualOn}
					>
					On {/* <IconAuto /> */}
				</button>
				<button
					className={`button outlined ${main?.off ? "selected" : ""}`}
					disabled={
						isInterlocked(interlocks?.main || []) ||
						main?.auto
					}
					onClick={handleMainManualOff}
					>
					Off
					{/* <IconHandClick /> */}
				</button>
			</div>
			<label className="upper-seat-label">{upperSeat?.label}</label>
			<div role="group" className="button-group outlined upper-seat-on-off">
				<button
					className={`button outlined ${upperSeat?.on ? "selected" : ""}`}
					disabled={
						isInterlocked(interlocks?.upperSeat || []) ||
						main?.auto
					}
					onClick={handleUslManualOn}
					>
					On {/* <IconAuto /> */}
				</button>
				<button
					className={`button outlined ${upperSeat?.off ? "selected" : ""}`}
					disabled={
						isInterlocked(interlocks?.upperSeat || []) ||
						main?.auto
					}
					onClick={handleUslManualOff}
					>
					Off
					{/* <IconHandClick /> */}
				</button>
			</div>
			<label className="lower-seat-label">{lowerSeat?.label}</label>
			<div role="group" className="button-group outlined lower-seat-on-off">
				<button
					className={`button outlined ${lowerSeat?.on ? "selected" : ""}`}
					disabled={
						isInterlocked(interlocks?.lowerSeat || []) ||
						main?.auto
					}
					onClick={handleLslManualOn}
					>
					On {/* <IconAuto /> */}
				</button>
				<button
					className={`button outlined ${lowerSeat?.off ? "selected" : ""}`}
					disabled={
						isInterlocked(interlocks?.lowerSeat || []) ||
						main?.auto
					}
					onClick={handleLslManualOff}
					value={"true"}
				>
					Off
					{/* <IconHandClick /> */}
				</button>
			</div>
		</div>
	);
};

// This is the actual thing that gets registered with the component registry.
export class CommandValveMpMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	/**
	 * @returns The React component class.
	 */
	getViewComponent(): PComponent {
		return CommandValveMp as unknown as PComponent;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 24,
			height: 48,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): CommandValveMpProps {
		return {
			command:{
				security: {
					enabled: tree.readBoolean("command.security.enabled", false),
					accesslevel: tree.readNumber("command.security.accesslevel", 511),
					userNames: tree.read("command.security.userNames", ["admin"]),
					userRoles: tree.read("command.security.userRoles", ["Administrator"]),
				},
				interlocks: {
					main: tree.readArray("command.interlocks.main"),
					upperSeat: tree.readArray("command.interlocks.upperSeat"),
					lowerSeat: tree.readArray("command.interlocks.lowerSeat"),
				},
				main: {
					label: tree.readString("commands.main.label", ""),
					auto: tree.readBoolean("command.main.auto", true),
					manual: tree.readBoolean("command.main.manual", false),
					off: tree.readBoolean("command.main.off",true),
					on: tree.readBoolean("command.main.on",false),
				},
				upperSeat: {
					label: tree.readString("commands.upperSeat.label", ""),
					off: tree.readBoolean("command.upperSeat.off",true),
					on: tree.readBoolean("command.upperSeat.on",false),
				},
				lowerSeat:{
					label: tree.readString("commands.lowerSeat.label", ""),
					off: tree.readBoolean("command.lowerSeat.off",true),
					on: tree.readBoolean("command.lowerSeat.on",false),

				},
			}
		};
	}
}
