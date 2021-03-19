declare type Margin = {
    top: string;
    right: string;
    bottom: string;
    left: string;
};
interface Options {
    root?: Element | null;
    margin?: Margin;
}
declare type ObserverCallback = (isIntersecting: boolean, target: Element) => void;
export default class ViewportObserver {
    private callback;
    private observerEnter?;
    private observerLeave?;
    private options;
    private observedElements;
    constructor(callback: ObserverCallback, options?: Options);
    private observerCallback;
    private createObserver;
    private rebuildObserver;
    private optionsChanged;
    modify(options: Options): ViewportObserver;
    observe(elem: Element): ViewportObserver;
    unobserve(elem: Element): ViewportObserver;
    disconnect(): void;
}
export {};
//# sourceMappingURL=ViewportObserver.d.ts.map