const getDesignTokens = (type) => ({
  palette: {
    type,
    primary: {
      main: "#eb9d2a",
      dark: "rgba(205,132,7, 0.6)",
      contrastText: "#333333",
    },
    secondary: {
      main: "#d2592a",
      dark: "rgba(147, 62, 29, 0.7)",
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
      fontFamily: "Nunito Sans",
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 20px",
          textTransform: "none",
          borderStyle: "solid",
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#eb9d2a",
            "&:hover": {
              borderColor: "#eb9d2a",
              transform: "translateY(-2px)",
            },
          },
        },
        {
          props: { variant: "contained", color: "primary" },
          style: {
            borderColor: "rgba(111, 74, 20, 0.6)",
            "&:hover": {
              transform: "translateY(-2px)",
              backgroundColor: "#eb9d2a",
            },
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            borderColor: "#d2592a",
            "&:hover": {
              borderColor: "#d2592a",
              transform: "translateY(-2px)",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            borderColor: "#933E1D",
            "&:hover": {
              backgroundColor: "#d2592a",
              transform: "translateY(-2px)",
            },
          },
        },
      ],
    },
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
