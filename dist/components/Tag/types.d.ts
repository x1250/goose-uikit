import { ReactNode } from "react";
import { SpaceProps } from "../../util/CSSUtilsTypes";
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly SUCCESS: "success";
    readonly TEXTDISABLED: "textDisabled";
    readonly TEXTSUBTLE: "textSubtle";
    readonly BINANCE: "binance";
    readonly FAILURE: "failure";
};
export type Variants = (typeof variants)[keyof typeof variants];
export interface TagProps extends SpaceProps {
    variant?: Variants;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    outline?: boolean;
    children?: ReactNode;
}
