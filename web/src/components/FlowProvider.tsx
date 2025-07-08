import * as React from "react";
import type { ComponentMeta, ComponentProps, PComponent, SizeObject } from "@inductiveautomation/perspective-client";
import {
	FLOW_PROVIDER_COMPONENT_TYPE,
	IA_SYMBOL_COMPONENT_COLUMN,
} from "../constants";

const COMPONENT_TYPE = FLOW_PROVIDER_COMPONENT_TYPE;

import { ReactFlowProvider } from "@xyflow/react";
import { Flow } from "./flow/Flow";

export const FlowProvider = (props: ComponentProps<{}>) => {
	const { emit } = props;

	return (
		        <div
            {...emit({
                classes: [IA_SYMBOL_COMPONENT_COLUMN],
            })}
            data-component={COMPONENT_TYPE}
        >
		<ReactFlowProvider

		>
			<Flow />
		</ReactFlowProvider>
		</div>
	);
};

export class FlowProviderMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE
	};
	getViewComponent(): PComponent {
		return FlowProvider
	};
	getDefaultSize(): SizeObject {
		return{
			width: 1800,
			height: 1000,
		}
	};
}
