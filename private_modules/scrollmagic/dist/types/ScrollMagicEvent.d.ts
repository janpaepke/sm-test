import { DispatchableEvent } from './EventDispatcher';
import { ScrollMagic } from './ScrollMagic';
export declare enum EventType {
    Enter = "enter",
    Leave = "leave",
    Progress = "progress"
}
declare enum EventLocation {
    Start = "start",
    Inside = "inside",
    End = "end"
}
declare enum ScrollDirection {
    Forward = "forward",
    Reverse = "reverse"
}
declare type EnumToLiteral<T extends string> = `${T}`;
export declare type ScrollMagicEventType = EnumToLiteral<EventType>;
export declare type ScrollMagicEventLocation = EnumToLiteral<EventLocation>;
export declare type ScrollMagicEventScrollDirection = EnumToLiteral<ScrollDirection>;
declare class ScrollMagicEvent implements DispatchableEvent {
    readonly target: ScrollMagic;
    readonly type: ScrollMagicEventType;
    readonly location: ScrollMagicEventLocation;
    readonly direction: ScrollMagicEventScrollDirection;
    constructor(target: ScrollMagic, type: ScrollMagicEventType, movingForward: boolean);
}
export default ScrollMagicEvent;
//# sourceMappingURL=ScrollMagicEvent.d.ts.map