import { ActionDenied, ClientNotification, ErrorMessagePayload } from '../perspective-client';
import { LoginUrl } from './AuthStore';
import { ClientStore } from './ClientStore';
import { PendingUpdate } from './ResourceStore';
export declare enum NotificationType {
    GATEWAY = "gateway",
    UPDATE = "update",
    TRIAL = "trial",
    BETA = "beta",
    RECONNECT = "reconnect",
    LOADING = "loading",
    ACTION_DENIED = "action-denied",
    NO_IDP = "no-idp",
    IDLE_TIMEOUT = "idle",
    ERROR_MESSAGE = "error-message",
    FALLBACK_REDIRECT = "fallback-redirect",
    AUTH_CHALLENGE_BLOCKED = "auth-challenge-blocked"
}
export declare enum ConnectionStatus {
    CONNECTED = "connected",
    CONNECTION_LOST = "connection_lost",
    BACKUP_ACTIVE = "backup_active",
    UNKNOWN = "connection_status_unknown"
}
export declare class NotificationStore {
    client: ClientStore;
    notificationVisible: boolean;
    isMobile: boolean;
    isTablet: boolean;
    activeNotifications: Array<ClientNotification>;
    updateCount: number;
    updateTimer: number | undefined;
    idleCount: number;
    idleTimer: number | undefined;
    authChallengeBlockedCount: number;
    authChallengeBlockedTimer: number | undefined;
    authChallengeBlockedUrl: LoginUrl | undefined;
    updateMessage: string;
    actionDenied: ActionDenied | undefined;
    errorMessage: ErrorMessagePayload | undefined;
    nativeFallbackRedirectEnabled: boolean;
    nativeFallbackRedirectTimeout: number;
    login: boolean | undefined;
    constructor(client: ClientStore);
    setConnectionListener(): void;
    initNotifications(): void;
    get active(): ClientNotification[];
    get fallbackRedirectTimer(): number;
    updateNotification(notification: ClientNotification): void;
    dismissNotification(type: NotificationType): void;
    removeNotification(type: NotificationType): void;
    onFallbackRedirect(): void;
    completeIdleNotification(): void;
    idleNotification(isIdle: boolean): void;
    completeAuthChallengeBlockedNotification(): LoginUrl | undefined;
    authChallengeBlockedNotification(url: LoginUrl): void;
    backupGatewayNotification(): void;
    handleNotificationChange(type: NotificationType, requiresNotification: boolean, isPopupType: boolean, isDismissable?: boolean, removeOnDismiss?: boolean): void;
    onProjectUpdateReady(update: PendingUpdate | null): void;
    onProjectUpdateLoading(projectLoading: boolean): void;
    onTrialTimerUpdate(isTrial: boolean): void;
    onCountdownComplete(): void;
    onErrorMessage(errorMessage: ErrorMessagePayload): void;
    onActionDenied(actionDenied: ActionDenied): void;
    onNoIdP(login: boolean): void;
    clearPendingUpdate(): void;
}
