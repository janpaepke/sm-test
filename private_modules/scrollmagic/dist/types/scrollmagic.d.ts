import * as Options from './Options';
import ScrollMagicEvent, { ScrollMagicEventType } from './ScrollMagicEvent';
export { Public as ScrollMagicOptions } from './Options';
declare type EventTypeEnumOrUnion = ScrollMagicEventType | `${ScrollMagicEventType}`;
export declare class ScrollMagic {
    readonly name = "ScrollMagic";
    private readonly dispatcher;
    private readonly container;
    private readonly resizeObserver;
    private readonly viewportObserver;
    private readonly executionQueue;
    private readonly update;
    private readonly debouncedOnFastScrollDetected;
    private optionsPublic;
    private optionsPrivate;
    private elementBoundsCache;
    private currentProgress;
    private intersecting?;
    constructor(options?: Partial<Options.Public>);
    private triggerEvent;
    modify(options: Partial<Options.Public>): ScrollMagic;
    private getViewportMargin;
    private getElementBounds;
    private getContainerBounds;
    private updateIntersecting;
    private updateElementBoundsCache;
    private updateProgress;
    private updateViewportObserver;
    private onOptionChanges;
    private onElementResize;
    private onContainerUpdate;
    private onIntersectionChange;
    private onFastScrollDetected;
    set element(element: Options.Public['element']);
    get element(): Options.Public['element'];
    set scrollParent(scrollParent: Options.Public['scrollParent']);
    get scrollParent(): Options.Public['scrollParent'];
    set vertical(vertical: Options.Public['vertical']);
    get vertical(): Options.Public['vertical'];
    set triggerStart(triggerStart: Options.Public['triggerStart']);
    get triggerStart(): Options.Public['triggerStart'];
    set triggerEnd(triggerEnd: Options.Public['triggerEnd']);
    get triggerEnd(): Options.Public['triggerEnd'];
    set elementStart(elementStart: Options.Public['elementStart']);
    get elementStart(): Options.Public['elementStart'];
    set elementEnd(elementEnd: Options.Public['elementEnd']);
    get elementEnd(): Options.Public['elementEnd'];
    get progress(): number;
    get scrollOffset(): {
        start: number;
        end: number;
    };
    get computedOptions(): Options.PrivateComputed;
    on(type: EventTypeEnumOrUnion, cb: (e: ScrollMagicEvent) => void): ScrollMagic;
    off(type: EventTypeEnumOrUnion, cb: (e: ScrollMagicEvent) => void): ScrollMagic;
    subscribe(type: EventTypeEnumOrUnion, cb: (e: ScrollMagicEvent) => void): () => void;
    destroy(): void;
    private static defaultOptionsPublic;
    static default(options?: Partial<Options.Public>): Options.Public;
}
//# sourceMappingURL=ScrollMagic.d.ts.map