import { Container, ContainerEvent, ScrollParent } from './Container';
import { ScrollMagic } from './ScrollMagic';
declare type EventCallback = (e: ContainerEvent) => void;
export declare class ContainerProxy {
    private readonly scene;
    private static cache;
    private container?;
    constructor(scene: ScrollMagic);
    private unsubscribers;
    attach(scrollParent: ScrollParent, onUpdate: EventCallback): void;
    detach(): void;
    get rect(): Container['size'];
}
export {};
//# sourceMappingURL=ContainerProxy.d.ts.map