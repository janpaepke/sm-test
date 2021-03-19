export declare type PropertyProcessors<I extends {
    [X in keyof I & keyof O]: unknown;
}, O extends {
    [X in keyof I & keyof O]: unknown;
}> = {
    [X in keyof I & keyof O]?: (value: I[X]) => O[X];
};
/**
 * A function that can be used to validate the properties of an object based on predefined rules.
 * @param options the object that should be validated
 * @param rules an object with matching keys, which defines how to normalize and or validate a property
 * @param fail A function that returns the format for the error message, should normalize or check fail.
 * @returns the normalized and checked object
 */
declare const processProperties: <I extends { [X in keyof I]: any; }, P extends { [X_1 in K]: (value: Required<I>[X_1]) => any; }, O extends { [X_2 in K]: ReturnType<P[X_2]>; }, K extends keyof I>(options: I, rules: P, fail?: (value: any, prop: keyof I, reason?: string | undefined) => string) => O;
export default processProperties;
//# sourceMappingURL=validateObject.d.ts.map