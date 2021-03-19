export declare type PropertyProcessors<I extends {
    [X in keyof I]: unknown;
}, O extends {
    [X in keyof I]: unknown;
}> = {
    [X in keyof I]: (value: Required<I>[X]) => O[X];
};
/**
 * A function that can be used to validate the properties of an object based on predefined rules.
 * @param obj the object that should be processed
 * @param processors an object with matching keys, which defines how to normalize and or validate a property
 * @param getErrorMessage A function that returns the format for the error message, should normalize or check fail.
 * @returns the normalized and checked object
 */
declare const processProperties: <I extends { [X in keyof I]: any; }, P extends { [X_1 in K]?: ((value: Required<I>[X_1]) => any) | undefined; }, O extends { [X_2 in K]: P[X_2] extends (...args: any) => infer R ? R : I[X_2]; }, K extends keyof I>(obj: I, processors: P, getErrorMessage?: (value: unknown, prop: keyof I, reason?: string | undefined) => string) => O;
export default processProperties;
//# sourceMappingURL=processProperties.d.ts.map