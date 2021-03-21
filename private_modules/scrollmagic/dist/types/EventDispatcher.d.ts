declare type EventType = string;
export interface DispatchableEvent {
    readonly target: any;
    readonly type: EventType;
}
declare type Callback<E extends DispatchableEvent> = (event: E) => void;
export default class EventDispatcher {
    private callbacks;
    addEventListener<T extends DispatchableEvent>(type: T['type'], cb: Callback<T>): () => void;
    removeEventListener<T extends DispatchableEvent>(type: T['type'], cb: Callback<T>): void;
    dispatchEvent(event: DispatchableEvent): void;
}
export {};
//# sourceMappingURL=EventDispatcher.d.ts.map