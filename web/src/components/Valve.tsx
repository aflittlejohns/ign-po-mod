/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Item from "./valve-process/item";
import { ItemNameEnum } from "./valve-process/types";
import { v4 as uuidv4 } from "uuid";

import {
	Component,
	ComponentProps,
	ComponentMeta,
	PComponent,
	SizeObject,
	PropertyTree,
} from "@inductiveautomation/perspective-client";
//import { ValveState } from "./valve-process/types";

export const COMPONENT_TYPE = "lif.process_objects.Valve";

interface ValveStatus {
	Alarm?: boolean;
	ActFB?: boolean;
	DeActFB?: boolean;
	ActivatedConfig?: number;
	DeactivatedConfig?: number;
	TagName?: string;
	Manual?: boolean;
	Masked?: boolean;
	Changing?: boolean;
}
export interface ValveProps {
	ValveStatus?: ValveStatus;
	handleClick?: () => void;
}
const bit = (n: number, i: number): number => {
	return (n >> i) & 1;
};

/**
 * Valve component class.
 * Extends the base Component class from Perspective, typed with ValveProps.
 * Provides a customizable valve with proper handling of designer/preview modes.
 */
export class Valve extends Component<ComponentProps<ValveProps>, any> {
	itemNames = Object.keys(ItemNameEnum).map((itemName) => {
		return {
			key: uuidv4(),
			name: itemName,
			value: ItemNameEnum[itemName as keyof typeof ItemNameEnum],
			index: Object.keys(ItemNameEnum).indexOf(itemName),
		};
	});
	inCoord: boolean = this.props.position?.x ?? false;
	// This is a lifecycle method that is called when the component is first mounted to the DOM.
	componentDidMount(): void {}
	valveStatus: ValveStatus = this.props.props.ValveStatus ?? {};

	getItemClassName(index: number, valveStatus?: ValveStatus): string {
		let className = "";
		// Handle the fAct that ActivatedConfig and DeactivatedConfig are optional and maybe undefined
		const ActivatedConfigValue = valveStatus?.ActivatedConfig ?? 0;
		const DeactivatedConfigValue = valveStatus?.DeactivatedConfig ?? 0;
		if (index < 12) {
			//console.log("index" + " ActFB", index, valveStatus?.ActFB);
			if (
				(bit(ActivatedConfigValue, index) && valveStatus?.ActFB) ||
				(bit(DeactivatedConfigValue, index) && valveStatus?.DeActFB)
			) {
				className = "show item";
			} else {
				className = "hide item";
			}
		} else if (index === 14) {
			className = "show";
		} else if (index === 12) {
			if (
				bit(ActivatedConfigValue, index) ||
				bit(DeactivatedConfigValue, index)
			) {
				className = "show";
			} else {
				className = "hide";
			}
		} else if (index === 13) {
			if (
				bit(ActivatedConfigValue, index) ||
				bit(DeactivatedConfigValue, index)
			) {
				className = "show";
			} else {
				className = "hide";
			}
		} else if (index === 15) {
			if (bit(ActivatedConfigValue, 12) || bit(DeactivatedConfigValue, 12)) {
				className = "show";
			} else {
				className = "hide";
			}
		} else if (index === 16) {
			if (bit(ActivatedConfigValue, 12) || bit(DeactivatedConfigValue, 12)) {
				className = "show";
			} else {
				className = "hide";
			}
		} else if (index === 17) {
			if (bit(ActivatedConfigValue, 13) || bit(DeactivatedConfigValue, 13)) {
				className = "show";
			} else {
				className = "hide";
			}
		} else if (index === 18) {
			if (bit(ActivatedConfigValue, 13) || bit(DeactivatedConfigValue, 13)) {
				className = "show";
			} else {
				className = "hide";
			}
		} else {
			className = "hide";
		}
		// Additions to the className

		if (className.includes("show") && !className.includes("item")) {
			console.log("index", index, className);
			if (valveStatus?.Alarm) {
				className = className.replace("AlarmState", "") + " AlarmState";
			}
			if (valveStatus?.Changing) {
				className = className.replace("Changing", "") + " Changing";
			}
			if (valveStatus?.Manual) {
				className = className.replace("Manual", "") + " Manual";
			}
			if (valveStatus?.Masked && !valveStatus.Alarm) {
				className = className.replace("NoAlarmMask", "") + " NoAlarmMask";
			}
			if (valveStatus?.Masked) {
				className = className.replace("Masked", "") + " Masked";
			}
			if (valveStatus?.ActFB) {
				className = className.replace("Activated", "") + " Activated";
			}
			if (valveStatus?.DeActFB) {
				className = className.replace("Deactivated", "") + " Deactivated";
			}
		}

		return className; // default return value if no other condition is met
	}

