/// <reference types="react" />
import { SVG_Utils } from "../perspective-client";
export type ICON_PATH_KEY = string;
export type ICON_CACHE_VALUE = {
    innerContent: React.ReactElement | null;
    viewBox: SVG_Utils.ViewBoxConfig;
};
/**
 * This singleton store is an in memory cache of each type of icon ever loaded on the page.  Its purpose is to avoid having
 * every instance of an IconRenderer fetch icons html string, parse the string to valid html, and then parse it again to
 * create a React element.  Each instance on an IconRenderer must check with this store first to see if the desired
 * renderer configuration is available.  If not, this store will attempt to fetch and parse the icon and then notify
 * any icon renderer instances interested in said icon when it becomes available.
 */
export declare class IconRenderersStore {
    private loadedIconsCache;
    private loadingSubscriptionsMap;
    private _subscribeLoading;
    private _notifyLoaded;
    constructor();
    private addSubscriptionEvent;
    private iconIsLoading;
    private subscribe;
    getCached: (path: ICON_PATH_KEY) => ICON_CACHE_VALUE | undefined;
    requestCached(path: ICON_PATH_KEY, cb: ((path: ICON_PATH_KEY) => void)): void;
}
