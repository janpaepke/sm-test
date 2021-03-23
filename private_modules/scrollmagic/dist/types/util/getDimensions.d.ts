interface Dimensions {
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
}
declare const getDimensions: (element: Window | Element) => Dimensions;
export default getDimensions;
//# sourceMappingURL=getDimensions.d.ts.map