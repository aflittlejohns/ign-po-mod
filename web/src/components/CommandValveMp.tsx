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
import { useEffect } from "react";
import { useValveMpCommandReducer } from "../api/hooks";
import {
	HMI_COMPONENT_CLASS,
	IA_SYMBOL_COMPONENT_COLUMN,
	IA_SYMBOL_COMPONENT_ROW,
	IA_SYMBOL_COMPONENT_WRAPPER,
	COMMAND_VALVE_MP_COMPONENT_TYPE,
} from "../constants";

export const COMPONENT_TYPE = COMMAND_VALVE_MP_COMPONENT_TYPE;

const areEqual = (
	prevProps: ComponentProps<CommandValveMpProps>,
	nextProps: ComponentProps<CommandValveMpProps>
) => {
	// return true if props are equal, false if re-render is needed
	return prevProps.props === nextProps.props;
};

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.

 */
export const CommandValveMp = React.memo(
	(props: ComponentProps<CommandValveMpProps>) => {
		const { state, reducer } = useValveMpCommandReducer();
		const { emit } = props;

		useEffect(() => {
			// Subscribe to changes on the "command" property
			const unsubscribe = props.store.props.subscribe((tree: PropertyTree) => {
				// This function is called whenever "command" changes
				const command = tree.read("command");
				const { main, upperSeat, lowerSeat } = command;
				// You can update local state or perform other actions here
				// Update main state if needed
				if (state.command?.main && main) {
					if (main.autoManual !== state.command.main.autoManual) {
						reducer.updateAutoManSelection(
							!main.autoManual ? "auto" : "manual"
						);
					}
					if (main.activation !== state.command.main.activation) {
						if (!main.activation) {
							reducer.updateMainManualOff();
						} else if (main.activation) {
							reducer.updateMainManualOn();
						}
					}
				}

				// Update lowerSeat state if needed
				if (state.command?.lowerSeat && lowerSeat) {
					if (lowerSeat.activation !== state.command.lowerSeat.activation) {
						if (!lowerSeat.activation) {
							reducer.updateLslManualOff();
						} else if (lowerSeat.activation) {
							reducer.updateLslManualOn();
						}
					}
				}
				// Update upperSeat state if needed
				if (state.command?.upperSeat && upperSeat) {
					if (upperSeat.activation !== state.command.upperSeat.activation) {
						if (!upperSeat.activation) {
							reducer.updateUslManualOff();
						} else if (upperSeat.activation) {
							reducer.updateUslManualOn();
						}
					}
				}
			});

			// Cleanup subscription on unmount
			return () => {
				if (typeof unsubscribe === "function") {
					unsubscribe();
				}
			};
		}, [props.store.props]);

		const { main, upperSeat, lowerSeat, interlocks } = state.command || {};

		const isInterlocked = (interlocks: boolean[]): boolean => {
			return interlocks.includes(true, 0);
		};

		const handleMainAutoManualSelection = (mode: "auto" | "manual"): void => {
			reducer.updateAutoManSelection(mode);
			if (mode === "auto") {
				props.store.props?.write("command.main.autoManual", false); // false = auto
			} else if (mode === "manual") {
				props.store.props?.write("command.main.autoManual", true); // true = manual
			}
		};

		const handleMainManualOn = () => {
			reducer.updateMainManualOn();
			props.store.props?.write("command.main.activation", true);
		};
		const handleMainManualOff = () => {
			reducer.updateMainManualOff();
			props.store.props?.write("command.main.activation", false);
		};
		const handleUslManualOn = () => {
			reducer.updateUslManualOn();
			props.store.props?.write("command.upperSeat.activation", true);
		};
		const handleUslManualOff = () => {
			reducer.updateUslManualOff();
			props.store.props?.write("command.upperSeat.activation", false);
		};
		const handleLslManualOn = () => {
			reducer.updateLslManualOn();
			props.store.props?.write("command.lowerSeat.activation", true);
		};
		const handleLslManualOff = () => {
			reducer.updateLslManualOff();
			props.store.props?.write("command.lowerSeat.activation", false);
		};
		const componentClassName = "command-valve-mp hmi-command-valve-mp__grid";
		return (
			<div
				{...emit({
					classes: [`${IA_SYMBOL_COMPONENT_COLUMN}`],
				})}
				data-component={COMPONENT_TYPE}
			>
				<div className={`${IA_SYMBOL_COMPONENT_ROW}`}>
					<div className={`${IA_SYMBOL_COMPONENT_WRAPPER}`}>
						<div className={`${HMI_COMPONENT_CLASS}-${componentClassName}`}>
							<label className="main-label">{main?.label}</label>
							<div
								role="group"
								className="button-group outlined main-auto-manual"
							>
								<button
									className={`button outlined ${
										!main?.autoManual ? "selected" : ""
									}`}
									disabled={isInterlocked(interlocks?.main || [])}
									onClick={() => handleMainAutoManualSelection("auto")}
								>
									Auto {/* <IconAuto /> */}
								</button>
								<button
									className={`button outlined ${
										main?.autoManual ? "selected" : ""
									}`}
									disabled={isInterlocked(interlocks?.main || [])}
									onClick={() => handleMainAutoManualSelection("manual")}
								>
									Manual
									{/* <IconHandClick /> */}
								</button>
							</div>
							<div role="group" className="button-group outlined main-on-off">
								<button
									className={`button outlined ${
										main?.activation ? "selected" : ""
									}`}
									disabled={
										isInterlocked(interlocks?.main || []) || !main?.autoManual
									}
									onClick={handleMainManualOn}
								>
									On {/* <IconAuto /> */}
								</button>
								<button
									className={`button outlined ${
										!main?.activation ? "selected" : ""
									}`}
									disabled={
										isInterlocked(interlocks?.main || []) || !main?.autoManual
									}
									onClick={handleMainManualOff}
								>
									Off
									{/* <IconHandClick /> */}
								</button>
							</div>
							<label className="upper-seat-label">{upperSeat?.label}</label>
							<div
								role="group"
								className="button-group outlined upper-seat-on-off"
							>
								<button
									className={`button outlined ${
										upperSeat?.activation ? "selected" : ""
									}`}
									disabled={
										isInterlocked(interlocks?.upperSeat || []) ||
										!main?.autoManual
									}
									onClick={handleUslManualOn}
								>
									On {/* <IconAuto /> */}
								</button>
								<button
									className={`button outlined ${
										!upperSeat?.activation ? "selected" : ""
									}`}
									disabled={
										isInterlocked(interlocks?.upperSeat || []) ||
										!main?.autoManual
									}
									onClick={handleUslManualOff}
								>
									Off
									{/* <IconHandClick /> */}
								</button>
							</div>
							<label className="lower-seat-label">{lowerSeat?.label}</label>
							<div
								role="group"
								className="button-group outlined lower-seat-on-off"
							>
								<button
									className={`button outlined ${
										lowerSeat?.activation ? "selected" : ""
									}`}
									disabled={
										isInterlocked(interlocks?.lowerSeat || []) ||
										!main?.autoManual
									}
									onClick={handleLslManualOn}
								>
									On {/* <IconAuto /> */}
								</button>
								<button
									className={`button outlined ${
										!lowerSeat?.activation ? "selected" : ""
									}`}
									disabled={
										isInterlocked(interlocks?.lowerSeat || []) ||
										!main?.autoManual
									}
									onClick={handleLslManualOff}
									value={"true"}
								>
									Off
									{/* <IconHandClick /> */}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
	areEqual
);

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
			width: 280,
			height: 140,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): CommandValveMpProps {
		return {
			command: {
				interlocks: {
					main: tree.readArray("command.interlocks.main"),
					upperSeat: tree.readArray("command.interlocks.upperSeat"),
					lowerSeat: tree.readArray("command.interlocks.lowerSeat"),
				},
				main: {
					label: tree.readString("commands.main.label", ""),
					autoManual: tree.readBoolean("command.main.autoManual", false),
					activation: tree.readBoolean("command.main.activation", false),
				},
				upperSeat: {
					label: tree.readString("commands.upperSeat.label", ""),
					activation: tree.readBoolean("command.upperSeat.activation", false),
				},
				lowerSeat: {
					label: tree.readString("commands.lowerSeat.label", ""),
					activation: tree.readBoolean("command.lowerSeat.activation", false),
				},
			},
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
