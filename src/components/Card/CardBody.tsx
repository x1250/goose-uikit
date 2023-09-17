import styled from "styled-components";
import { space } from "../../util/CSSUtils";
import { SpaceProps } from "../../util/CSSUtilsTypes";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  ${space}
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
