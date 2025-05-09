import { PlainObject, Position } from '../../../perspective-client';
import { MobileDataSource } from '../api/MobileDataSource';
export declare const GeolocationPositionSource: MobileDataSource<Position, PlainObject>;
export declare const GeolocationGrantSource: MobileDataSource<{
    granted: boolean;
}, PlainObject>;
