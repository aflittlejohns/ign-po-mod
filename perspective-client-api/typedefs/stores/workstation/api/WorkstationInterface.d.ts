import { NativeInterface } from "../../native/api/NativeInterface";
/**
 * When running in a jxbrowser in a workstation application, these are the method signatures that the native
 * application should expose to allow the client to interact with it.
 *
 * NOTE: Adding functionality here after the initial inception which call to the java bridge should have guards against
 * the presence of a matching method in the java bridge. It is recommended if at all possible to initialize any handlers
 * in WorkstationBridge.java itself outside of this supplied and limited scope to guard future features, actions,
 * scripts, etc. which may not be supported in previous versions of workstation.
 */
export interface WorkstationInterface extends NativeInterface {
    /**
     * Should be implemented on the Java side to initialize and add additional handlers supported by workstation.
     */
    initializeBridge(): void;
    /**
     * Handles exiting Workstations Browser instance. All open instances linked to this Browser instance are closed
     */
    exit(): void;
    /**
     * Java Bridge method which handles the challenge token from the gateway
     */
    challenge(challenge: Record<string, any>): void;
    /**
     * Java Bridge method which handles any applicable native settings.
     */
    nativeSettings(settings: Record<string, any>): void;
    /**
     * Handles bridge actions that have been registered by the java bridge. This is the preferred mechanism for adding
     * functionality to workstation as it allows different versions of workstation to supply handlers for what that version
     * supports allowing flexibility in additional features over time with a single change in the code.
     */
    bridgeAction(payloadType: string, payloadConfig: Record<string, any>): void;
}
