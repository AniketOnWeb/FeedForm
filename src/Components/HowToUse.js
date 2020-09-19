import {
  Box,
  makeStyles,
  Typography,
  useTheme,
  Button,
  fade,
  Fade,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  primaryButtonBlue: theme.primaryButtonBlue,
  buttonText: theme.buttonText,
  primaryButtonHollow: theme.primaryButtonHollow,
  Wrapper: {
    padding: "10rem 0",
    position: "relative",
  },
  innerWrapper: {
    padding: "0 3rem 0 5rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  subHeading: {
    color: "#00d4ff",
    fontSize: "1.7rem",
    fontWeight: "600",
    letterSpacing: "0.02rem",
    lineHeight: "2.8rem",
    textAlign: "center",
  },
  codeEDitorWrapper: {
    width: "90%",
    backgroundColor: theme.colorPreset.codeEDitorWrapper,
    borderRadius: ".8rem",
  },
  DetailsText: {
    fontSize: "3rem",
    fontWeight: "600",
    color: "#ffffff",
    letterSpacing: "0.06rem",
    lineHeight: "3.8rem",
    maxWidth: "calc(100% - 16rem)",
    textAlign: "left",
  },
  subDetailsText: {
    fontSize: "1.4rem",
    fontWeight: "300",
    color: "#ffffff",
    letterSpacing: "0.06rem",
    maxWidth: "calc(100% - 18rem)",
    lineHeight: "2.4rem",
  },
}));

const HowToUse = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.Wrapper} mt="8rem">
      <Box className={classes.innerWrapper}>HowToUse</Box>
    </Box>
  );
};

export default HowToUse;
