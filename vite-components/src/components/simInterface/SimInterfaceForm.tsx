import * as React from "react";

export interface FormElements extends HTMLFormControlsCollection {
	actConfig: HTMLInputElement;
	deActConfig: HTMLInputElement;
	actFB: HTMLInputElement;
	deActFB: HTMLInputElement;
	manual: HTMLInputElement;
	alarm: HTMLInputElement;
	masked: HTMLInputElement;
	changing: HTMLInputElement;
}
export interface UsernameFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}
function SimInterfaceForm({
	onSubmit,
}: {
	onSubmit: (event: React.FormEvent<UsernameFormElement>) => void;
}) {
	function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
		event.preventDefault();

		onSubmit(event);
	}

	return (
		<form className="sim-interface" onSubmit={handleSubmit}>
			<div className={'sim-interface--grid'}

			>
				<input
					style={{ gridArea: "actConfig" }}
					className="act-config"
					type="text"
					id="actConfig"
					name="actConfig"
					placeholder="Act Config"
				/>
				<input
					style={{ gridArea: "deActConfig" }}
					className="de-act-config"
					type="text"
					id="deActConfig"
					name="deActConfig"
					placeholder="De-act Config"
				/>
				<label
					style={{ gridArea: "actFbLabel" }}
					className="act-fb label"
					htmlFor="actFB"
				>
					Act FB
				<input
					style={{ gridArea: "actFbCheckbox" }}
					className="act-fb checkbox"
					type="checkbox"
					id="actFB"
					name="actFB"
					/>
					</label>
				<label
					style={{ gridArea: "deActFbLabel" }}
					className="de-act-fb label"
					htmlFor="deActFB"
				>
					DeAct FB
				<input
					style={{ gridArea: "deActFbCheckbox" }}
					className="de-act-fb checkbox"
					type="checkbox"
					id="deActFB"
					name="deActFB"
					/>
					</label>

				<label
					style={{ gridArea: "manualLabel" }}
					className="manual label"
					htmlFor="manual"
				>
					Manual
				<input
					style={{ gridArea: "manualCheckbox" }}
					className="manual checkbox"
					type="checkbox"
					id="manual"
					name="manual"
					/>
					</label>
				<label
					style={{ gridArea: "alarmLabel" }}
					className="alarm label"
					htmlFor="alarm"
				>
					Alarm
				<input
					style={{ gridArea: "alarmCheckbox" }}
					className="alarm checkbox"
					type="checkbox"
					id="alarm"
					name="alarm"
					/>
					</label>
				<label
					style={{ gridArea: "maskedLabel" }}
					className="masked label"
					htmlFor="masked"
				>
					Masked
				<input
					style={{ gridArea: "maskedCheckbox" }}
					className="masked checkbox"
					type="checkbox"
					id="masked"
					name="masked"
					/>
					</label>
				<label
					style={{ gridArea: "changingLabel" }}
					className="changing label"
					htmlFor="changing"
				>
					Changing
				<input
					style={{ gridArea: "changingCheckbox" }}
					className="changing checkbox"
					type="checkbox"
					id="changing"
					name="changing"
					/>
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
	);
}
export default SimInterfaceForm;
