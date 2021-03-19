declare const debounce: <F extends (...args: any) => ReturnType<F>>(func: F, wait: number) => ((...args: Parameters<F>) => ReturnType<F>) & {
    cancel: () => void;
};
export default debounce;
//# sourceMappingURL=debounce.d.ts.map