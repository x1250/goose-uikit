import { SpaceProps, FlexboxProps, LayoutProps } from "./CSSUtilsTypes";
export declare const space: <T extends SpaceProps & {
    [key: string]: any;
}>(props: T) => string;
export declare const flexbox: (props: FlexboxProps) => string;
export declare const layout: (props: LayoutProps) => string;
