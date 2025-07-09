import * as React from "react";
import type {
	ComponentMeta,
	ComponentProps,
	PComponent,
	SizeObject,
} from "@inductiveautomation/perspective-client";
import {
	FLOW_PROVIDER_COMPONENT_TYPE,
	HMI_COMPONENT_CLASS,
	IA_SYMBOL_COMPONENT_COLUMN,
	IA_SYMBOL_COMPONENT_ROW,
	IA_SYMBOL_COMPONENT_WRAPPER,
} from "../constants";

const COMPONENT_TYPE = FLOW_PROVIDER_COMPONENT_TYPE;

import { ReactFlowProvider } from "@xyflow/react";
import { Flow } from "./flow/Flow";

export const FlowProvider = (
	props: ComponentProps<{ label?: string }, any>
) => {
	const { emit } = props;
	const componentClassName = "flow-provider";
	return (
		<div
			{...emit({
				classes: [`${IA_SYMBOL_COMPONENT_COLUMN}`],
			})}
			data-component={COMPONENT_TYPE}
		>
			{" "}
			<div className={`${IA_SYMBOL_COMPONENT_ROW}`}>
				<div className={`${IA_SYMBOL_COMPONENT_WRAPPER}`}>
					<div className={`${HMI_COMPONENT_CLASS} ${componentClassName}`}>
						<ReactFlowProvider>
							{/* <div></div> */}
							<Flow />
						</ReactFlowProvider>
					</div>
				</div>
			</div>
		</div>
	);
};

export class FlowProviderMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}
	getViewComponent(): PComponent {
		return FlowProvider;
	}
	getDefaultSize(): SizeObject {
		return {
			width: 1800,
			height: 1000,
		};
	}
}
