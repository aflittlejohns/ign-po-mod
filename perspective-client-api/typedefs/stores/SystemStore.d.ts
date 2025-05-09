import { GatewayInfo, LicenseState, ModuleInfo } from "../perspective-client";
import { ClientStore } from './ClientStore';
export declare const GATEWAY_INFO_HANDLER = "systemStore/gateway-info";
export declare const MODULES_INFO_HANDLER = "systemStore/modules-info";
export declare const LICENSE_PERMIT_UPDATE = "systemStore/license-info";
export declare enum NotLicensedReason {
    TRIAL_EXPIRED = "trial-expired",
    SESSIONS_EXCEEDED = "sessions-exceeded",
    MOBILE_ONLY = "mobile-only",
    NO_WORKSTATION = "no-workstation",
    NOT_LICENSED = "not-licensed",
    UNKNOWN = "unknown"
}
/**
 * A store for system information, generally meta-info relating not to the project, but to the client, gateway,
 * modules, etc.
 */
export declare class SystemStore {
    client: ClientStore;
    gateway: GatewayInfo;
    modules: Array<ModuleInfo>;
    trial: boolean;
    trialRemaining: number;
    private trialRemainingUpdateTimer;
    licenseNotPermittedReason: NotLicensedReason;
    isLegacyLicense: boolean;
    constructor(client: ClientStore);
    get url(): string;
    get isTrial(): boolean;
    /**
     * returns true if the gateway is not part of a redundant pair.  Defaults to independent
     */
    get isIndependent(): boolean;
    /**
     * method assigned to the 'systemStore/gateway-info' message handling protocol.  A json object with the shape
     * matching GatewayInfo should be returned when gateway details change.
     * @param gatewayInfo
     */
    updateGatewayInfo(gatewayInfo: GatewayInfo): void;
    /**
     * Updates the array of module infos, which is used to present module details in the client application.  Will
     * replace the existing array.  This method is assigned to the 'systemStore/module-info' handler.
     *
     * @param modules an array containing objects with information for each module.
     */
    updateModuleInfo(modules: Array<ModuleInfo>): void;
    updateLicenseState(license: LicenseState): void;
    private decrementTrialRemaining;
}
