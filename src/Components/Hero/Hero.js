import { Box, makeStyles, useTheme } from "@material-ui/core";
import app from "firebase/app";
import React from "react";
import Authentication from "../../Utils/Authentication";

const useStyles = makeStyles((theme) => ({
  HeroWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "12rem",
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
    <Box padding="2.4rem" className={classes.HeroWrapper}>
      <Box justifySelf="flex-end"></Box>
    </Box>
  );
};

export default Hero;
