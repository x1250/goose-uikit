import { LayoutProps, SpaceProps } from "../../util/CSSUtilsTypes";
export declare const animation: {
    readonly WAVES: "waves";
    readonly PULSE: "pulse";
};
export declare const variant: {
    readonly RECT: "rect";
    readonly CIRCLE: "circle";
};
export type Animation = (typeof animation)[keyof typeof animation];
export type Variant = (typeof variant)[keyof typeof variant];
export interface SkeletonProps extends SpaceProps, LayoutProps {
    animation?: Animation;
    variant?: Variant;
}
