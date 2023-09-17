import styled from "styled-components";
import { space } from "../../util/CSSUtils";
import { SpaceProps } from "../../util/CSSUtilsTypes";

export type CardHeaderProps = SpaceProps;

const CardHeader = styled.div<CardHeaderProps>`
  background: ${({ theme }) => theme.card.cardHeaderBackground};
  ${space}
`;

CardHeader.defaultProps = {
  p: "24px",
};

export default CardHeader;
