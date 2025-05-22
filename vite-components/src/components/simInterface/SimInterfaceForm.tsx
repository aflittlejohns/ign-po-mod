import * as React from "react";
import { useEditDevEnvContext } from "../dev-env/DevEnvCompound";
import { useValveContext, ValveMpCompound } from "../valve-mp/ValveMp";
import ValveFaceplate from "../ValveFaceplate";
// import './sim-interface.module.css'

export interface FormElements extends HTMLFormControlsCollection {
	actConfig: HTMLInputElement;
	deActConfig: HTMLInputElement;
	actFB: HTMLInputElement;
	deActFB: HTMLInputElement;
	usl: HTMLInputElement;
	lsl: HTMLInputElement;
	manual: HTMLInputElement;
	alarm: HTMLInputElement;
	masked: HTMLInputElement;
	changing: HTMLInputElement;
	locate: HTMLInputElement;
}
export interface UsernameFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}

function SimInterfaceForm() {
	const { useReducer } = useEditDevEnvContext("SimInterfaceForm");
	const { state, reducer } = useReducer;
	const {
		updateAlarm,
		updateActConfig,
		updateDeActConfig,
		updateActFB,
		updateDeActFB,
		updateUsl,
		updateLsl,
		updateManual,
		updateChanging,
		updateMasked,
		updateLocate,
	} = reducer;
	const [actConfigState, updateActConfigState] = React.useState(
		state.activatedConfig
	);
	const [deActConfigState, updateDeActConfigState] = React.useState(
		state.activatedConfig
	);
	function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
		event.preventDefault();
		console.log(`form submit event`);
		const actConfigValue = event.currentTarget.elements.actConfig.value;
		const deActConfigValue = event.currentTarget.elements.deActConfig.value;
		updateActConfig(Number(actConfigValue));
		updateDeActConfig(Number(deActConfigValue));

		// updateActConfig()
	}
	// const handleOnActionPerformed = () => {
	// 	console.log("Valve onActionPerformed");
	// };

	const { draggables, closePopup } = useValveContext("sim-interface");
	return (
		<div className="sim-interface">
			<form className="sim-interface--form" onSubmit={handleSubmit}>
				<div className={"sim-interface--grid"}>
					<input
						style={{ gridArea: "actConfig" }}
						className="act-config"
						type="text"
						id="actConfig"
						name="actConfig"
						placeholder="Act Config"
						value={actConfigState}
						onChange={(e) => updateActConfigState(Number(e.target.value))}
					/>
					<input
						style={{ gridArea: "deActConfig" }}
						className="de-act-config"
						type="text"
						id="deActConfig"
						name="deActConfig"
						placeholder="De-act Config"
						value={deActConfigState}
						onChange={(e) => updateDeActConfigState(Number(e.target.value))}
					/>
					<label
						style={{ gridArea: "actFbLabel" }}
						className="act-fb label"
						htmlFor="actFB"
					>
						<input
							style={{ gridArea: "actFbCheckbox" }}
							className="act-fb checkbox"
							type="checkbox"
							id="actFB"
							name="actFB"
							checked={state.actFB}
							onChange={updateActFB}
						/>
						Act FB
					</label>
					<label
						style={{ gridArea: "deActFbLabel" }}
						className="de-act-fb label"
						htmlFor="deActFB"
					>
						<input
							style={{ gridArea: "deActFbCheckbox" }}
							className="de-act-fb checkbox"
							type="checkbox"
							id="deActFB"
							name="deActFB"
							checked={state.deActFB}
							onChange={updateDeActFB}
						/>
						DeAct FB
					</label>
					<label
						style={{ gridArea: "uslLabel" }}
						className="usl label"
						htmlFor="usl"
					>
						<input
							style={{ gridArea: "uslCheckbox" }}
							className="usl checkbox"
							type="checkbox"
							id="usl"
							name="usl"
							checked={state.usl}
							onChange={updateUsl}
						/>
						Upper Seat Lift Active
					</label>
					<label
						style={{ gridArea: "lslLabel" }}
						className="lsl label"
						htmlFor="lsl"
					>
						<input
							style={{ gridArea: "lslCheckbox" }}
							className="lsl checkbox"
							type="checkbox"
							id="lsl"
							name="lsl"
							checked={state.lsl}
							onChange={updateLsl}
						/>
						Lower Seat Lift Active
					</label>

					<label
						style={{ gridArea: "manualLabel" }}
						className="manual label"
						htmlFor="manual"
					>
						<input
							style={{ gridArea: "manualCheckbox" }}
							className="manual checkbox"
							type="checkbox"
							id="manual"
							name="manual"
							checked={state.manual}
							onChange={updateManual}
						/>
						Manual
					</label>
					<label
						style={{ gridArea: "alarmLabel" }}
						className="alarm label"
						htmlFor="alarm"
					>
						<input
							style={{ gridArea: "alarmCheckbox" }}
							className="alarm checkbox"
							type="checkbox"
							id="alarm"
							name="alarm"
							checked={state.alarm}
							onChange={updateAlarm}
						/>
						Alarm
					</label>
					<label
						style={{ gridArea: "maskedLabel" }}
						className="masked label"
						htmlFor="masked"
					>
						<input
							style={{ gridArea: "maskedCheckbox" }}
							className="masked checkbox"
							type="checkbox"
							id="masked"
							name="masked"
							checked={state.masked}
							onChange={updateMasked}
						/>
						Masked
					</label>
					<label
						style={{ gridArea: "changingLabel" }}
						className="changing label"
						htmlFor="changing"
					>
						<input
							style={{ gridArea: "changingCheckbox" }}
							className="changing checkbox"
							type="checkbox"
							id="changing"
							name="changing"
							checked={state.changing}
							onChange={updateChanging}
						/>
						Changing
					</label>
					<label
						style={{ gridArea: "locateLabel" }}
						className="locate label"
						htmlFor="locate"
					>
						<input
							style={{ gridArea: "locateCheckbox" }}
							className="locate checkbox"
							type="checkbox"
							id="locate"
							name="locate"
							checked={state.locate}
							onChange={updateLocate}
						/>
						Locate Item
					</label>
					<button
						style={{ gridArea: "submitButton" }}
						className="submit button"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>

			<ValveMpCompound.Root valveProps={{ ValveStatus: state }}>
				<ValveMpCompound.draggableContext>
					<ValveMpCompound.valve />
					{draggables.map((draggable) => (
						<ValveMpCompound.draggable
							id={draggable.id}
							className="draggable"
							left={draggable.left}
							top={draggable.top}
							key={draggable.id}
							onClose={closePopup}
						>
							<ValveFaceplate />
						</ValveMpCompound.draggable>
					))}
					;
				</ValveMpCompound.draggableContext>
			</ValveMpCompound.Root>
		</div>
	);
}
export default SimInterfaceForm;
