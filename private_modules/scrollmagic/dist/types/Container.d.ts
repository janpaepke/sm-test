import { DispatchableEvent } from './EventDispatcher';
export declare type ScrollParent = HTMLElement | Window;
declare type EventType = 'scroll' | 'resize';
export declare class ContainerEvent implements DispatchableEvent {
    readonly type: EventType;
    readonly target: Container;
    constructor(type: EventType, target: Container);
}
export declare class Container {
    readonly scrollParent: ScrollParent;
    private dimensions;
    private dispatcher;
    private cleanups;
    constructor(scrollParent: ScrollParent);
    private updateScrollPos;
    private updateDimensions;
    private subscribeResize;
    private subscribeScroll;
    subscribe(type: EventType, cb: (e: ContainerEvent) => void): () => void;
    get size(): Container['dimensions'];
    destroy(): void;
}
export {};
//# sourceMappingURL=Container.d.ts.map