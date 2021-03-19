declare type Command = () => void;
declare type Prerequisite = () => boolean;
/**
 * Holds a list of commands and execute them in order.
 * If a command is added twice before executing, it will stay in the order position as before.
 * Caveats:
 * - can't override commands with existing precondition
 */
export declare class ExecutionQueue {
    protected readonly commands: Map<Command, Prerequisite | null>;
    execute(): void;
    add(command: Command, prerequisite?: Prerequisite): void;
    remove(command: Command): boolean;
    clear(): void;
}
export declare class ThrottledExecutionQueue extends ExecutionQueue {
    protected executeThrottled: ((this: unknown) => void) & {
        cancel: () => void;
    };
    schedule(command: Command, prerequisite?: Prerequisite): void;
    moveUp(): void;
    clear(): void;
}
export {};
//# sourceMappingURL=ExecutionQueue.d.ts.map