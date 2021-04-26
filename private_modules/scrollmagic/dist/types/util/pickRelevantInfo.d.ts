declare const verticalProps: {
    readonly start: "top";
    readonly end: "bottom";
    readonly size: "height";
    readonly clientSize: "clientHeight";
    readonly scrollSize: "scrollHeight";
    readonly scrollDelta: "deltaY";
};
declare const horizontalProps: {
    readonly start: "left";
    readonly end: "right";
    readonly size: "width";
    readonly clientSize: "clientWidth";
    readonly scrollSize: "scrollWidth";
    readonly scrollDelta: "deltaX";
};
declare type VerticalProps = typeof verticalProps;
declare type HorizontalProps = typeof horizontalProps;
declare type Props = keyof VerticalProps & keyof HorizontalProps;
declare type SourceProps = VerticalProps[Props] | HorizontalProps[Props];
declare type RectInfo = Record<SourceProps, number>;
declare type MatchType<T, P, K extends keyof T & keyof P> = T[K] extends P[K] ? T[K] : undefined;
export declare const pickRelevantProps: (vertical: boolean) => VerticalProps | HorizontalProps;
export declare const pickRelevantValues: <T extends Partial<RectInfo>, V extends boolean>(vertical: V, obj: T) => {
    start: MatchType<T, RectInfo, "top"> | MatchType<T, RectInfo, "left">;
    end: MatchType<T, RectInfo, "bottom"> | MatchType<T, RectInfo, "right">;
    size: MatchType<T, RectInfo, "height"> | MatchType<T, RectInfo, "width">;
    clientSize: MatchType<T, RectInfo, "clientHeight"> | MatchType<T, RectInfo, "clientWidth">;
    scrollSize: MatchType<T, RectInfo, "scrollHeight"> | MatchType<T, RectInfo, "scrollWidth">;
    scrollDelta: MatchType<T, RectInfo, "deltaY"> | MatchType<T, RectInfo, "deltaX">;
};
export {};
//# sourceMappingURL=pickRelevantInfo.d.ts.map