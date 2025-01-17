import PropTypes from "prop-types";
import React from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, variants, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({ startIcon, endIcon, children, external, isLoading, disabled, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton {...internalProps} {...props} isLoading={isLoading} disabled={isDisabled}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon as React.ReactElement<any>, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon as React.ReactElement<any>, {
          ml: "0.5rem",
        })}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
  startIcon: null,
  endIcon: null,
  children: null,
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(variants)),
  size: PropTypes.oneOf(Object.values(sizes)),
  external: PropTypes.bool,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  children: PropTypes.node,
};

export default Button;
