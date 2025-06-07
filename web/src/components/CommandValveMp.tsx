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
	PlainObject,
} from "@inductiveautomation/perspective-client"; //'@inductiveautomation/perspective-client';
// import { initialControlState } from "../api/initialState";
import { useEffect } from "react";
import { useValveMpCommandReducer } from "../api/hooks";

export const COMPONENT_TYPE = "hmi.input.CommandValveMp";

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export const CommandValveMp = (props: ComponentProps<CommandValveMpProps>) => {
	const { state, reducer } = useValveMpCommandReducer();
	const { main, upperSeat, lowerSeat, interlocks } = state.command || {};
	/**
	 * Syncs specified keys from newValues to the property tree if they differ from oldValues.
	 * @param prefix - The property path prefix (e.g., "command.main")
	 * @param keys - The keys to check and sync
	 * @param newValues - The new state values
	 * @param oldValues - The old property tree values
	 * @param writeFn - Function to write to the property tree
	 */
	function resolver<T extends Record<string, any>>(
		prefix: string,
		keys: Array<keyof T>,
		newValues: T,
		oldValues: T
	): void {
		if (!newValues || !oldValues) return;
		keys.forEach((key) => {
			console.log(`Prefix: "${prefix}.${String(key)}" oldValue: ${oldValues[key]} newValues: ${newValues[key]}`)
			if (newValues[key] !== oldValues[key]) {
				props.store.props.write(`${prefix}.${String(key)}`, newValues[key]);
			}
		});
	}
	useEffect(() => {
		//onMount update state from props
		if (props.props.command) {
			const { lowerSeat, upperSeat, main } = props.props.command;
			if (state.command?.main && main) {
				if (main.auto && !main.auto === state.command.main.auto) {
					reducer.updateAutoManSelection("auto");
				} else if (!main.manual === state.command.main.manual) {
					reducer.updateAutoManSelection("manual");
				}
				if (main.off && !main.off === state.command.main.off) {
					reducer.updateMainManualOff();
				} else if (!main.on === state.command.main.on) {
					reducer.updateMainManualOn();
				}
			}
			if (state.command?.lowerSeat && lowerSeat) {
				if (lowerSeat.off && !lowerSeat.off === state.command.lowerSeat.off) {
					reducer.updateLslManualOff();
				} else if (!lowerSeat.on === state.command.lowerSeat.on) {
					reducer.updateLslManualOn();
				}
			}
			if (state.command?.upperSeat && upperSeat) {
				if (upperSeat.off && !upperSeat.off === state.command.upperSeat.off) {
					reducer.updateUslManualOff();
				} else if (!upperSeat.on === state.command.upperSeat.on) {
					reducer.updateUslManualOn();
				}
			}
		}
	}, []);

	// Keep props.props in-sync with react state
	useEffect(() => {
		console.log(props.store.props.diagnosticId)
		try {
			if (main && props.props.command?.main) {
				resolver(
					"command.main",
					["auto", "manual", "off", "on"],
					main,
					props.props.command.main
				);
			}
		} catch (e) {
			console.log(e);
		}
		if (lowerSeat && props.props.command?.lowerSeat) {
			resolver(
				"command.lowerSeat",
				["off", "on"],
				lowerSeat,
				props.props.command.lowerSeat
			);
		}
		if (upperSeat && props.props.command?.upperSeat) {
			resolver(
				"command.upperSeat",
				["off", "on"],
				upperSeat,
				props.props.command.upperSeat
			);
		}
	}, [
		state.command?.main,
		props.props.command?.main,
		state.command?.lowerSeat,
		props.props.command?.lowerSeat,
		state.command?.upperSeat,
		props.props.command?.upperSeat,
	]);

	// ...rest of your component

	const isInterlocked = (interlocks: boolean[]): boolean => {
		return interlocks.includes(true, 0);
	};

	const handleMainAutoManualSelection = (mode: "auto" | "manual"): void => {
		reducer.updateAutoManSelection(mode);
	};

	const handleMainManualOn = () => {
		reducer.updateMainManualOn();
	};
	const handleMainManualOff = () => {
		reducer.updateMainManualOff();
	};
	const handleUslManualOn = () => {
		reducer.updateUslManualOn();
	};
	const handleUslManualOff = () => {
		reducer.updateUslManualOff();
	};
	const handleLslManualOn = () => {
		reducer.updateLslManualOn();
	};
	const handleLslManualOff = () => {
		reducer.updateLslManualOff();
	};

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
					disabled={isInterlocked(interlocks?.main || [])}
					onClick={() => handleMainAutoManualSelection("manual")}
				>
					Manual
					{/* <IconHandClick /> */}
				</button>
			</div>
			<div role="group" className="button-group outlined main-on-off">
				<button
					className={`button outlined ${main?.on ? "selected" : ""}`}
					disabled={isInterlocked(interlocks?.main || []) || main?.auto}
					onClick={handleMainManualOn}
				>
					On {/* <IconAuto /> */}
				</button>
				<button
					className={`button outlined ${main?.off ? "selected" : ""}`}
					disabled={isInterlocked(interlocks?.main || []) || main?.auto}
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
					disabled={isInterlocked(interlocks?.upperSeat || []) || main?.auto}
					onClick={handleUslManualOn}
				>
					On {/* <IconAuto /> */}
				</button>
				<button
					className={`button outlined ${upperSeat?.off ? "selected" : ""}`}
					disabled={isInterlocked(interlocks?.upperSeat || []) || main?.auto}
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
					disabled={isInterlocked(interlocks?.lowerSeat || []) || main?.auto}
					onClick={handleLslManualOn}
				>
					On {/* <IconAuto /> */}
				</button>
				<button
					className={`button outlined ${lowerSeat?.off ? "selected" : ""}`}
					disabled={isInterlocked(interlocks?.lowerSeat || []) || main?.auto}
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
			command: {
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
					off: tree.readBoolean("command.main.off", true),
					on: tree.readBoolean("command.main.on", false),
				},
				upperSeat: {
					label: tree.readString("commands.upperSeat.label", ""),
					off: tree.readBoolean("command.upperSeat.off", true),
					on: tree.readBoolean("command.upperSeat.on", false),
				},
				lowerSeat: {
					label: tree.readString("commands.lowerSeat.label", ""),
					off: tree.readBoolean("command.lowerSeat.off", true),
					on: tree.readBoolean("command.lowerSeat.on", false),
				},
			},
			writeData: (path: string, newJson: PlainObject) =>
				tree.write(path, newJson),
		};
	}
}

/**
 *
getPropsReducer(tree: PropertyTree): MyPropType {
    return {
        // will give the property tree as a plain js object, instead of an instance of PropertyTree
        // this would let you read the value of the tree via `this.props.props.json`.  Same result occurs if
        // calling tree.read(), without passing a path parameter.
       json: tree.toPlainObject()


       // If you had to write to the tree's 'data' node, passing in a callback function instead of the actual
       // PropertyTree will simplify unit testability of your component outside of perspective's environment.
       // You would call this via this.props.props.writeData(someNewData)
       writeData: (newJson) -> tree.write("data", newJson)
    }
}
 */
