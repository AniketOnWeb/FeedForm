import { createMuiTheme } from "@material-ui/core/styles";

const colorPreset = {
  primary: "#4452FE",
  secondary: "#02E4C0",
  elevation6: "#1f1f1f",
  elevation12: "#2d2d2d",
  elevation18: "#3c3c3c",
  elevation24: "#4a4a4a",
  textColorWhite: "#fff",
  textColorHighEmphasis: "#e6e6e6",
  textColorDisabled: "#666666",
  contrast: "#fff",
  neutral: "#a5b3cb",
  success: "#03ae73",
  error: "#c24040",
  warning: "#df7833",
  base: "#121212",
  highEmphasis: "#E6E6E6",
  ExtrahighEmphasis: "#ffffff",
  mediumEmphasis: "#737373",
  lowEmphasis: "#999999",
  patientPrimary: "#094e87",
  baseDark1: "#181818",
  baseDark2: "#112D57",
  codeEDitor: "#0c2e4e",
  codeEDitorWrapper: "#0a2540",

  //Elevations
  textElevation: "rgba(255, 255, 255, 0.4)",
  elevation: "rgba(255, 255, 255, 0)",
  elavationLess: "rgba(255, 255, 255, 0.2)",
  elevation0: "rgba(255, 255, 255, 0.03)",
  elevation1: "rgba(255, 255, 255, 0.06)",
  elevation2: "rgba(255, 255, 255, 0.12)",
  elevation3: "rgba(255, 255, 255, 0.18)",
  elevation4: "rgba(255, 255, 255, 0.24)",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "system-ui",
  },

  breakpoints: {
    values: {
      mobile: 600,
      xs: 1080,
      sm: 1280,
      sd: 1440,
      MacScaled: 1680,
      md: 1920,
      lg: 2560,
      xl: 3840,
    },
  },

  colorPreset: {
    primary: colorPreset.primary,
    secondary: colorPreset.secondary,
    elevation: colorPreset.elevation,
    elevation6: colorPreset.elevation6,
    elevation12: colorPreset.elevation12,
    elevation18: colorPreset.elevation18,
    elevation24: colorPreset.elevation24,
    textColorWhite: colorPreset.textColorWhite,
    textColorHighEmphasis: colorPreset.textColorHighEmphasis,
    textColorDisabled: colorPreset.textColorDisabled,
    contrast: colorPreset.contrast,
    neutral: colorPreset.neutral,
    success: colorPreset.success,
    warning: colorPreset.warning,
    error: colorPreset.error,
    base: colorPreset.base,
    highEmphasis: colorPreset.highEmphasis,
    ExtrahighEmphasis: colorPreset.ExtrahighEmphasis,
    mediumEmphasis: colorPreset.mediumEmphasis,
    lowEmphasis: colorPreset.lowEmphasis,
    textElevation: colorPreset.textElevation,
    patientPrimary: colorPreset.patientPrimary,

    baseDark1: colorPreset.baseDark1,
    baseDark2: colorPreset.baseDark2,
    codeEDitorWrapper: colorPreset.codeEDitorWrapper,
    codeEDitor: colorPreset.codeEDitor,

    //Elevations
    elevation0: colorPreset.elevation0,
    elevation1: colorPreset.elevation1,
    elevation2: colorPreset.elevation2,
    elevation3: colorPreset.elevation3,
    elevation4: colorPreset.elevation4,
    elavationLess: colorPreset.elavationLess,
  },

  primaryButtonBlue: {
    position: "relative",
    width: "auto",
    borderRadius: "0",
    padding: "1rem 3.6rem",
    transition: "all .1s ease-in-out",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: colorPreset.primary,
      borderRadius: "0",
      zIndex: -1,
    },

    "&:active": {
      transform: "scale(.95)",
    },
  },
  primaryButtonHollow: {
    position: "relative",
    borderRadius: "0",
    padding: "1rem 3.6rem",
    width: "auto",
    transition: "all .4s ease",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "transparent",
      borderRadius: "0",
      zIndex: -1,
      border: ".05rem solid #ffffff",
    },

    "&:hover": {
      "&::before": {
        transition: "all .4s ease",
        position: "absolute",
        width: "100%",
        height: "100%",
        content: "''",
        backgroundColor: "#ffffff",
        borderRadius: "0",
        border: "transparent",
        zIndex: -1,
      },

      "& > span": {
        "& > p": {
          color: "#000000 !important",
        },
      },
    },

    "&:active": {
      transform: "scale(.95)",
    },
  },

  brandTitle: {
    fontSize: "3rem",
    fontWeight: "600 ",
    color: "#ffffff",
    letterSpacing: "0.06rem",
    lineHeight: "3.8rem",
  },
  buttonText: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: "0.07rem",
    lineHeight: "2.4rem",
  },

  mediumTextDark12: {
    fontSize: "3.4rem",
    fontWeight: 800,
    color: colorPreset.ExtrahighEmphasis,
    lineHeight: "2.8rem",
    letterSpacing: "0.066rem",
  },
  Commontitle: {
    fontSize: "3.2rem",
    fontWeight: 500,
    color: colorPreset.baseDark1,
    lineHeight: "5.1rem",
    letterSpacing: "0.08rem",
  },
  CommonText: {
    fontSize: "2.72rem",
    fontWeight: 400,
    color: colorPreset.mediumEmphasis,
    lineHeight: "5.1rem",
    letterSpacing: "0.051rem",
  },

  enabledButton: {
    width: "15rem",
    height: "4.2rem",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: ".578rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    minWidth: "unset",
    borderBottomRightRadius: "2.72rem",
    borderTopRightRadius: "2.72rem",
    borderTopLeftRadius: "2.72rem",

    "&::before": {
      content: "''",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "#53daf2",
      zIndex: -1,
      opacity: 0.8,
      borderBottomRightRadius: "2.72rem",
      borderTopRightRadius: "2.72rem",
      borderTopLeftRadius: "2.72rem",
    },

    "&:hover": {
      "&::before": {
        content: "''",
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#53daf2",
        zIndex: -1,
        borderBottomRightRadius: "2.72rem",
        borderTopRightRadius: "2.72rem",
        borderTopLeftRadius: "2.72rem",
        opacity: 0.8,
      },
    },
  },

  regularDisabled12: {
    fontSize: "2.04rem",
    fontWeight: 400,
    color: colorPreset.textColorDisabled,
    lineHeight: "2.72rem",
  },

  columnHeading: {
    marginBottom: "2.72rem",
    fontSize: "1.7rem",
    fontWeight: 500,
    lineHeight: "2.38rem",
    color: colorPreset.mediumEmphasis,
    letterSpacing: ".1rem",
  },
  regularNormal16: {
    fontSize: "2.72rem",
    fontWeight: 500,
    color: colorPreset.ExtrahighEmphasis,
    lineHeight: "2.2rem",
    letterSpacing: "0.051rem",
  },

  mediumDisabled12: {
    color: colorPreset.lowEmphasis,
    fontSize: "2.04rem",
    fontWeight: 500,
    lineHeight: "2.72rem",
  },
  regularHigh12: {
    fontSize: "2.04rem",
    fontWeight: 400,
    color: colorPreset.textColorHighEmphasis,
    lineHeight: "2.72rem",
  },

  normalText: {
    fontSize: "1.36rem",
    fontWeight: 500,
    color: colorPreset.mediumEmphasis,
    lineHeight: "2.38rem",
  },
  commonText: {
    fontSize: "1.7rem",
    fontWeight: 500,
    lineHeight: "2.38rem",
    letterSpacing: "0",
    color: colorPreset.highEmphasis,
    textDecoration: "none",
  },

  boldHigh24: {
    fontSize: "4.08rem",
    fontWeight: 500,
    lineHeight: "3.3rem",
    color: colorPreset.baseDark1,
    letterSpacing: "0.09rem",
  },
  boldHigh54: {
    fontSize: "5.4rem",
    fontWeight: "bold",
    lineHeight: "7.2rem",
    color: colorPreset.highEmphasis,
    letterSpacing: "0.17rem",
  },
});

export default theme;
