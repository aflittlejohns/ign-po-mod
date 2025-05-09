import * as React from 'react';
import { ComponentStore, PlainObject, Point, PortalDestinationMeta, StyleObject } from '../perspective-client';
import { IconRendererConfig } from './IconRenderer';
export interface ContextMenuProps {
    hideMenuCallback: any;
    isBaseMenu: boolean;
    items: Array<MenuItem>;
    linkCallback: any;
    messageCallback: any;
    methodCallback: any;
    mouseEnterCallback: any;
    positionContext: PortalDestinationMeta;
    store: ComponentStore;
    style: StyleObject;
    submenuRemoveCallback: any;
    submenuRenderCallback: any;
    isExpandedSubmenu?: boolean;
    mouseLocation?: Point | undefined;
    shouldReverse?: boolean;
    submenuIndex?: number;
}
export interface MenuItem {
    children: Array<MenuItem>;
    icon: IconRendererConfig;
    link: Link;
    message: Message;
    method: Method;
    style: StyleObject;
    text: string;
    type: string;
}
interface Link {
    target: string;
    url: string;
}
export interface Method {
    name: string;
    params: PlainObject | null;
}
export interface Message {
    payload: PlainObject;
    scope: string;
    type: string;
}
export declare class ComponentContextMenu extends React.Component<ContextMenuProps, Readonly<any>> {
    contextMenu: HTMLElement | null;
    submenuRefs: HTMLElement[] | null;
    constructor(props: ContextMenuProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    disableDefaultContextMenu(): void;
    hideContextMenu(): void;
    setContextMenuRef(contextMenu: HTMLElement | null): void;
    setSubmenuRef(submenuRef: any, index: number): void;
    callComponentMessage(payload: Message): any;
    callComponentMethod(payload: Method): any;
    callComponentLink(url: string, target: string): any;
    callOnMouseEnterHandler(event: React.MouseEvent, isBaseMenu: boolean): any;
    renderSubmenu(event: React.MouseEvent, items: Array<MenuItem>, index: number, isBaseMenu: boolean): any;
    removeSubmenu(event: React.MouseEvent, index: number, isBaseMenu: boolean): any;
    isOutOfBounds(submenuDimensions: DOMRect): boolean;
    delegateMenuPosition(styleProp: string, shouldReverse?: boolean): string;
    configureSubmenu(item: MenuItem, index: number): React.ReactNode;
    configureLink(item: MenuItem, index: number, hideMenuCallback: any): React.ReactNode;
    configureMethod(item: MenuItem, index: number, hideMenuCallback: any): React.ReactNode;
    configureMethodParams(params?: PlainObject | null): any;
    configureMessage(item: MenuItem, index: number, hideMenuCallback: any): React.ReactNode;
    configureSeparator(item: MenuItem, index: number): React.ReactNode;
    maybeRenderIcon(iconConfig: IconRendererConfig, index: number, classes?: string, isSubmenu?: boolean): any;
    renderMenuItems(items: Array<MenuItem>): Array<React.ReactNode>;
    configureStyleClassNames(style: StyleObject): string | undefined;
    render(): JSX.Element;
}
export {};
