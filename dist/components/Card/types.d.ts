import React from "react";
import { HTMLAttributes } from "react";
import { SpaceProps } from "../../util/CSSUtilsTypes";
import { Colors } from "../../theme/types";
export interface CardRibbonProps {
    variantColor?: keyof Colors;
    text: string;
}
export type CardTheme = {
    background: string;
    boxShadow: string;
    boxShadowActive: string;
    boxShadowSuccess: string;
    boxShadowWarning: string;
    cardHeaderBackground: string;
    dropShadow: string;
};
export interface CardProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isDisabled?: boolean;
    ribbon?: React.ReactNode;
}
