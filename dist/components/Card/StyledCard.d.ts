/// <reference types="react" />
import { DefaultTheme } from "styled-components";
import { CardProps } from "./types";
interface StyledCardProps extends CardProps {
    theme: DefaultTheme;
}
declare const StyledCard: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledCardProps>>;
export default StyledCard;
