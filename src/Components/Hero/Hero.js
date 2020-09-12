import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  HeroWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "12rem",
  },
  brandTitle: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#38374b",
    letterSpacing: "0.06rem",
    lineHeight: "3.8rem",
  },
  brandSubTitle: {
    fontSize: "1.7rem",
    fontWeight: "400",
    color: theme.colorPreset.lowEmphasis,
    letterSpacing: "0.02rem",
    lineHeight: "2.4rem",
    marginTop: "2rem",
    maxWidth: "34rem",
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
    <Box padding="0 3rem" mt="6rem" className={classes.HeroWrapper}>
      <Box justifySelf="flex-start">
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography className={classes.brandTitle}>
            Collect feedback from customers and teammates
          </Typography>
          <Typography className={classes.brandSubTitle}>
            Drop your messy spreadsheets. Stop letting ideas slip through the
            cracks. Manage and organize all feedback in one tool.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
