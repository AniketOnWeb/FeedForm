import {
  Box,
  makeStyles,
  Typography,
  useTheme,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  HeroWrapper: {},
  primaryButtonBlue: theme.primaryButtonBlue,
  buttonText: theme.buttonText,
  primaryButtonHollow: theme.primaryButtonHollow,
  brandTitle: {
    fontSize: "8rem",
    fontWeight: "600 ",
    color: "#ffffff",
    letterSpacing: "0.02rem",
    lineHeight: "8.8rem",
    maxWidth: "calc(100% - 20rem)",
    textAlign: "center",
  },
  brandSubTitle: {
    fontSize: "2rem",
    fontWeight: "400",
    color: "#ffffff",
    letterSpacing: "0.02rem",
    lineHeight: "3rem",
    marginTop: "1.7rem",
  },
  loginButton: {
    position: "relative",
    minWidth: "13.6rem",
    height: "4.08rem",
    borderRadius: "34rem",
    padding: "0 1.36rem",
    transition: "all .1s ease-in-out",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "#005082",
      borderRadius: "34rem",
      zIndex: 1,
    },

    "&:active": {
      transform: "scale(.95)",
    },

    "&:hover": {
      "&::before": {
        position: "absolute",
        width: "100%",
        height: "100%",
        content: "''",
        backgroundColor: "#00263e",
        borderRadius: "57.8rem",
        zIndex: 1,
      },
    },
  },
  loginText: {
    fontSize: "1.7rem",
    color: "#ffffff",
    fontWeight: 400,
    textTransform: "none",
    letterSpacing: "0.17rem",
  },
  buttonAnimatedArrow: {
    width: "1.2rem",
    height: "1.2rem",
    boxSizing: "border-box",
    transform: "rotate(45deg)",

    "&::before": {
      content: "''",
      width: "100%",
      height: "100%",
      borderWidth: ".2rem .2rem 0 0",
      borderStyle: "solid",
      borderColor: "#fafafa",
      transition: ".2s ease",
      display: "block",
      transformOrigin: "100% 0",
    },

    "&::after": {
      content: "''",
      float: "left",
      position: "relative",
      top: "-100%",
      width: "100%",
      height: "100%",
      borderWidth: "0 .2rem 0 0",
      borderStyle: "solid",
      borderColor: "#fafafa",
      transition: ".2s ease",
      display: "block",
      transformOrigin: "100% 0",
    },

    // "&:hover": {
    //   "&::before": {
    //     borderColor: "red",
    //     transform: "scale(.8)",
    //   },

    //   "&::after": {
    //     borderColor: "red",
    //     transform: "rotate(45deg)",
    //     height: "120%",
    //   },
    // },
  },
}));
const Hero = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { userExists, setuserExists } = props;

  //For illustration animation
  // window.addEventListener("DOMContentLoaded", (event) => {
  //   const con = document.getElementById("hero-bg");

  //   if (con) {
  //     window.bodymovin.loadAnimation({
  //       container: document.getElementById("hero-bg"),
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       animationData: logoSvgData,
  //     });
  //   }
  // });

  return (
    <Box className={classes.HeroWrapper} mt="8.5rem">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography className={classes.brandTitle}>
          Collect feedback from customers and teammates
        </Typography>
        <Typography
          className={classes.brandSubTitle}
          style={{ marginTop: "2.7rem", padding: "1rem" }}
        >
          Collect feedback with a quick 2 step widget addition
        </Typography>
        <Box mt="9.5rem">
          <Button className={classes.primaryButtonBlue}>
            <Typography
              className={classes.buttonText}
              style={{ textTransform: "none" }}
            >
              See Pricing Info
            </Typography>
          </Button>

          <Button
            className={classes.primaryButtonHollow}
            style={{ marginLeft: "3.5rem" }}
          >
            <Typography
              className={classes.buttonText}
              style={{ textTransform: "none" }}
            >
              Get Started
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

// <Button className={classes.loginButton}>
//   <Box style={{ zIndex: 2, display: "flex" }}>
//     <Typography style={{ marginLeft: "1rem" }} className={classes.loginText}>
//       Continue with Google
//     </Typography>
//     <Box className={classes.buttonAnimatedArrow}></Box>
//   </Box>
// </Button>;
