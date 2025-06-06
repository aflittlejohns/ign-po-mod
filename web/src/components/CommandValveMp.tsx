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

	// function areCommandsEqual(a: any, b: any): boolean {
	// 	// Compare all relevant leaf properties
	// 	return (
	// 		a.main.auto === b.main.auto &&
	// 		a.main.manual === b.main.manual &&
	// 		a.main.off === b.main.off &&
	// 		a.main.on === b.main.on &&
	// 		a.upperSeat.off === b.upperSeat.off &&
	// 		a.upperSeat.on === b.upperSeat.on &&
	// 		a.lowerSeat.off === b.lowerSeat.off &&
	// 		a.lowerSeat.on === b.lowerSeat.on
	// 		// Add more as needed
	// 	);
	// }

		useEffect(() => {
			if (!props.props.command) return;

			// Write each property that is out of sync
			if (main && main.auto !== props.props?.command?.main?.auto) {
				props.store.props.write("command.main.auto", main.auto);
			}
			if (main && main.manual !== props.props?.command?.main?.manual) {
				props.store.props.write("command.main.manual", main.manual );
			}
			if (main && main.off !== props.props?.command?.main?.off) {
				props.store.props.write("command.main.off", main.off );
			}
			if (main && main.on !== props.props?.command?.main?.on) {
				props.store.props.write("command.main.on", main.on );
			}
			// Repeat for upperSeat and lowerSeat...
			// (Add similar checks for upperSeat and lowerSeat properties)
		}, [
			main?.auto,
			main?.manual,
			main?.off,
			main?.on,
			upperSeat?.off,
			upperSeat?.on,
			lowerSeat?.off,
			lowerSeat?.on,
			props.props.command,
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
						userRoles: tree.read("command.security.userRoles", [
							"Administrator",
						]),
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
