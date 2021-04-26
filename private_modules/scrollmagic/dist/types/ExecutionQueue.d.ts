declare type Command = () => void;
declare type ExecutionCondition = () => boolean;
declare type CommandList<T extends string> = Record<T, QueueItem>;
declare class QueueItem {
    readonly execute: Command;
    protected readonly onSchedule: () => void;
    protected conditions: ExecutionCondition[];
    constructor(execute: Command, onSchedule: () => void);
    schedule(condition?: ExecutionCondition): void;
    resetConditions(): void;
    get conditionsMet(): boolean;
}
export declare class ExecutionQueue<C extends string> {
    readonly commands: CommandList<C>;
    protected executeThrottled: ((this: unknown) => void) & {
        cancel: () => void;
    };
    constructor(queueItems: Record<C, Command>);
    execute(): void;
    cancel(): void;
}
export {};
//# sourceMappingURL=ExecutionQueue.d.ts.map