	/**
	 * Handler for the button's action event.
	 */
	onActionPerformed = () => {
		// If the designer is in "design" mode, don't do anything
		if (!this.props.eventsEnabled) {
			console.log("Valve is disabled in the design-scope");
			return;
		}
		console.log("Valve clicked!");
		this.props.componentEvents.fireComponentEvent("onActionPerformed", {});
	};
	/*
	if this.parentDataComponent === "ia.container.flex" add the following
	 *    <div class="ia_symbolComponent ia_symbolComponent__row" style="">
	 *    <div class="ia_symbolComponent__column">
	 *    <div class="ia_symbolComponent__wrapper">
	 *    <Component />
	 *    </div>
	 *    </div>
	 *    </div>
	 */
	render() {
		const {
			emit,
			//props,
			props: { ValveStatus },
		} = this.props;
		if (!this.inCoord) {
			return (
				<div
					{...emit({
						classes: [`lif-symbolComponent lif-symbolComponent__column `],
					})}
					// onClick={this.onActionPerformed}
					data-component={COMPONENT_TYPE}
				>
					<div className="lif-symbolComponent__row">
						<div className="lif-valve-component">
							{this.itemNames.map(
								({ value, index, key }) => (
									console.log("re-rendered ", index),
									(
										<Item
											itemClassName={
												value + " " + this.getItemClassName(index, ValveStatus)
											}
											handleClick={this.onActionPerformed}
											key={key}
										/>
									)
								)
							)}
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div
					{...emit({
						classes: [`lif-symbolComponent lif-valve-component `],
					})}
					data-component={COMPONENT_TYPE}
				>
					{this.itemNames.map(
						({ value, index, key }) => (
							console.log("re-rendered ", index),
							(
								<Item
									itemClassName={
										value + " " + this.getItemClassName(index, ValveStatus)
									}
									handleClick={this.onActionPerformed}
									key={key}
								/>
							)
						)
					)}
				</div>
				/* 	</div> */
				/* 	</div> */
			);
		}
	}
}

// This is the actual thing that gets registered with the component registry.
export class ValveMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	/**
	 * @returns The React component class.
	 */
	getViewComponent(): PComponent {
		return Valve;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 75,
			height: 75,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): ValveProps {
		console.log("ValveStatus", tree.read("ValveStatus"));
		return {
			ValveStatus: {
				Alarm: tree.readBoolean("ValveStatus.Alarm", false),
				ActFB: tree.readBoolean("ValveStatus.ActFB", false),
				DeActFB: tree.readBoolean("ValveStatus.DeActFB", false),
				ActivatedConfig: tree.readNumber("ValveStatus.ActivatedConfig", 6),
				DeactivatedConfig: tree.readNumber("ValveStatus.DeactivatedConfig", 0),
				TagName: tree.readString("ValveStatus.TagName", ""),
				Manual: tree.readBoolean("ValveStatus.Manual", false),
				Masked: tree.readBoolean("ValveStatus.Masked", false),
				Changing: tree.readBoolean("ValveStatus.Changing", false),
			},
		};
	}
}
