import { Container, ContainerEvent, ScrollParent } from './Container';
import { Scene } from './Scene';
declare type EventCallback = (e: ContainerEvent) => void;
export declare class ContainerManager {
    private readonly scene;
    private static cache;
    private container?;
    constructor(scene: Scene);
    private unsubscribers;
    attach(scrollParent: ScrollParent, onUpdate: EventCallback): void;
    detach(): void;
    get size(): Container['size'];
}
export {};
//# sourceMappingURL=ContainerManager.d.ts.map