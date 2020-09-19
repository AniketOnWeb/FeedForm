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
    position: "relative",
    padding: "10rem 0",

    "&::before": {
      position: "absolute",
      content: "''",
      width: "100vw",
      height: "100%",
      backgroundImage: "linear-gradient(to top, #181818 -10%, #121212)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    },
  },
  innerWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  brandTitle: theme.brandTitle,
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
  container: {
    width: "100%",
    backgroundColor: "#181818",
    height: "20rem",
    borderRadius: ".8rem",
    border: "0.1rem solid #62626224",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    transition: "all .25s ease-in-out",
    boxShadow: "0 0 10px 4px #00000017",

    "&:hover": {
      border: "0.1rem solid #4452fe33",
      boxShadow: "0 0 10px 4px #0e0e0e7a",
    },
  },
}));

const procedure = [
  {
    title: "Add Widget",
    text:
      "To install the widget, all you have to do is copy the code and paste it in your body tag. And you are done!",
  },
  {
    title: "See Response",
    text:
      "When the user submits feedback you can see it in your dashboard and you can also prioritize the feature requests.",
  },
  {
    title: "Get Notified",
    text:
      "You get a notification via email, whenever the user submits the feedback.",
  },
];

const HowToUse = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.Wrapper}>
      <Box className={classes.innerWrapper}>
        <Box>
          <Typography className={classes.brandTitle}>How it works</Typography>
        </Box>
        <Box
          mt="4rem"
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          justifyContent="center"
          width="100%"
          maxWidth="calc(100% - 25rem)"
          gridGap="4rem"
        >
          {procedure.map((item, i) => (
            <Box className={classes.container}>
              <Typography
                className={classes.subDetailsText}
                style={{
                  marginTop: "3.5rem",
                  maxWidth: "unset",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  lineHeight: "2.4rem",
                  letterSpacing: "0.02rem",
                  color: "#dfdfdf",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                className={classes.subDetailsText}
                style={{
                  marginTop: "1.5rem",
                  maxWidth: "calc(100% - 5rem)",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  lineHeight: "2.4rem",
                  letterSpacing: "0.02rem",
                  textAlign: "center",
                  color: "#999999",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HowToUse;
