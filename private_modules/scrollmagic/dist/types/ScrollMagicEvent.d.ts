import { DispatchableEvent } from './EventDispatcher';
import { ScrollMagic } from './ScrollMagic';
export declare enum ScrollMagicEventType {
    Enter = "enter",
    Leave = "leave",
    Progress = "progress"
}
export declare enum ScrollMagicEventScrollDirection {
    Forward = "forward",
    Reverse = "reverse"
}
export declare enum ScrollMagicEventLocation {
    Start = "start",
    Inside = "inside",
    End = "end"
}
declare class ScrollMagicEvent implements DispatchableEvent {
    readonly type: ScrollMagicEventType;
    readonly target: ScrollMagic;
    readonly direction: ScrollMagicEventScrollDirection;
    readonly location: ScrollMagicEventLocation;
    constructor(type: ScrollMagicEventType, movingForward: boolean, target: ScrollMagic);
}
export default ScrollMagicEvent;
//# sourceMappingURL=ScrollMagicEvent.d.ts.map