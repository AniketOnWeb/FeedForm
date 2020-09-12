import {
  Box,
  Button,
  makeStyles,
  useTheme,
  Typography,
  Avatar,
  TextField,
  Fade,
  Grow,
} from "@material-ui/core";
import app from "firebase/app";
import React, { useState, useCallback, useEffect } from "react";
import CommonSvg from "../Common/CommonSvg";
import signupBanner from "../../src/Assets/signupBanner.png";
import Authentication from "../Utils/Authentication";
import GoogleLogin from "react-google-login";
import Firebase from "../Firebase/firebase";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  SignupWrapper: {
    display: "grid",
    height: "81.6rem",
    gridTemplateColumns: ".55fr .45fr",
    width: "100%",
    border: "0.085rem solid #5d5d5d38",
    borderRadius: "0.578rem",
    boxShadow: "0 0 15px 0px #00000029",
  },
  formHolder: {
    backgroundColor: "#b2ebf22e",
    padding: "5.1rem",
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
  createAccountButton: {
    position: "relative",
    width: "100%",
    height: "4.59rem",
    borderRadius: "0.578rem",
    padding: "0 1.36rem",
    transition: "all .2s ease-in-out",

    "&:active": {
      transform: "scale(.95)",
    },

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "#005082",
      borderRadius: "0.578rem",
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
        borderRadius: "0.578rem",
        zIndex: -1,
      },
    },
  },
  createAccountText: {
    fontSize: "1.27rem",
    color: "#ffffff",
    fontWeight: 600,
    lineHeight: "inherit",
    textTransform: "uppercase",
    letterSpacing: "0.17rem",
  },
}));

