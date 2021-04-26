import { ContainerEvent } from './Container';
import * as Options from './Options';
import ScrollMagicEvent, { ScrollMagicEventType } from './ScrollMagicEvent';
declare type ElementBounds = {
    start: number;
    size: number;
    offsetStart: number;
    offsetEnd: number;
    trackSize: number;
};
declare type ContainerBounds = {
    clientSize: number;
    offsetStart: number;
    offsetEnd: number;
    trackSize: number;
    scrollSize: number;
};
export declare class ScrollMagic {
    readonly name = "ScrollMagic";
    private readonly dispatcher;
    private readonly container;
    private readonly resizeObserver;
    private readonly viewportObserver;
    private readonly executionQueue;
    private readonly update;
    protected optionsPublic: Required<Options.Public>;
    protected optionsPrivate: Options.Private;
    protected elementBoundsCache: ElementBounds;
    protected containerBoundsCache: ContainerBounds;
    protected currentProgress: number;
    protected intersecting?: boolean;
    constructor(options?: Options.Public);
    protected getViewportMargin(): {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
    protected getTrackSize(): number;
    protected updateIntersectingState(nextIntersecting: boolean | undefined): void;
    protected updateElementBoundsCache(): void;
    protected updateContainerBoundsCache(): void;
    protected updateProgress(): void;
    protected updateViewportObserver(): void;
    protected onOptionChanges(changes: Array<keyof Options.Private>): void;
    protected onElementResize(): void;
    protected onContainerUpdate(e: ContainerEvent): void;
    protected onIntersectionChange(intersecting: boolean, target: Element): void;
    protected triggerEvent(type: ScrollMagicEventType, forward: boolean): void;
    modify(options: Options.Public): ScrollMagic;
    set element(element: Required<Options.Public>['element']);
    get element(): Required<Options.Public>['element'];
    set scrollParent(scrollParent: Required<Options.Public>['scrollParent']);
    get scrollParent(): Required<Options.Public>['scrollParent'];
    set vertical(vertical: Required<Options.Public>['vertical']);
    get vertical(): Required<Options.Public>['vertical'];
    set triggerStart(triggerStart: Required<Options.Public>['triggerStart']);
    get triggerStart(): Required<Options.Public>['triggerStart'];
    set triggerEnd(triggerEnd: Required<Options.Public>['triggerEnd']);
    get triggerEnd(): Required<Options.Public>['triggerEnd'];
    set elementStart(elementStart: Required<Options.Public>['elementStart']);
    get elementStart(): Required<Options.Public>['elementStart'];
    set elementEnd(elementEnd: Required<Options.Public>['elementEnd']);
    get elementEnd(): Required<Options.Public>['elementEnd'];
    get progress(): number;
    get scrollOffset(): {
        start: number;
        end: number;
    };
    get computedOptions(): Options.PrivateComputed;
    on(type: ScrollMagicEventType, cb: (e: ScrollMagicEvent) => void): ScrollMagic;
    off(type: ScrollMagicEventType, cb: (e: ScrollMagicEvent) => void): ScrollMagic;
    subscribe(type: ScrollMagicEventType, cb: (e: ScrollMagicEvent) => void): () => void;
    destroy(): void;
    protected static defaultOptionsPublic: Required<Options.Public>;
    static defaultOptions(options?: Options.Public): Required<Options.Public>;
}
export {};
//# sourceMappingURL=ScrollMagic.d.ts.map