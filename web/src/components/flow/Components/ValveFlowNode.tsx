import * as React from "react";
import { Handle, Position } from "@xyflow/react";
import type { NodeProps, Node } from "@xyflow/react";
import {
	PageStore,
	ViewStateDisplay,
	type ClientStore,
	type ComponentProps,
	type ComponentStore,
	type Emitter,
	type ObservableProjectDefinition,
	type PlainObject,
	type ViewDefinition,
} from "@inductiveautomation/perspective-client";
// import { ValveCore } from "../../common/ValveCore";
import {
	JsonViewComponent,
	type JsonViewProps,
} from "../../perspective/JsonView";

import { JoinableView } from "../../../utils/JoinableView";
const COMPONENT_TYPE = "hmi.component.ValveFlowNode"
// Define the node data structure
export type ValveNodeData = {
	cprops: ComponentProps<JsonViewProps, PlainObject>;
	// Add any React Flow specific data
	id: string; // Unique Id
	label?: string;
};
export type JsonViewData = {
	cprops: ComponentProps<any, any>;
	props: JsonViewProps;
	store: ComponentStore;
	emit: Emitter;
};
export type ValveFlowNode = Node<JsonViewData, "valve">;
function getChildMountPath(store: ComponentStore) {
	return `${store.viewMountPath}.${store.addressPathString}`;
}
function getSubscriptionMap(project: ObservableProjectDefinition) {
  return Reflect.get(project, 'subscriptionMap')
}
function getViewDefCache(page: PageStore) {
  return Reflect.get(page, 'viewDefCache') as Map<string, ViewDefinition>
}

function FailedToLoadView({
  emit,
  message,
}: {
  emit: Emitter
  message: string
}) {
console.log("Failed to Load View");

  return (
    <div {...emit({ classes: ['view-parent'] })}>
      <ViewStateDisplay
        primaryMessage="View Failed to Load"
        secondaryMessage={message}
        icon={
          <svg className="view-state-icon">
            <use xlinkHref="/res/perspective/icons/material-icons.svg#warning" />
          </svg>
        }
      />
    </div>
  )
}

function installView(
  clientStore: ClientStore,
  resourcePath: string,
  viewJson: ViewDefinition
) {
  const views = clientStore.resources.project?.views

console.log("resourcePath",resourcePath);
console.log("ClientStore.resources.project",clientStore.resources.project);

  views?.set(resourcePath, viewJson)

  if (clientStore.isClient && clientStore.resources.project) {
    getSubscriptionMap(clientStore.resources.project)[resourcePath] = []
  }
  if (clientStore.isDesigner) {
    getViewDefCache(clientStore.page).set(resourcePath, viewJson)
  }
}

function uninstallView(clientStore: ClientStore, resourcePath: string) {
  const views = clientStore.resources.project?.views

  views?.delete(resourcePath)

  if (clientStore.isClient && clientStore.resources.project) {
    delete getSubscriptionMap(clientStore.resources.project)[resourcePath]
  }
  if (clientStore.isDesigner) {
    getViewDefCache(clientStore.page).delete(resourcePath)
  }
}
export function ValveFlowNode(d: NodeProps<ValveFlowNode>) {
	const { data } = d;
	const { emit, store, props, cprops } = data;
  const viewRef = React.useRef<JoinableView>(null)
  const clientStore = store.clientStore
	const mountPath = getChildMountPath(store);
	const resourcePath = `${store.view.resourcePath}.${store.addressPathString}`;
	console.log("Data", data);
	// Validate that we have the required data
	if (!data) {
		console.warn("ValveNode: Missing componentProps in data");
		return (
			<div className="valve-node-error">
				<div>Invalid Valve Node</div>
				<div>Missing component data</div>
			</div>
		);
	}
	if (store.delegate == null) {
    console.warn(
      `No delegate found for component ${COMPONENT_TYPE} at ${mountPath}`
    )
    return (
      <FailedToLoadView
        emit={emit}
        message="No component delegate was found"
      />
    )
  }
  if (clientStore == undefined) {
    console.warn(
      `No client store found for component ${COMPONENT_TYPE} at ${mountPath}`
    )
    return <FailedToLoadView emit={emit} message="No client store was found" />
  }
 // Reinstall the view whenever the definition changes.
  let viewJsonDependency: ViewDefinition | string = props.viewJson

  // If we are in the designer, use a string representation of the view.
  // Without this fix, the view will re-render when the `viewParams` changes.
  if (clientStore.isDesigner) {
    viewJsonDependency = JSON.stringify(props.viewJson)
  }
  React.useEffect(() => {
    if (isMounted.current) {
      console.debug(
        'View definition changed, re-registering the view definition.'
      )
      installView(clientStore, resourcePath, props.viewJson)
      viewRef.current?.resetInstance()
    }

    return () => {
      uninstallView(clientStore, resourcePath)
    }
  }, [viewJsonDependency])

  // Create the view of startup, before the first render.
  const isMounted = React.useRef(false)
  if (!isMounted.current) {
    console.debug('Registering view definition.')
    installView(clientStore, resourcePath, props.viewJson)
  }
  React.useEffect(() => {
    isMounted.current = true
  }, [])

	return (
		<div
			{...emit({
				classes: ['view-parent'],
			})}
			>
		{/* <JoinableView
		ref={viewRef}
		key={PageStore.instanceKeyFor(resourcePath, mountPath)}
		delegate={store.delegate}
		mountPath={mountPath}
		resourcePath={resourcePath}
		store={clientStore}
		params={{value:{tagpath:"[default]V401"}}}
		/> */}
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

			{/* Wrapped Ignition Component */}
			<JsonViewComponent
				{...cprops}
				emit={emit}
				store={store}
				props={props}
				position={{ basis: "48px" }}
			params={{value:{tagpath:"[default]V401"}}}
			/>
		</div>
	);
}