const useInputFieldClasses = makeStyles((theme) => ({
  root: {
    width: "100%",
    transition:
      "background-color 80ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 80ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "0.85rem",
    position: "relative",
    backgroundColor: "#ffffff",
    border: "0.085rem solid #e6e6e6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.36rem 2.04rem",
    boxSizing: "border-box",
  },

  focused: {
    border: "0.085rem solid #aaa",
    outline: "none",
  },

  input: {
    fontSize: "1.6rem !important",
    fontWeight: "500 !important",
    letterSpacing: "0.017rem",
    color: "#333",
    fontFamily: "system-ui, sans-serif",
    wordSpacing: "0.034rem",
    padding: "0",
    lineHeight: "normal",

    "&::placeholder": {
      fontFamily: "system-ui, sans-serif",
      color: "#333",
      fontSize: "1.6rem !important",
      fontWeight: "500 !important",
      opacity: ".5 !important",
      letterSpacing: "0.017rem",
      wordSpacing: "0.034rem",
      lineHeight: "normal",
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
  const [showSignupForm, setshowSignupForm] = useState(false);
  const [signUpDataState, setsignUpDataState] = useState({});
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [profilePicture, setprofilePicture] = useState();

  let signUpData = {};

  const handleSuccess = (response) => {
    signUpData.firstName = response.profileObj.givenName;
    signUpData.lastName = response.profileObj.familyName;
    signUpData.imageUrl = response.profileObj.imageUrl;
    signUpData.googleId = response.profileObj.googleId;
    signUpData.email = response.profileObj.email;
    signUpData.fullName = response.profileObj.name;
    signUpData.accessToken = response.accessToken;

    setsignUpDataState(signUpData);
    setshowSignupForm(true);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setprofilePicture(response.profileObj.imageUrl);
  };

  const handleFailure = (error) => {
    console.log("error", error);
    setshowSignupForm(false);
  };

  const handleCreateAccount = () => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length && querySnapshot.docs.length > 0) {
          querySnapshot.forEach((doc) => {
            if (
              String(signUpDataState.googleId) !== String(doc.data().googleId)
            ) {
              Firebase.register(signUpDataState);
              Authentication.save(signUpDataState.accessToken);
              Authentication.saveUserProfile(JSON.stringify(signUpDataState));
              setuserExists(false);
              setshowSignupForm(false);
              goTo("/");
            } else {
              alert("user already exists");
              Authentication.save(signUpDataState.accessToken);
              Authentication.saveUserProfile(JSON.stringify(signUpDataState));
              setuserExists(true);
              setshowSignupForm(false);
              goTo("/");
            }
          });
        } else {
          Firebase.register(signUpDataState);
          Authentication.save(signUpDataState.accessToken);
          Authentication.saveUserProfile(JSON.stringify(signUpDataState));
          setuserExists(false);
          setshowSignupForm(false);
          goTo("/");
        }
      });
  };

  const goTo = (place) => {
    props.history.push(place);
  };
  //Text field handlers
  const handleChangeName = useCallback(
    (event) => {
      setName(event.target.value);
      signUpDataState.fullName = event.target.value;
    },
    [Name]
  );
  const handleChangeEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
      signUpDataState.email = event.target.value;
    },
    [Email]
  );
  const handleChangeCompanyName = useCallback(
    (event) => {
      setCompanyName(event.target.value);
      signUpDataState.companyName = event.target.value;
    },
    [CompanyName]
  );

  useEffect(() => {
    if (LoggedInUserData) {
      setsignUpDataState(JSON.parse(LoggedInUserData));
    }
  }, []);

  return (
    <Box padding="0 1.36rem 0 1.36rem" mt="11.56rem">
      <Box className={classes.SignupWrapper}>
        <Box className={classes.formHolder}>
          <Box>
            <Typography
              style={{
                fontSize: "2.55rem",
                lineHeight: "3.4rem",
                fontWeight: "700",
                maxWidth: "70%",
                letterSpacing: "0.015rem",
              }}
            >
              Easily collect, track, and manage user feedback
            </Typography>
          </Box>
          <Box mt="5.1rem">
            <Typography
              style={{
                fontSize: "1.7rem",
                lineHeight: "2.72rem",
                fontWeight: "400",
                letterSpacing: "0.051rem",
              }}
            >
              Start your free 14-day trial
            </Typography>
          </Box>
          <Box mt="3.4rem">
            {!showSignupForm && (
              <GoogleLogin
                clientId={
                  "219769076647-u2hnrh6j63ciq4dqi3kssb8uqe7rknub.apps.googleusercontent.com"
                }
                render={(renderProps) => (
                  <Button
                    className={classes.loginButton}
                    onClick={renderProps.onClick}
                  >
                    <Box style={{ zIndex: 2, display: "flex" }}>
                      <CommonSvg type="google" width="2.38rem" />
                      <Typography
                        style={{ marginLeft: "1rem" }}
                        className={classes.loginText}
                      >
                        Continue with Google
                      </Typography>
                    </Box>
                  </Button>
                )}
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={"single_host_origin"}
              />
            )}
          </Box>

          <Grow in={showSignupForm} timeout={200}>
            <Box
              mt="11.56rem"
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
                  src={profilePicture ? profilePicture : null}
                  style={{
                    width: "5.1rem",
                    height: "5.1rem",
                  }}
                >
                  <Typography
                    id="randomTextColor"
                    style={{
                      fontSize: "2.04rem",
                      fontWeight: 400,
                      textShadow:
                        "0px 2px 40px #00000020, 0px 2px 5px #00000030",
                    }}
                  >
                    AC
                  </Typography>
                </Avatar>
              </Box>
              <Box
                alignSelf="flex-start"
                width="100%"
                style={{ transform: "translateY(-.0.425rem)" }}
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
                <Box mt="1.36rem">
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
                <Box mt="1.36rem">
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

                <Box mt="2.04rem">
                  <Button
                    className={classes.createAccountButton}
                    onClick={() => handleCreateAccount()}
                  >
                    <Typography className={classes.createAccountText}>
                      Create free account
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grow>
        </Box>

        <Box className={classes.bannerHolder}>
          <img src={signupBanner} className={classes.bannerImage} />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(withRouter(SignUp));
