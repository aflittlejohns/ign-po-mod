/**
 * Interface for methods intended to be called from Workstation.
 */
import { WorkstationDataItem } from './WorkstationDataSource';
import { LogLevel, NativeWebInterface } from "../../native/api/NativeWebInterface";
import { PlainObject } from '../../../perspective-client';
export interface WebInterface extends NativeWebInterface<WorkstationDataItem<PlainObject>> {
    /**
     * Called from workstation, used to submit the result of a workstation origin challenge.
     * @param result the decrypted challenge used to verify the client application is running in jxbrowser in workstation.
     */
    submitChallenge(result: string): void;
    /**
     * Submit a log message to the client, which is then also sent back to the gateway.  Useful for propagating
     * workstation errors/logging info back to the gateway.
     * @param level the log level, represented as a String valued enum.
     * @param msg the log message
     */
    log(level: LogLevel, msg: string): void;
}
