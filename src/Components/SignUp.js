import {
  Box,
  Button,
  makeStyles,
  useTheme,
  Typography,
} from "@material-ui/core";
import app from "firebase/app";
import React, { useState } from "react";
import CommonSvg from "../Common/CommonSvg";
import signupBanner from "../../src/Assets/signupBanner.png";

const useStyles = makeStyles((theme) => ({
  SignupWrapper: {
    display: "grid",
    gridTemplateColumns: ".55fr .45fr",
    width: "100%",
    border: "0.05rem solid #5d5d5d38",
    borderRadius: ".2rem",
    boxShadow: "0 0 15px 0px #00000029",
  },
  formHolder: {
    backgroundColor: "#b2ebf22e",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
  },
  bannerHolder: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    filter: "blur(.1)",
  },
  loginButton: {
    position: "relative",
    minWidth: "8rem",
    height: "2.4rem",
    borderRadius: "20rem",
    padding: "0 .8rem",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "#005082",
      borderRadius: "20rem",
      zIndex: -1,
    },

    "&:hover": {
      "&::before": {
        position: "absolute",
        width: "100%",
        height: "100%",
        content: "''",
        backgroundColor: "#00263e",
        borderRadius: "20rem",
        zIndex: -1,
      },
    },
  },
  loginText: {
    fontSize: "1rem",
    color: "#ffffff",
    fontWeight: 400,
    textTransform: "none",
    letterSpacing: "0.06rem",
  },
}));
const SignUp = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box padding="0 .8rem 0 .8rem" mt="4rem">
      <Box className={classes.SignupWrapper}>
        <Box className={classes.formHolder}>
          <Box>
            <Typography
              style={{
                fontSize: "1.5rem",
                lineHeight: "2rem",
                fontWeight: "700",
                maxWidth: "70%",
                letterSpacing: "0.015rem",
              }}
            >
              Easily collect, track, and manage user feedback
            </Typography>
          </Box>
          <Box mt="1.8rem">
            <Typography
              style={{
                fontSize: "1rem",
                lineHeight: "1.6rem",
                fontWeight: "400",
                letterSpacing: "0.03rem",
              }}
            >
              Start your free 14-day trial
            </Typography>
          </Box>
          <Box mt="2rem">
            <Button className={classes.loginButton}>
              <CommonSvg type="google" width="1.4rem" />
              <Typography
                style={{ marginLeft: ".6rem" }}
                className={classes.loginText}
              >
                Continue with Google
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box className={classes.bannerHolder}>
          <img src={signupBanner} className={classes.bannerImage} />
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
