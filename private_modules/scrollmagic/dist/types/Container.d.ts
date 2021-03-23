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
    /**
     * TODO: Currently we have no way of detecting, when physical scrollbars appear or disappear, which should technically trigger a resize event.
     * One potential way of getting around this would be to add an additional resize observer to the documentElement and detect when it crosses 100% of the container's client size (either in or out)
     * But this seems quite hacky and code intense for this edge case scenario. It would also work for document scrolls, not for Element scrolls.
     */
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