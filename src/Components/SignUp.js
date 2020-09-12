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
    transition: "all .1s ease-in-out",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "#005082",
      borderRadius: "20rem",
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
        borderRadius: "20rem",
        zIndex: 1,
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
    height: "2.7rem",
    borderRadius: ".2rem",
    padding: "0 .8rem",
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
    fontSize: ".75rem",
    color: "#ffffff",
    fontWeight: 600,
    lineHeight: "inherit",
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
    fontWeight: "500 !important",
    letterSpacing: "0.01rem",
    color: "#333",
    fontFamily: "system-ui, sans-serif",
    wordSpacing: "0.02rem",
    padding: "0",
    lineHeight: "inherit",

    "&::placeholder": {
      fontFamily: "system-ui, sans-serif",
      color: "#333",
      fontSize: ".95rem !important",
      fontWeight: "500 !important",
      opacity: ".5 !important",
      letterSpacing: "0.01rem",
      wordSpacing: "0.02rem",
      lineHeight: "inherit",
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
    console.log(signUpDataState);

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
            } else {
              alert("user already exists");
              Authentication.save(signUpDataState.accessToken);
              Authentication.saveUserProfile(JSON.stringify(signUpDataState));
              setuserExists(true);
              setshowSignupForm(false);
            }
          });
        } else {
          Firebase.register(signUpDataState);
          Authentication.save(signUpDataState.accessToken);
          Authentication.saveUserProfile(JSON.stringify(signUpDataState));
          setuserExists(false);
          setshowSignupForm(false);
        }
      });
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
                      <CommonSvg type="google" width="1.4rem" />
                      <Typography
                        style={{ marginLeft: ".6rem" }}
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
                  src={profilePicture ? profilePicture : null}
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

                <Box mt="1.2rem">
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

export default SignUp;
