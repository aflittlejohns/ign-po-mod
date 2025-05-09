import { ClientStore } from './ClientStore';
import { PropertyType } from '../api/property/PropertyType';
import { PlainObject } from '../perspective-client';
export interface ComponentDefaultMsg {
    meta: PlainObject | null | undefined;
    session: PlainObject | null | undefined;
    components: ComponentDefaultMap;
}
export interface DefaultComponentConfig {
    type: string;
    module: string;
    defaults: PlainObject | null | undefined;
    childPositionDefaults: PlainObject | null | undefined;
}
export interface ComponentDefaultMap {
    [key: string]: DefaultComponentConfig;
}
export declare class ComponentDefaultsStore {
    propsDefaults: null | PlainObject;
    metaDefaults: null | PlainObject;
    sessionDefaults: null | PlainObject;
    loading: boolean;
    parent: ClientStore;
    private promiseResolver;
    private promiseRejecter;
    constructor(client: ClientStore);
    initHandlers(): void;
    get isLoaded(): boolean;
    requestDefaults(): Promise<void>;
    setDefaults(defaultsJson: ComponentDefaultMsg): void;
    findDefaults(scope: PropertyType, componentType?: string, variant?: string, designerInit?: boolean): any;
    findChildPositionDefaults(componentType?: string, designerInit?: boolean): any;
}
