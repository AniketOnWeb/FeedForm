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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
  },
  loginText: {
    fontSize: "1rem",
    color: "#ffffff",
    fontWeight: 400,
    textTransform: "none",
    letterSpacing: "0.06rem",
  },
}));
const Login = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box padding="2.4rem" className={classes.HeroWrapper}>
      <Link to="signup">
        <Button className={classes.loginButton}>
          <CommonSvg type="google" width="1.4rem" />
          <Typography
            style={{ marginLeft: ".6rem" }}
            className={classes.loginText}
          >
            Sign in Using Google
          </Typography>
        </Button>
      </Link>
    </Box>
  );
};

export default Login;
