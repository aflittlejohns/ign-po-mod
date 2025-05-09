import { ComponentDefinition } from "../api/component/Component";
import { ComponentStore } from "./ComponentStore";
export interface ComponentStoreMaker {
    (def: ComponentDefinition, index: number): Promise<ComponentStore>;
}
export interface ComponentStoreLoader {
    loadChildren(children: Array<ComponentDefinition>, makeStore: ComponentStoreMaker): Promise<Array<ComponentStore>>;
    cancel(): void;
    loadMonitor: ComponentLoadMonitor;
}
export interface ComponentLoadMonitor {
    (done: number): void;
}
export declare class SynchroComponentStoreLoader implements ComponentStoreLoader {
    running: boolean;
    loadMonitor: ComponentLoadMonitor;
    constructor(monitor: ComponentLoadMonitor);
    loadChildren(children: Array<ComponentDefinition>, makeStore: ComponentStoreMaker): Promise<Array<ComponentStore>>;
    cancel(): void;
}
export declare class MeteredComponentStoreLoader implements ComponentStoreLoader {
    running: boolean;
    chunkCount: number;
    loadMonitor: ComponentLoadMonitor;
    constructor(chunkCount: number | undefined, monitor: ComponentLoadMonitor);
    cancel(): void;
    loadChildren(children: Array<ComponentDefinition>, makeStore: ComponentStoreMaker): Promise<Array<ComponentStore>>;
}
