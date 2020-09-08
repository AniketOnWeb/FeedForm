import {
  Avatar,
  Box,
  Button,
  makeStyles,
  Popover,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Authentication from "../Utils/Authentication";
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
      backgroundColor: "#005082",
      borderRadius: ".2rem",
      zIndex: -1,
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

  popoverRoot: {
    "& > div": {
      borderRadius: ".2rem !important",
      overflow: "hidden",
      boxShadow: "unset",
      backgroundColor: "#f9f9f9",
    },
  },

  popoverpaper: {
    minWidth: "10rem",
    marginRight: "2.8rem",
    height: "auto",
    marginTop: "3rem",
    padding: "1rem .4rem",
    width: "auto",
    boxShadow: "0 0 20px 1px #111d5e30 !important",
  },
  settingsText: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "#7b7b7b",
    letterSpacing: "0.03rem",
    cursor: "pointer",
    lineHeight: "1.8rem",
  },
  setting: {
    height: "2.4rem",
    backgroundColor: "transparent",
    padding: "0 .6rem",
    display: "flex",
    alignItems: "center",
    borderRadius: ".2rem",
    position: "relative",
    zIndex: 1,
    cursor: "pointer",

    "&:hover": {
      borderRadius: ".2rem",
      backgroundColor: "transparent",

      "&::before": {
        position: "absolute",
        width: "100%",
        height: "100%",
        content: "''",
        backgroundColor: "#005082",
        borderRadius: ".2rem",
        zIndex: -1,
        left: 0,
      },

      "& > p": {
        color: "#ffffff ",
      },
    },
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

const settingOptions = [
  {
    name: "Dashboard",
  },

  {
    name: "Installation",
  },
  {
    name: "Help",
  },
  {
    name: "Logout",
  },
];

const Navbar = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { userExists, setuserExists } = props;

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

  const [SettingsDropDownAnchor, setSettingsDropDownAnchor] = useState(null);
  const openSettingsDropDown = Boolean(SettingsDropDownAnchor);
  return (
    <>
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
          {Authentication.loadUserProfile() ? (
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
                onClick={(e) => setSettingsDropDownAnchor(e.currentTarget)}
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

      <Popover
        open={openSettingsDropDown}
        anchorEl={SettingsDropDownAnchor}
        onClose={() => setSettingsDropDownAnchor(null)}
        classes={{
          root: classes.popoverRoot,
          paper: classes.popoverpaper,
        }}
      >
        <Box>
          <Box className={classes.SettingsWrapper}>
            {settingOptions.map((item, i) => (
              <Box
                key={i}
                className={classes.setting}
                onClick={() => {
                  if (item.name === "Logout") {
                    Authentication.reset();
                    setuserExists(false);
                    setSettingsDropDownAnchor(null);
                  }
                }}
              >
                <Typography
                  className={classes.settingsText}
                  style={{
                    color: item.name === "Logout" && "#eb4559",
                    fontWeight: item.name === "Logout" && 500,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Navbar;
