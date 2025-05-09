export interface Tracer {
    done(): void;
}
export declare class InstrumentationStore {
    enabled: boolean;
    private readonly map;
    private mark;
    trace(message: string): void;
    begin(key: string): Tracer;
    reset(): void;
    report(): void;
}
