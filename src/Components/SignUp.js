import {
  Box,
  Button,
  makeStyles,
  useTheme,
  Typography,
  Avatar,
  TextField,
} from "@material-ui/core";
import app from "firebase/app";
import React, { useState, useCallback } from "react";
import CommonSvg from "../Common/CommonSvg";
import signupBanner from "../../src/Assets/signupBanner.png";
import Authentication from "../Utils/Authentication";
import GoogleLogin from "react-google-login";
import Firebase from "../Firebase/firebase";

const useStyles = makeStyles((theme) => ({
  SignupWrapper: {
    display: "grid",
    height: "48rem",
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
  createAccountButton: {
    position: "relative",
    width: "100%",
    height: "3rem",
    borderRadius: ".2rem",
    padding: "0 .8rem",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "#005082",
      borderRadius: ".2rem",
      zIndex: -1,
    },

    "&:hover": {
      "&::before": {
        position: "absolute",
        width: "100%",
        height: "100%",
        content: "''",
        backgroundColor: "#005082",
        opacity: ".85",
        borderRadius: ".2rem",
        zIndex: -1,
      },
    },
  },
  createAccountText: {
    fontSize: ".8rem",
    color: "#ffffff",
    fontWeight: 600,
    lineHeight: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.06rem",
  },
}));

const useInputFieldClasses = makeStyles((theme) => ({
  root: {
    width: "100%",
    transition:
      "background-color 80ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 80ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: ".5rem",
    position: "relative",
    backgroundColor: "#ffffff",
    border: "0.05rem solid #e6e6e6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: ".8rem 1.2rem",
    boxSizing: "border-box",
  },

  focused: {
    border: "0.05rem solid #aaa",
    outline: "none",
  },

  input: {
    fontSize: ".95rem !important",
    lineHeight: "2.2rem",
    fontWeight: "500 !important",
    letterSpacing: "0.01rem",
    color: "#333",
    fontFamily: "system-ui, sans-serif",
    wordSpacing: "0.02rem",
    padding: "0",

    "&::placeholder": {
      fontFamily: "system-ui, sans-serif",
      color: "#333",
      fontSize: ".95rem !important",
      lineHeight: "2.2rem",
      fontWeight: "500 !important",
      opacity: ".5 !important",
      letterSpacing: "0.01rem",
      wordSpacing: "0.02rem",
    },
  },
}));

const SignUp = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const inputFieldClasses = useInputFieldClasses(theme);

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
            setName(response.profileObj.name);
            setEmail(response.profileObj.email);
          } else {
            Authentication.save(response.accessToken);
            Authentication.saveUserProfile(JSON.stringify(response.profileObj));
            setName(response.profileObj.name);
            setEmail(response.profileObj.email);
            setuserExists(true);
          }
        });
      });
  };

  const handleFailure = (error) => {
    console.log(error);
  };

  //text field states and handlers
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [CompanyName, setCompanyName] = useState("");

  const handleChangeName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [Name]
  );
  const handleChangeEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [Email]
  );
  const handleChangeCompanyName = useCallback(
    (event) => {
      setCompanyName(event.target.value);
    },
    [CompanyName]
  );

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
            {!LoggedInUserToken && !userExists && (
              <GoogleLogin
                clientId={
                  "219769076647-u2hnrh6j63ciq4dqi3kssb8uqe7rknub.apps.googleusercontent.com"
                }
                render={(renderProps) => (
                  <Button
                    className={classes.loginButton}
                    onClick={renderProps.onClick}
                  >
                    <CommonSvg type="google" width="1.4rem" />
                    <Typography
                      style={{ marginLeft: ".6rem" }}
                      className={classes.loginText}
                    >
                      Continue with Google
                    </Typography>
                  </Button>
                )}
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={"single_host_origin"}
              />
            )}
          </Box>

          <Box
            mt="4rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            maxWidth="70%"
          >
            <Box
              className={classes.avatarHolder}
              display="flex"
              flexDirection="row"
              alignItems="center"
              zIndex="99"
            >
              <Avatar
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
            </Box>
            <Box
              alignSelf="flex-start"
              width="100%"
              style={{ transform: "translateY(-.25rem)" }}
            >
              <Box>
                <TextField
                  value={Name}
                  style={{ width: "100%" }}
                  onChange={handleChangeName}
                  placeholder="Full Name"
                  className={classes.MessageInput}
                  InputProps={{
                    disableUnderline: true,
                    classes: inputFieldClasses,
                  }}
                />
              </Box>
              <Box mt=".8rem">
                <TextField
                  value={Email}
                  onChange={handleChangeEmail}
                  style={{ width: "100%" }}
                  placeholder="Work Email"
                  className={classes.MessageInput}
                  InputProps={{
                    disableUnderline: true,
                    classes: inputFieldClasses,
                  }}
                />
              </Box>
              <Box mt=".8rem">
                <TextField
                  value={CompanyName}
                  onChange={handleChangeCompanyName}
                  style={{ width: "100%" }}
                  placeholder="Company/App Name"
                  className={classes.MessageInput}
                  InputProps={{
                    disableUnderline: true,
                    classes: inputFieldClasses,
                  }}
                />
              </Box>

              <Box mt=".8rem">
                <Button className={classes.createAccountButton}>
                  <Typography className={classes.createAccountText}>
                    Create free account
                  </Typography>
                </Button>
              </Box>
            </Box>
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
