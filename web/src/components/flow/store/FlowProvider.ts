// FlowProvider.ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { type ClientStore, type JsObject, type OutputListener, type StyleObject } from "@inductiveautomation/perspective-client";

export type EmbeddedViewProps = {
	key: React.Key;
	viewPath: string;
	viewParams: JsObject;
	viewStyle: StyleObject;
	useDefaultHeight: boolean;
	useDefaultMinHeight: boolean;
	useDefaultMinWidth: boolean;
	useDefaultWidth: boolean;
};
export type EmbeddedNodeViewProps = {
	store: ClientStore;
	mountPath: string;
	view: EmbeddedViewProps;
	listenResize?: boolean;
	onResize?: () => void;
	key: React.Key;
	outputListener?: OutputListener;
};

// FlowProvider.ts
export type EmbeddedViewConfig = {
    id: string;
    parentMountPath: string;
    viewPath: string;
    viewParams: any;
    viewStyle?: any;
};

export type FlowProviderStore = {
    tagpaths: string[];
    embeddedViewConfigs: Map<string, EmbeddedViewConfig>; // Store config, not components

    // Methods to manage configurations
    createEmbeddedViewConfig: (config: {
		viewPath: string;
		parentMountPath: string
        viewParams?: any;
        viewStyle?: any;
    }) => EmbeddedViewConfig;

    addEmbeddedViewConfig: (config: EmbeddedViewConfig) => void;
    getEmbeddedViewConfig: (id: string) => EmbeddedViewConfig | undefined;
    removeEmbeddedViewConfig: (id: string) => void;
};

export const useFlowProviderStore = create<FlowProviderStore>()(
    immer((set, get) => ({
        tagpaths: [],
        embeddedViewConfigs: new Map(),

        createEmbeddedViewConfig: (config) => {
            const id = `embedded-view-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const mountPath = `/flow-nodes/${id}`;

            return {
                id,
                viewPath: config.viewPath,
                viewParams: config.viewParams || {},
                viewStyle: config.viewStyle || {},
                mountPath,
				parentMountPath: config.parentMountPath,
            };
        },

        addEmbeddedViewConfig: (config) => {
            set((state) => {
                state.embeddedViewConfigs.set(config.id, config);
            });
        },

        getEmbeddedViewConfig: (id) => {
            return get().embeddedViewConfigs.get(id);
        },

        removeEmbeddedViewConfig: (id) => {
            set((state) => {
                state.embeddedViewConfigs.delete(id);
            });
        },

        // ... other methods
    }))
);
