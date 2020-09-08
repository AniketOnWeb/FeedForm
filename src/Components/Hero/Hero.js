import { Box, Button, makeStyles, useTheme } from "@material-ui/core";
import app from "firebase/app";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import logoSvgData from "../../data.json";
import Firebase from "../../Firebase/firebase";
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
  const db = app.firestore();
  const LoggedInUserData = Authentication.loadUserProfile();
  const LoggedInUserToken = Authentication.load();

  const handleSuccess = (response) => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (String(response.googleId) !== String(doc.data().googleId)) {
            console.log(response);
            Firebase.register(response);
            Authentication.save(response.accessToken);
            Authentication.saveUserProfile(JSON.stringify(response.profileObj));
            setuserExists(false);
          } else {
            Authentication.save(response.accessToken);
            Authentication.saveUserProfile(JSON.stringify(response.profileObj));
            setuserExists(true);
          }
        });
      });
  };

  const handleFailure = (error) => {
    console.log(error);
  };

  //For illustration animation
  window.addEventListener("DOMContentLoaded", (event) => {
    const con = document.getElementById("hero-bg");

    if (con) {
      window.bodymovin.loadAnimation({
        container: document.getElementById("hero-bg"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: logoSvgData,
      });
    }
  });

  return (
    <Box padding="2.4rem" className={classes.HeroWrapper}>
      <Box justifySelf="flex-end">
        {!LoggedInUserToken && !userExists && (
          <GoogleLogin
            clientId={
              "219769076647-u2hnrh6j63ciq4dqi3kssb8uqe7rknub.apps.googleusercontent.com"
            }
            buttonText="Login"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </Box>
    </Box>
  );
};

export default Hero;

// <Box justifySelf="flex-start" id="hero-bg" width="50rem"></Box>;

//  <Box>
//    {LoggedInUserData &&
//    LoggedInUserData !== undefined &&
//    LoggedInUserData !== "undefined" &&
//    LoggedInUserData !== null
//      ? JSON.parse(LoggedInUserData) && JSON.parse(LoggedInUserData).name
//        ? JSON.parse(LoggedInUserData).name
//        : ""
//      : ""}

//    <Button
//      style={{ backgroundColor: "red" }}
//      onClick={() => {
//        Authentication.reset();
//        setuserExists(false);
//      }}
//    >
//      Sign out
//    </Button>
//  </Box>;
