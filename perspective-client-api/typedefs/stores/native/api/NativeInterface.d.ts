import { NativeLifeCycleEvents } from "../../ClientStore";
import { ClientError } from "../../../perspective-client";
/**
 * When running in some webview/jxbrowser of the native application, these are the method signatures that the native
 * application should expose to allow the client to interact with it.
 */
export interface NativeInterface {
    /**
     * Called when a lifecycle transition or event has occured that the native application might be interested in.
     * Sends the NativeLifeCycleEvents's string value to the native side.
     */
    onLifecycleEvent(stage: NativeLifeCycleEvents): void;
    /**
     * Called when an error has occurred during a bridge activity in order to send error information to the native
     * app.
     */
    onError(error: ClientError): void;
    /**
     * Launch an action on the native client.
     * @param actionConfig the config object of the LaunchActionConfig type in JSON.stringified form
     */
    launchAction(actionConfig: string): void | string;
}
