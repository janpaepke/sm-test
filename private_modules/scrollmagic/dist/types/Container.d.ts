import { DispatchableEvent } from './EventDispatcher';
export declare type ScrollParent = HTMLElement | Window;
declare type ScrollDelta = {
    deltaX: number;
    deltaY: number;
};
declare type EventType = 'scroll' | 'resize';
export declare class ContainerEvent implements DispatchableEvent {
    readonly target: Container;
    readonly type: EventType;
    readonly scrollDelta: ScrollDelta;
    constructor(target: Container, type: EventType, scrollDelta?: ScrollDelta);
}
export declare class Container {
    readonly scrollParent: ScrollParent;
    private dimensions;
    private scrollPos;
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