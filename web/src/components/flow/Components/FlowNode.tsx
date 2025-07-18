import * as React from "react";
import { Handle, Position } from "@xyflow/react";
import type {
	NodeProps,
	 Node
	} from "@xyflow/react";
import {
	PageStore,
	// PageStore,
	// View,
	// type ClientStore,
	type ComponentMeta,
	// type ComponentProps,
	// type JsObject,
	// type OutputListener,
	type PComponent,
	// type PlainObject,
	type PropertyTree,
	type SizeObject,
	// type StyleObject,
} from "@inductiveautomation/perspective-client";
import { JoinableView } from "../../../utils/JoinableView";
import { useFlowProviderStore } from "../store/FlowProvider";
import { EmbeddedNodeView } from "../Flow";
// import { ValveCore } from "../../common/ValveCore";
// import { formatStyleNames } from "../utils";

const COMPONENT_TYPE = "hmi.flow.FlowNode";
// type HmiFlowNodeProps = {
// 	instances: EmbeddedViewProps[];
// 	style?: StyleObject;
// };
// Define the node data structure
export type FlowNodeData = {
	// Add any React Flow specific data
	embeddedViewId: string;
	id: string; // Unique Id
	label?: string;
};

export type FlowNode = Node<FlowNodeData, "valve">;


export function FlowNodeComponent({data , selected}: NodeProps<FlowNode>) {
    const { getEmbeddedView, outputListener } = useFlowProviderStore();
    const viewRef = React.useRef<JoinableView>(null);

    const embeddedView = getEmbeddedView(data.embeddedViewId);

    if (!embeddedView) {
        console.warn(`EmbeddedView not found for ID: ${data.embeddedViewId}`);
        return (
            <div className="flow-node-error">
                <div>Missing Embedded View</div>
                <div>ID: {data.embeddedViewId}</div>
            </div>
        );
    }

    // Initialize JoinableView when component mounts
    React.useEffect(() => {
        if (embeddedView.props?.store) {
            // Update the embedded view with the JoinableView ref if needed
            updateEmbeddedView(embeddedView.id, {
                joinableView: viewRef.current || undefined
            });
        }
    }, [embeddedView.id, updateEmbeddedView]);
	const {clientStore} = embeddedView.props?.store;

const viewProps = {
		key: embeddedView.id,
	viewPath:embeddedView.viewPath,
	viewParams: embeddedView.viewParams,
	viewStyle: embeddedView.viewStyle ,
	useDefaultHeight:false ,
	useDefaultMinHeight:false ,
	useDefaultMinWidth:false ,
	useDefaultWidth:false ,
}
	return (
		   <div className={`flow-node ${selected ? "selected" : ""}`}>
			{/* React Flow Handles */}
			<Handle
				type="target"
				position={Position.Top}
				id="valve-top"
				className="valve-handle valve-handle-top"
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="valve-right"
				className="valve-handle valve-handle-right"
			/>
			<Handle
				type="source"
				position={Position.Bottom}
				id="valve-bottom"
				className="valve-handle valve-handle-bottom"
			/>
			<Handle
				type="target"
				position={Position.Left}
				id="valve-left"
				className="valve-handle valve-handle-left"
			/>

			 {/* Embedded View Content */}
            <div className="flow-node-content">
                <EmbeddedNodeView
				   key={PageStore.instanceKeyFor(embeddedView.viewPath, embeddedView.mountPath)}
					mountPath={embeddedView.mountPath}
					store={clientStore}
					view={viewProps}
					outputListener={()=>outputListener}
				   />
                ) : (
                    <div className="embedded-view-placeholder">
                        <div>{embeddedView.viewPath}</div>
                        <div>{data.label}</div>
                    </div>
                )
            </div>
		</div>
	);
}

export class FlowNodeComponentMeta implements ComponentMeta {
	getComponentType(): string {
		return COMPONENT_TYPE;
	}

	getDefaultSize(): SizeObject {
		return {
			width: 300,
			height: 300,
		};
	}

	getPropsReducer(tree: PropertyTree): HmiFlowNodeProps {
		return {
			instances: tree.read("instances", []),
			style: tree.read("style", {}),
		} as never;
	}

	getViewComponent(): PComponent {
		return FlowNodeComponent as unknown as PComponent;
	}
}
