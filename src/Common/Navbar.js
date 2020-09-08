import React, { useEffect } from "react";
import {
  useTheme,
  Box,
  makeStyles,
  Typography,
  Avatar,
  fade,
} from "@material-ui/core";
import CommonSvg from "./CommonSvg";

const useStyles = makeStyles((theme) => ({
  navbarWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  brandName: {
    fontFamily: "Pacifico, cursive",
    fontSize: "1.4rem",
    lineHeight: "1.8rem",
  },
  navbarOptions: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    color: "#080b26",
    letterSpacing: "0.03rem",
    cursor: "pointer",
    lineHeight: "1.8rem",
  },
}));

const bgColors = [
  "#5B84B1FF",
  "#5F4B8BFF",
  "#CDB599FF",
  "#A07855FF",
  "#00203FFF",
  "#DF6589FF",
];

const colors = [
  "#FC766AFF",
  "#E69A8DFF",
  "#42EADDFF",
  "#D4B996FF",
  "#ADEFD1FF",
  "#3C1053FF",
];

const NavbarLeftOptions = [
  {
    name: "Features",
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    const myDiv = document.getElementById("randomColor");
    if (myDiv) {
      myDiv.style.backgroundColor =
        bgColors[Math.floor(Math.random() * bgColors.length)];

      const randomTextColor = document.getElementById("randomTextColor");
      randomTextColor.style.color =
        colors[Math.floor(Math.random() * colors.length)];
    }
  }, []);
  return (
    <Box padding="1.6rem 1.6rem 0 1.6rem" className={classes.navbarWrapper}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box display="flex" flexDirection="row" alignItems="center">
          <CommonSvg type="logo" width="1.6rem" />
          <Box ml=".8rem">
            <Typography className={classes.brandName}>FeedForm</Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          ml="4rem"
          // mt=".4rem"
        >
          {NavbarLeftOptions.map((item, i) => (
            <Box key={i} mr="1.7rem">
              <Typography className={classes.navbarOptions}>
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box className={classes.avatarHolder}>
          <Avatar
            // id="randomColor"
            style={{
              width: "3rem",
              height: "3rem",
              backgroundColor: fade("#318FB5", 0.49),
            }}
          >
            <Typography
              id="randomTextColor"
              style={{
                fontSize: "1.2rem",
                fontWeight: 400,
                textShadow: "0px 2px 40px #00000020, 0px 2px 5px #00000030",
              }}
            >
              AC
            </Typography>
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
