import { ConnectionState, MessageHandler, PlainObject, CloseEventDefinition, SocketInitResponse } from '../perspective-client';
import { ClientStore } from './ClientStore';
/**
 * ChannelStore holds the websocket connection to the gateway and is used to send messages and register
 * handlers for receiving messages.
 */
export declare class ChannelStore {
    /**
     * Maximum time allowed after last message was processed before triggering disconnect
     */
    maxIdleTimeMs: number;
    /**
     * Interval between idle checks
     */
    idleTimeIntervalMs: number;
    client: ClientStore;
    webSocket: WebSocket | null;
    handlers: Map<string, MessageHandler>;
    closeEventDefinitions: {
        [key: string]: CloseEventDefinition;
    };
    status: ConnectionState;
    lastIdleCheck: number;
    constructor(client: ClientStore);
    socketInit(json: SocketInitResponse): void;
    private idleTimeCheck;
    get connected(): boolean;
    get isSecure(): boolean;
    connect(): void;
    private makeOnOpenCallback;
    private makeOnCloseCallback;
    getCloseEventDefinition(code: number): CloseEventDefinition;
    send(protocol: string, payload: PlainObject): void;
    protected processMessage(event: PlainObject): void;
    disconnect(message?: string, beginTransition?: boolean): void;
}
