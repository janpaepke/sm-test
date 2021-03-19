declare type PixelConverter = (size: number) => number;
declare type UnitString = `${number}px` | `${number}%`;
declare const centerShorthand = "center";
export declare const numberToPercString: (val: number) => string;
export declare const unitStringToPixelConverter: (val: UnitString) => PixelConverter;
export declare const toPixelConverter: (val: number | UnitString | typeof centerShorthand | PixelConverter) => PixelConverter;
export declare const selectorToSingleElement: (selector: string) => Element;
export declare const toSvgOrHtmlElement: (reference: Element | string) => HTMLElement | SVGElement;
export declare const toValidScrollParent: (container: Window | Document | Element | string) => Window | HTMLElement;
export declare const nullPassThrough: <F extends (val: any) => any>(func: F) => (val: Parameters<F>[0] | null) => ReturnType<F> | null;
export declare const toNonNullable: <T extends unknown>(val: T, recover: () => NonNullable<T>) => NonNullable<T>;
export declare const toBoolean: (val: unknown) => boolean;
export {};
//# sourceMappingURL=transformers.d.ts.map