/**
 * Interface for methods intended to be called from the native application.
 */
import { MobileDataItem } from './MobileDataSource';
import { LogLevel, NativeWebInterface } from "../../native/api/NativeWebInterface";
import { PlainObject } from '../../../perspective-client';
export interface WebInterface extends NativeWebInterface<MobileDataItem<PlainObject>> {
    /**
     * Called from the native application, used to submit the result of a mobile origin challenge.
     * @param result the decrypted challenge used to verify the client application is running as a webview of the
     *               native app
     */
    submitChallenge(result: string): void;
    /**
     * Submit a log message to the client, which is then also sent back to the gateway.  Useful for propagating
     * native errors/logging info back to the gateway.
     * @param level the log level, represented as a String valued enum.
     * @param msg the log message
     */
    log(level: LogLevel, msg: string): void;
}
