declare const registerEvent: (target: GlobalEventHandlers, type: keyof (GlobalEventHandlersEventMap & WindowEventMap), listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => (() => void);
export default registerEvent;
//# sourceMappingURL=registerEvent.d.ts.map