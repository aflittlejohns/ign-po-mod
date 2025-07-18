import * as React from "react";
import {
	ComponentStoreDelegate,
	ComponentStoreState,
	type AbstractUIElementStore,
	type ComponentMeta,
	type ComponentProps,
	type JsObject,
	type PComponent,
	type PropertyTree,
	type SizeObject,
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



export const FlowProvider = (props: ComponentProps<any, any>) => {
	// const tagpaths = useFlowProviderStore((state) => state.tagpaths);
	const componentClassName = "flow-provider";
	return (
		<div
			{...props.emit({
				classes: [`${IA_SYMBOL_COMPONENT_COLUMN}`],
			})}
			data-component={COMPONENT_TYPE}
		>
			{" "}
			<div className={`${IA_SYMBOL_COMPONENT_ROW}`}>
				<div className={`${IA_SYMBOL_COMPONENT_WRAPPER}`}>
					<div className={`${HMI_COMPONENT_CLASS} ${componentClassName}`}>
						<ReactFlowProvider>
							<Flow {...props} />
						</ReactFlowProvider>
					</div>
				</div>
			</div>
		</div>
	);
};
export class FlowProviderComponentDelegate extends ComponentStoreDelegate {
	handleEvent(eventName: string, eventObject: JsObject): void {
		return;
	}
}
export class FlowProviderMeta implements ComponentMeta {
	t = ComponentStoreState;
	getComponentType(): string {
		return COMPONENT_TYPE;
	}
	createDelegate(
		component: AbstractUIElementStore
	): ComponentStoreDelegate | undefined {
		return new FlowProviderComponentDelegate(component);
	}
	getViewComponent(): PComponent {
		return FlowProvider as unknown as PComponent;
	}
	getDefaultSize(): SizeObject {
		return {
			width: 1800,
			height: 1000,
		};
	}
	// Invoked when an update to the PropertyTree has occurred,
	// effectively mapping the valveStatus of the tree to component props.
	getPropsReducer(tree: PropertyTree): JsObject {
		const props = tree.read();
		return {
			props,
		};
	}
}

