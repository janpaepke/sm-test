/**
 * Adds the passed listener as an event listener to the passed event target, and returns a function which reverses the
 * effect of this function.
 * @param {*} target object the listener should be attached to
 * @param {*} type type of listener
 * @param {*} listener callback
 * @param {*} options Event listener options
 */
declare const registerEvent: (target: GlobalEventHandlers, type: keyof (GlobalEventHandlersEventMap & WindowEventMap), listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => (() => void);
export default registerEvent;
//# sourceMappingURL=registerEvent.d.ts.map