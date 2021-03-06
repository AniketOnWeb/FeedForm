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
import { withRouter, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  primaryButtonHollow: theme.primaryButtonHollow,
  navbarWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    padding: "1.2rem 3rem 0 3rem",
  },
  brandName: {
    fontFamily: "Pacifico, cursive !important",
    fontSize: "2.38rem",
    lineHeight: "5.1rem",
  },
  navbarOptions: {
    cursor: "pointer",
    lineHeight: "1.7rem",
    letterSpacing: "0.1rem",
    fontSize: "1.1rem",
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "uppercase",
    transition: "all .1s ease-in-out",

    "&:hover": {
      color: theme.colorPreset.lowEmphasis,
    },
  },
  loginButton: {
    position: "relative",
    width: "13.9rem",
    height: "5.2rem",
    borderRadius: "0",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "transparent",
      borderRadius: "0",
      zIndex: -1,
      border: ".05rem solid #ffffff",
    },
  },
  loginText: {
    cursor: "pointer",
    lineHeight: "1.7rem",
    letterSpacing: "0.1rem",
    fontSize: "1.1rem",
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  userName: {
    opacity: 0.8,
    fontSize: "1.7rem",
    color: "#162447",
    fontWeight: 600,
    textTransform: "none",
    letterSpacing: "0.017rem",
  },

  popoverRoot: {
    "& > div": {
      borderRadius: ".578rem !important",
      overflow: "hidden",
      boxShadow: "unset",
      backgroundColor: "#f9f9f9",
    },
  },

  popoverpaper: {
    minWidth: "17rem",
    height: "auto",
    marginTop: "2.04rem",
    padding: "1.02rem .68rem",
    width: "auto",
    boxShadow: "0 0 20px 1px #111d5e30 !important",
  },
  settingsText: {
    fontSize: "1.7rem",
    fontWeight: 400,
    color: "#7b7b7b",
    letterSpacing: "0.051rem",
    cursor: "pointer",
    lineHeight: "2.38rem",
  },
  setting: {
    height: "3.4rem",
    backgroundColor: "transparent",
    padding: "0 1.02rem",
    display: "flex",
    alignItems: "center",
    borderRadius: ".578rem",
    position: "relative",
    zIndex: 1,
    cursor: "pointer",

    "&:hover": {
      borderRadius: ".578rem",
      backgroundColor: "transparent",

      "&::before": {
        position: "absolute",
        width: "100%",
        height: "100%",
        content: "''",
        backgroundColor: "#005082",
        borderRadius: ".578rem",
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
      <Box className={classes.navbarWrapper}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box display="flex" flexDirection="row" alignItems="center">
            <CommonSvg type="brand" width="4.2rem" height="4.5rem" />
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" ml="6.8rem">
          {NavbarLeftOptions.map((item, i) => (
            <Box key={i} mr="3.5rem">
              <Typography className={classes.navbarOptions}>
                {item.name}
              </Typography>
            </Box>
          ))}
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
                  width: "4.08rem",
                  height: "4.08rem",
                }}
              >
                <Typography
                  id="randomTextColor"
                  style={{
                    fontSize: "2.04rem",
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
                <Box ml=".68rem">
                  <Typography className={classes.userName}>
                    {Authentication.loadUserProfile() &&
                    JSON.parse(Authentication.loadUserProfile()) &&
                    JSON.parse(Authentication.loadUserProfile()).firstName
                      ? JSON.parse(Authentication.loadUserProfile()).firstName
                      : null}
                  </Typography>
                </Box>
                <Box ml=".68rem">
                  <CommonSvg
                    type="dropdown"
                    width="1.36rem"
                    fill="#162447"
                    height="1.36rem"
                  />
                </Box>
              </Box>
            </Box>
          ) : (
            <Link to="/login">
              <Button className={classes.primaryButtonHollow}>
                <Typography className={classes.loginText}>Login</Typography>
              </Button>
            </Link>
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
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
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

export default withRouter(Navbar);
