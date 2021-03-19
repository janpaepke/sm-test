export interface ControllerOptions {
    container?: Window | HTMLElement | string;
    horizontal?: boolean;
}
export declare class Controller {
    private scrollParent;
    private scrollPos;
    private scheduledUpdate;
    private horizontal;
    constructor({ container, horizontal }?: ControllerOptions);
    private update;
    private throttledUpdate;
    destroy(): null;
}
//# sourceMappingURL=Controller.d.ts.map