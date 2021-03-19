declare const throttleRaf: <F extends (...a: any) => any>(func: F) => ((this: ThisParameterType<F>, ...args: Parameters<F>) => void) & {
    cancel: () => void;
};
export default throttleRaf;
//# sourceMappingURL=scheduleRaf.d.ts.map