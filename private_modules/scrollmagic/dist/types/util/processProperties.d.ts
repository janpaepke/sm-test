export declare type PropertyProcessors<I extends {
    [X in keyof I]: unknown;
}, O extends {
    [X in keyof I]: unknown;
}> = {
    [X in keyof I]: (value: Required<I>[X]) => O[X];
};
declare const processProperties: <I extends { [X in keyof I]: any; }, P extends { [X_1 in K]?: ((value: Required<I>[X_1]) => any) | undefined; }, O extends { [X_2 in K]: P[X_2] extends (...args: any) => infer R ? R : I[X_2]; }, K extends keyof I>(obj: I, processors: P, getErrorMessage?: (value: unknown, prop: keyof I, reason?: string | undefined) => string) => O;
export default processProperties;
//# sourceMappingURL=processProperties.d.ts.map