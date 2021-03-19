interface RectInfo {
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
}
interface RelevantProps {
    start: 'top' | 'left';
    end: 'bottom' | 'right';
    size: 'height' | 'width';
}
declare type MatchType<T, P, K extends keyof T & keyof P> = T[K] extends P[K] ? T[K] : undefined;
/**
 * Returns the relevant property names depending on vertical or horizontal orientation.
 * @param vertical scrolldirection (true = vertical)
 */
export declare const getRelevantProps: (vertical: boolean) => RelevantProps;
/**
 * Returns the relevant boundary values depending on vertical or horizontal orientation.
 * I.E. top or left value => start, width / height => size.
 * @param obj Object to tretrieve the values from
 * @param vertical scrolldirection (true = vertical)
 */
export declare const getRelevantValues: <T extends Partial<RectInfo>>(obj: T, vertical: boolean) => {
    start: MatchType<T, RectInfo, "top"> | MatchType<T, RectInfo, "left">;
    end: MatchType<T, RectInfo, "bottom"> | MatchType<T, RectInfo, "right">;
    size: MatchType<T, RectInfo, "height"> | MatchType<T, RectInfo, "width">;
};
export {};
//# sourceMappingURL=getRelevantInfo.d.ts.map