"use client";

const getDesignTokens = (type) => ({
  palette: {
    type,
    primary: {
      main: "#e8a53f",
      // light: "",
      // dark: "",
      contrastText: "#333333",
    },
    secondary: {
      main: "#d2592a",
      contrastText: "#333333",
    },
    error: {
      main: "#f64e00",
      contrastText: "#333333",
    },
    success: {
      main: "#6aa84f",
    },
    divider: "#4a4c52",
    info: {
      main: "#006494",
    },
    warning: {
      main: "#b52ad9",
      contrastText: "#333333",
    },
    ...(type === "light"
      ? {
          background: {
            default: "#fff",
            paper: "#fafafa",
          },
        }
      : {
          background: {
            default: "#1b1b1b",
            paper: "#303234",
          },
        }),
  },
  typography: {
    fontFamily: "IBM Plex Sans",
    button: {
      fontFamily: "IBM Plex Sans",
      fontSize: "15px",
      fontWeight: 700,
      lineHeight: 1.6,
    },
    h1: {
      fontFamily: "Nunito Sans",
      fontWeight: 600,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontFamily: "Lora",
      fontSize: "1.9rem",
      fontWeight: 500,
      lineHeight: 2.01,
    },
    body1: {
      fontFamily: "IBM Plex Sans",
    },
    caption: {
      fontSize: "1.9rem",
    },
    overline: {
      fontFamily: "Droid Serif",
      fontSize: "1.2rem",
    },
  },
  spacing: 8,
  // direction: "rtl",
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiButton: {
      size: "small",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
  },
});
export default getDesignTokens;
