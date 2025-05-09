import * as React from 'react';
import { EventConfig, JsObject, LayoutCallback, PropertyConfigCollection, ScriptConfig, PlainObject } from "../../perspective-client";
import { ComponentEvents } from "../../event/ComponentEvents";
import { ComponentStore } from "../../stores/ComponentStore";
import { DomEvents } from "../../event/DomEvents";
export interface EmitProps {
    style?: React.CSSProperties;
    classes?: Array<string>;
}
export interface Emitter {
    (emitProps?: EmitProps, layoutStyleOnly?: boolean, disableEvents?: boolean, noLayoutStyle?: boolean): any;
}
export type ComponentDelegateState = PlainObject;
export interface ComponentProps<P extends PlainObject, D extends ComponentDelegateState = PlainObject> extends React.ComponentProps<any> {
    onQualitiesUpdated?(overlayStateChanged?: boolean): void;
    componentEvents: ComponentEvents;
    def?: ComponentDefinition;
    delegate?: D;
    domEvents: DomEvents;
    emit: Emitter;
    eventsEnabled: boolean;
    meta: MetaObject;
    position: JsObject;
    custom: JsObject;
    rotationEnabled?: boolean;
    layout: LayoutCallback;
    props: P;
    store: ComponentStore;
    i18nStale: boolean;
}
/**
 * The base component used in Perspective.  All class components should extend from PerspectiveComponent.
 */
export declare class Component<P extends ComponentProps<PlainObject>, S extends PlainObject = PlainObject> extends React.Component<P, S> {
}
/**
 * Shape of a ComponentDefinition, which is the shape representing a single component instance which can be created
 * as an instance.
 */
export interface ComponentDefinition {
    type: string;
    version: number;
    custom?: JsObject;
    position?: JsObject;
    props?: JsObject;
    meta?: MetaObject;
    children?: Array<ComponentDefinition>;
    propConfig?: PropertyConfigCollection;
    events?: EventConfig;
    scripts?: ScriptConfig;
}
export interface ComponentInstanceDef {
    component: ComponentDefinition;
    addressPath: string;
}
export interface MetaObject extends PlainObject {
    name: string;
}
