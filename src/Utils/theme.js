import { createMuiTheme } from "@material-ui/core/styles";

const colorPreset = {
  primary: "#0f6ebe",
  secondary: "#69cdff",
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
  lowEmphasis: "#666666",
  patientPrimary: "#094e87",
  baseDark1: "#2f2f2f",

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
    fontFamily: "Poppins",
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
    //Elevations
    elevation0: colorPreset.elevation0,
    elevation1: colorPreset.elevation1,
    elevation2: colorPreset.elevation2,
    elevation3: colorPreset.elevation3,
    elevation4: colorPreset.elevation4,
    elavationLess: colorPreset.elavationLess,
  },

  mediumTextDark12: {
    fontSize: "2rem",
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
    fontSize: "1.6rem",
    fontWeight: 400,
    color: colorPreset.mediumEmphasis,
    lineHeight: "3rem",
    letterSpacing: "0.03rem",
  },

  enabledButton: {
    width: "15rem",
    height: "4.2rem",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: ".2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    minWidth: "unset",
    borderBottomRightRadius: "1.6rem",
    borderTopRightRadius: "1.6rem",
    borderTopLeftRadius: "1.6rem",

    "&::before": {
      content: "''",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "#53daf2",
      zIndex: -1,
      opacity: 0.8,
      borderBottomRightRadius: "1.6rem",
      borderTopRightRadius: "1.6rem",
      borderTopLeftRadius: "1.6rem",
    },

    "&:hover": {
      "&::before": {
        content: "''",
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#53daf2",
        zIndex: -1,
        borderBottomRightRadius: "1.6rem",
        borderTopRightRadius: "1.6rem",
        borderTopLeftRadius: "1.6rem",
        opacity: 0.8,
      },
    },
  },

  regularDisabled12: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: colorPreset.textColorDisabled,
    lineHeight: "1.6rem",
  },

  columnHeading: {
    marginBottom: "1.6rem",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.4rem",
    color: colorPreset.mediumEmphasis,
    letterSpacing: ".1rem",
  },
  regularNormal16: {
    fontSize: "1.6rem",
    fontWeight: 500,
    color: colorPreset.ExtrahighEmphasis,
    lineHeight: "2.2rem",
    letterSpacing: "0.03rem",
  },

  mediumDisabled12: {
    color: colorPreset.lowEmphasis,
    fontSize: "1.2rem",
    fontWeight: 500,
    lineHeight: "1.6rem",
  },
  regularHigh12: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: colorPreset.textColorHighEmphasis,
    lineHeight: "1.6rem",
  },

  normalText: {
    fontSize: ".8rem",
    fontWeight: 500,
    color: colorPreset.mediumEmphasis,
    lineHeight: "1.4rem",
  },
  commonText: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.4rem",
    letterSpacing: "0",
    color: colorPreset.highEmphasis,
    textDecoration: "none",
  },

  boldHigh24: {
    fontSize: "2.4rem",
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
    letterSpacing: "0.06rem",
  },
});

export default theme;
