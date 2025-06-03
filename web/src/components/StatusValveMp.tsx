import * as React from "react";
import type { StatusProps } from "../ar-types/status";
import type {
	ComponentProps,
	ComponentMeta,
	PComponent,
	SizeObject,
	PropertyTree,
} from "@inductiveautomation/perspective-client"; //'@inductiveautomation/perspective-client';

export const COMPONENT_TYPE = "hmi.display.StatusValveMp";

export const StatusValveMp = (props: ComponentProps<StatusProps>) => {
	const { statusItems } = props.props;

	return (
		<div className="hmi-component-status-valve-mp hmi-component-status-valve-mp__grid">
			<ul>

			{statusItems.map((item, index) => {

				return (
					<li className="border-top" key={index}>
						<label className="checkbox" >
							<div className="text">
								<p>
								{item.label}
								</p>
								</div>
							<div className="end">
								<input name="checkbox" id={`checkbox-${index}`} type="checkbox" checked={item.status} />
							</div>
						</label>
					</li>
				);
			})}
			</ul>
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
			width: 24,
			height: 48,
		};
	}

	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): StatusProps {
		return {
			statusItems: tree.read("statusItems", [
				{
					label: "label text",
					status: false,
				},
			]),
		};
	}
}
