import * as React from "react";
import type { StatusProps } from "../ar-types/status";
import type {
	ComponentProps,
	ComponentMeta,
	PComponent,
	SizeObject,
	PropertyTree,
} from "@inductiveautomation/perspective-client"; //'@inductiveautomation/perspective-client';
import {
	HMI_COMPONENT_CLASS,
	IA_SYMBOL_COMPONENT_COLUMN,
	IA_SYMBOL_COMPONENT_ROW,
	IA_SYMBOL_COMPONENT_WRAPPER,
	STATUS_COMPONENT_TYPE,
} from "../constants";

export const COMPONENT_TYPE = STATUS_COMPONENT_TYPE;

export const StatusValveMp = (props: ComponentProps<StatusProps>) => {
	const { emit } = props;
	const { statusItems } = props.props;
	const componentClassName = "status";

	return (
		<div
			{...emit({
				classes: [`${IA_SYMBOL_COMPONENT_COLUMN}`],
			})}
			data-component={COMPONENT_TYPE}
		>
			<div className={`${IA_SYMBOL_COMPONENT_ROW}`}>
				<div className={`${IA_SYMBOL_COMPONENT_WRAPPER}`}>
					<div className={`${HMI_COMPONENT_CLASS} ${componentClassName}`}>
						<ul className="list bordered dense">
							{statusItems.map((item, index) => {
								return (
									<li key={index}>
										<label className="checkbox">
											<div className="text">
												<p className="x-small">{item.label}</p>
											</div>
											<div className="end">
												<input
													name="checkbox"
													id={`checkbox-${index}`}
													type="checkbox"
													checked={item.status}
													readOnly={true}
												/>
											</div>
										</label>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
// This is the actual thing that gets registered with the component registry.
export class StatusValveMpMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	/**
	 * @returns The React component class.
	 */
	getViewComponent(): PComponent {
		return StatusValveMp as unknown as PComponent;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 240,
			height: 32,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): StatusProps {
		console.log(`status ${tree.read(`status`)}`);

		return {
			statusItems: tree.read("status", [
				{
					label: `label text`,
					status: false,
				},
			]),
		};
	}
}
