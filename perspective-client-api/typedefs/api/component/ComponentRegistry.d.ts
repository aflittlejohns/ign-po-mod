import * as React from 'react';
import { ComponentStoreDelegate, InstallReactionFunc, PropertyTreeChangeListener, PComponent, SizeObject, PlainObject } from "../../perspective-client";
import { AbstractUIElementStore } from '../../stores/AbstractUIElementStore';
export interface ComponentMeta {
    createDelegate?(component: AbstractUIElementStore): ComponentStoreDelegate | undefined;
    getComponentType(): string;
    getDefaultSize(): SizeObject;
    getViewComponent(): PComponent;
    getPropsReducer?: PropertyTreeChangeListener<Record<string, any>>;
    installReactions?: InstallReactionFunc;
    canConvertToDrawing?: boolean;
    isDrawing?: boolean;
    isContainer?: boolean;
    isDeepSelectable?: boolean;
    focusRootOnly?: boolean;
    focusTargetSelector?: string;
    customMoveUndo?: boolean;
    pipingEnabled?: boolean;
    pipingAnchorSelector?: string;
    version?: number;
}
export type ContainerMeta = ComponentMeta & {
    getDesignInteractor(): React.ElementType;
    getRootDefaultSize(): PlainObject;
};
/**
 * The registry for components.  Register your implementation of ComponentMeta via ComponentRegistry.get().register(
 */
export declare class ComponentRegistry {
    _components: Map<string, ComponentMeta>;
    private static _instance;
    private constructor();
    static register(component: ComponentMeta): void;
    /** Finds a ComponentMeta that was previously registered by component-type name. Returns null if not registered. */
    static getMeta(componentType: string): ComponentMeta | undefined;
    report(): string;
    private static get;
}
