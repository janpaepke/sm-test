export declare class ScrollMagicError extends Error {
    readonly name: string;
    constructor(message: string);
}
export declare class ScrollMagicErrorInternal extends ScrollMagicError {
    constructor(message: string);
}
export declare const failWith: (message: string) => ScrollMagicError;
export declare const failWithInternal: (message: string) => ScrollMagicErrorInternal;
export declare const warn: (first: unknown, ...args: unknown[]) => void;
//# sourceMappingURL=ScrollMagicError.d.ts.map