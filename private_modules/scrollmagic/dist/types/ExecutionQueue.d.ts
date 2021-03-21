declare type Command = () => void;
declare type ExecutionCondition = () => boolean;
declare type CommandList<T extends string> = Record<T, QueueItem>;
/**
 * TODO! Update - this is very different now
 * Holds a list of commands and execute them in order.
 * If a command is added twice before executing, it will stay in the order position as before.
 * Caveats:
 * - can't override commands with existing precondition
 */
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