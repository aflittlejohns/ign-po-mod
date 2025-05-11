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
function UsernameForm({
	onSubmitUsername,
}: {
	onSubmitUsername: (event: React.FormEvent<UsernameFormElement>) => void;
}) {
	function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
		event.preventDefault();

		onSubmitUsername(event);
	}

	return (
		<form className="user-form" onSubmit={handleSubmit}>
			<div
				style={{
					display: "grid",
					containerType: "inline-size",
					gridTemplateColumns: "20px repeat(12,1fr) 20px",
					gridTemplateRows: "repeat(3,40px)",
					gridTemplateAreas: `
				". . actConfig actConfig actConfig actConfig actConfig deActConfig deActConfig deActConfig deActConfig deActConfig . ."
				". alarmLabel alarmCheckbox  maskedLabel maskedCheckbox manualLabel manualCheckbox actFbLabel actFbCheckbox deActFbLabel deActFbCheckbox changingLabel changingCheckbox ."
				". submitButton  submitButton submitButton submitButton . . . . . . . . . "`,
					gap: "1cqmin",
				}}
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
				</label>
				<input
					style={{ gridArea: "actFbCheckbox" }}
					className="act-fb checkbox"
					type="checkbox"
					id="actFB"
					name="actFB"
				/>
				<label
					style={{ gridArea: "deActFbLabel" }}
					className="de-act-fb label"
					htmlFor="deActFB"
				>
					DeAct FB
				</label>
				<input
					style={{ gridArea: "deActFbCheckbox" }}
					className="de-act-fb checkbox"
					type="checkbox"
					id="deActFB"
					name="deActFB"
				/>

				<label
					style={{ gridArea: "manualLabel" }}
					className="manual label"
					htmlFor="manual"
				>
					Manual
				</label>
				<input
					style={{ gridArea: "manualCheckbox" }}
					className="manual checkbox"
					type="checkbox"
					id="manual"
					name="manual"
				/>
				<label
					style={{ gridArea: "alarmLabel" }}
					className="alarm label"
					htmlFor="alarm"
				>
					Alarm
				</label>
				<input
					style={{ gridArea: "alarmCheckbox" }}
					className="alarm checkbox"
					type="checkbox"
					id="alarm"
					name="alarm"
				/>
				<label
					style={{ gridArea: "maskedLabel" }}
					className="masked label"
					htmlFor="masked"
				>
					Masked
				</label>
				<input
					style={{ gridArea: "maskedCheckbox" }}
					className="masked checkbox"
					type="checkbox"
					id="masked"
					name="masked"
				/>
				<label
					style={{ gridArea: "changingLabel" }}
					className="changing label"
					htmlFor="changing"
				>
					Changing
				</label>
				<input
					style={{ gridArea: "changingCheckbox" }}
					className="changing checkbox"
					type="checkbox"
					id="changing"
					name="changing"
				/>
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
export default UsernameForm;
