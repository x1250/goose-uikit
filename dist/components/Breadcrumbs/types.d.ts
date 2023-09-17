import React from "react";
import { SpaceProps } from "../../util/CSSUtilsTypes";
export interface BreadcrumbsProps extends SpaceProps {
    separator?: React.ReactNode;
    children?: React.ReactNode;
}
