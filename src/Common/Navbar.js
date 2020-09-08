import React, { useEffect, useState } from "react";
import {
  useTheme,
  Box,
  makeStyles,
  Typography,
  Avatar,
  fade,
  Button,
} from "@material-ui/core";
import CommonSvg from "./CommonSvg";
import Authentication from "../Utils/Authentication";

const useStyles = makeStyles((theme) => ({
  navbarWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  brandName: {
    fontFamily: "Pacifico, cursive !important",
    fontSize: "1.4rem",
    lineHeight: "1.8rem",
  },
  navbarOptions: {
    fontWeight: 500,
    color: "#080b26",
    letterSpacing: "0.03rem",
    cursor: "pointer",
    lineHeight: "1.8rem",
  },
  loginButton: {
    position: "relative",
    width: "8rem",
    height: "2.4rem",
    borderRadius: ".2rem",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      // backgroundImage:
      //   "linear-gradient(90deg, rgba(8,174,234,1) 0%, rgba(32,255,153,1) 100%, rgba(248,249,255,1) 100%)",
      backgroundColor: "#005082",
      borderRadius: ".2rem",
      zIndex: -1,
      // opacity: 0.7,
    },
  },
  loginText: {
    fontSize: "1rem",
    color: "#ffffff",
    fontWeight: 600,
    textTransform: "none",
    letterSpacing: "0.06rem",
  },
  userName: {
    opacity: 0.8,
    fontSize: "1rem",
    color: "#162447",
    fontWeight: 600,
    textTransform: "none",
    letterSpacing: "0.01rem",
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

  const [loggedIn, setloggedIn] = useState(true);

  return (
    <Box padding="1rem .8rem 0 .8rem" className={classes.navbarWrapper}>
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
        {loggedIn ? (
          <Box
            className={classes.avatarHolder}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Avatar
              // id="randomColor"
              src={
                Authentication.loadUserProfile() &&
                JSON.parse(Authentication.loadUserProfile()) &&
                JSON.parse(Authentication.loadUserProfile()).imageUrl
                  ? JSON.parse(Authentication.loadUserProfile()).imageUrl
                  : null
              }
              style={{
                width: "3rem",
                height: "3rem",
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
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              style={{ cursor: "pointer" }}
            >
              <Box ml=".4rem">
                <Typography className={classes.userName}>Aniket</Typography>
              </Box>
              <Box ml=".4rem">
                <CommonSvg
                  type="dropdown"
                  width=".8rem"
                  fill="#162447"
                  height=".8rem"
                />
              </Box>
            </Box>
          </Box>
        ) : (
          <Box>
            <Button className={classes.loginButton}>
              <Typography className={classes.loginText}>Login</Typography>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
