"use client";
import * as React from "react";
import PropTypes from "prop-types";
import { styled, useThemeProps } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ButtonContainer = styled("div", {
  name: "MuiButtonLyman",
  slot: "root",
})(({ theme }) => ({
  display: "inline-block",
  position: "relative",
}));

const ButtonValue = styled(Button, {
  name: "MuiButtonLyman",
  slot: "value",
})(({ theme, variant, color }) => ({
  transition: "transform 250ms ease-in-out",
  zIndex: 0,
  "&:active": {
    transform: "translateY(16px)",
  },
  ...(variant === "outlined" &&
    (color === "primary" || color === "secondary") && {
      backgroundColor: theme.palette.background.default,
    }),

  "&:hover": {
    ...(variant === "outlined" &&
      (color === "primary" || color === "secondary") && {
        backgroundColor: theme.palette.background.default,
      }),
  },
}));

const ButtonBottom = styled("div", {
  name: "MuiButtonLyman",
  slot: "bottom",
})(({ theme, variant, color }) => ({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  borderStyle: "solid",
  borderWidth: "2px",
  borderRadius: "8px",
  position: "absolute",
  top: "6px",
  zIndex: -1,
  ...(variant === "contained" &&
    color === "primary" && {
      backgroundColor: theme.palette.primary.dark,
      borderColor: "rgb(161, 100, 9)",
    }),
  ...(variant === "outlined" &&
    color === "primary" && {
      backgroundColor: theme.palette.primary.dark,
      borderColor: "rgb(186, 115, 19)",
    }),

  ...(variant === "contained" &&
    color === "secondary" && {
      backgroundColor: theme.palette.secondary.dark,
      borderColor: "#692C14",
    }),
  ...(variant === "outlined" &&
    color === "secondary" && {
      backgroundColor: theme.palette.secondary.dark,
      borderColor: "#7E3519",
    }),
}));

const DtcButton = React.forwardRef(function Stat(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "MuiButtonLyman" });
  const { value, variant, color, ...other } = props;

  const buttonstate = { ...props, variant };

  return (
    <ButtonContainer ref={ref} {...other}>
      <ButtonValue variant={variant} color={buttonstate.color}>
        {value}
      </ButtonValue>
      <ButtonBottom variant={variant} color={buttonstate.color}></ButtonBottom>
    </ButtonContainer>
  );
});

DtcButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(["outlined", "contained"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "success",
    "info",
    "warning",
  ]),
};

export default DtcButton;
