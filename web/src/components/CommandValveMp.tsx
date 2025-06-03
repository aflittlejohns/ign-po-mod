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
import { useValveMpCommandReducer } from "../api/hooks";

// import { valveProps } from "./process-objects/valve/initialState";
// import { ValveFCCompound } from "./process-objects/valve/ValveFC";

export const COMPONENT_TYPE = "hmi.input.CommandValveMp";

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export const CommandValveMp = (props: ComponentProps<CommandValveMpProps>) => {
	const tree = props.store.props;

	const handleMainAutoManualSelection = (mode: "auto" | "manual"): void => {
		updateAutoManSelection(mode);
		if (mode === "manual") {
			tree.write("main.auto", false);
			tree.write("main.manual", true);
		} else if (mode === "auto") {
			handleMainManualOff(); // When in Auto switch to manualOff to true
			tree.write("main.auto", true);
			tree.write("main.manual", false);
		}
	};

	const handleMainManualOn = () => {
		updateMainManualOn();
		tree.write("main.on", true);
		tree.write("main.off", false);
	}
	const handleMainManualOff = () => {
		updateMainManualOff();
		tree.write("main.off", true);
		tree.write("main.on", false);
	}


	const { reducer, state } = useValveMpCommandReducer();
	const { main } = state;
	const { updateAutoManSelection, updateMainManualOn, updateMainManualOff } =
		reducer;
	return (
		<div className="hmi-component-command-valve-mp hmi-component-command-valve-mp__grid">
			<label className="main-label">{main?.label}</label>
			<div role="group" className="button-group outlined main-auto-manual">
				<button
					className="button outlined selected"
					disabled={false}
					onClick={() => handleMainAutoManualSelection("auto")}
				>
					Auto {/* <IconAuto /> */}
				</button>
				<button
					className="button outlined"
					disabled={false}
					onClick={() => handleMainAutoManualSelection("manual")}
				>
					Manual
					{/* <IconHandClick /> */}
				</button>
			</div>
			<div role="group" className="button-group outlined main-on-off">
				<button
					className="button outlined"
					disabled={false}
					onClick={handleMainManualOn}
				>
					On {/* <IconAuto /> */}
				</button>
				<button
					className="button outlined"
					disabled={false}
					onClick={handleMainManualOff}
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
		return CommandValveMp;
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
			security: {
				enabled: tree.readBoolean("security.enabled", false),
				accesslevel: tree.readNumber("security.accesslevel", 511),
				userNames: tree.read("security.userNames", ["admin"]),
				userRoles: tree.read("security.userRoles", ["Administrator"]),
			},
			interlocks: {
				main: tree.readArray("interlocks.main"),
				upperSeat: tree.readArray("interlocks.upperSeat"),
				lowerSeat: tree.readArray("interlocks.lowerSeat"),
			},
			main: tree.read("main", {
				label: "",
				auto: true,
				manual: false,
				off: true,
				on: false,
			}),
			upperSeat: tree.read("upperSeat", {
				label: "",
				off: true,
				on: false,
			}),
			lowerSeat: tree.read("lowerSeat", {
				label: "",
				off: true,
				on: false,
			}),
		};
	}
}
