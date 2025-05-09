import { Position, PropertyTree } from '../perspective-client';
import { ClientStore } from './ClientStore';
export interface GeolocationProps {
    enabled: boolean;
    data: {
        accuracy: number | null;
        altitude: number | null;
        altitudeAccuracy: number | null;
        heading: number | null;
        latitude: number | null;
        longitude: number | null;
        speed: number | null;
        timestamp: number | null;
    };
    options: {
        accuracy?: "max" | "balanced" | "low";
        minDistance?: number;
        minTime?: number;
    };
}
export declare const DEFAULT_GEOLOCATION_PROPS: GeolocationProps;
export declare class GeoLocationStore {
    private parent;
    private geolocatorId?;
    geolocationEnabled: boolean;
    sessionPropsChangeDisposer: (() => any) | null;
    constructor(parent: ClientStore);
    subscribeToSessionProps(): void;
    onSessionPropsChange(tree: PropertyTree): void;
    updateGeolocation(position: Position): void;
    enableGeolocation(enable: boolean): void;
    static mapOptionsForBrowser(props: PropertyTree): PositionOptions;
}
