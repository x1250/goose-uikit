import { SVGAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { SpaceProps } from "../../util/CSSUtilsTypes";
export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
    theme?: DefaultTheme;
    spin?: boolean;
}
