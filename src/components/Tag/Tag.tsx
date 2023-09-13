import React from "react";
import PropTypes from "prop-types";
import { TagProps, variants } from "./types";
import { StyledTag } from "./StyledTag";

const Tag: React.FC<TagProps> = ({ startIcon, endIcon, children, ...props }) => (
  <StyledTag {...props}>
    {React.isValidElement(startIcon) &&
      React.cloneElement(startIcon as React.ReactElement, {
        mr: "0.5rem",
      })}
    {children}
    {React.isValidElement(endIcon) &&
      React.cloneElement(endIcon as React.ReactElement, {
        ml: "0.5rem",
      })}
  </StyledTag>
);

Tag.defaultProps = {
  variant: "primary",
  outline: false,
};

Tag.propTypes = {
  variant: PropTypes.oneOf(Object.values(variants)),
  outline: PropTypes.bool,
};

export default Tag;
