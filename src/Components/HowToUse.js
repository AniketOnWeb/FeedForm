import {
  Box,
  makeStyles,
  Typography,
  useTheme,
  Button,
  fade,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  primaryButtonBlue: theme.primaryButtonBlue,
  buttonText: theme.buttonText,
  primaryButtonHollow: theme.primaryButtonHollow,
  Wrapper: {
    transform: "skewY(-7deg)",
    height: "73rem",
    padding: "15.5rem 0",

    "&::before": {
      position: "absolute",
      content: "''",
      width: "100vw",
      height: "100%",
      backgroundImage: "linear-gradient(to left bottom, #181818 , #4452fe14)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
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
    width: "34rem",
    height: "23rem",
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
  customButton: {
    position: "relative",
    width: "auto",
    padding: ".6rem 2rem",
    transition: "all .1s ease-in-out",
    borderRadius: "20rem",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "#00d4ff",
      zIndex: -1,
      borderRadius: "20rem",
    },
  },
}));
const HowToUse = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.Wrapper} mt="8rem">
      <Box
        style={{ transform: "skewY(7deg)" }}
        className={classes.innerWrapper}
      >
        <Box
          justifySelf="flex-start"
          alignItems="flex-start"
          display="flex"
          flexDirection="column"
        >
          <Typography className={classes.subHeading}>
            Designed for developers
          </Typography>
          <Box mt="1.4rem">
            <Typography className={classes.DetailsText}>
              Feedform works great with tools in your existing workflow{" "}
            </Typography>
          </Box>
          <Box mt="1.4rem">
            <Typography className={classes.subDetailsText}>
              Less than 5 lines of code. Choose a button or any element and
              we'll make it collect feedback.
            </Typography>{" "}
          </Box>
          <Box mt="1.8rem">
            <Button
              className={clsx(classes.primaryButtonBlue, classes.customButton)}
            >
              <Typography
                style={{ textTransform: "none", color: "#0a2540" }}
                className={classes.buttonText}
              >
                Read docs
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box className={classes.codeEDitorWrapper}></Box>
      </Box>
    </Box>
  );
};

export default HowToUse;
