import React, { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import GoogleLogin from "react-google-login";
import Authentication from "./Utils/Authentication";
import firebase from "./Firebase/index.js";
import app from "firebase/app";

const App = () => {
  const [userExists, setuserExists] = useState(null);

  const db = app.firestore();
  const LoggedInUserData = Authentication.loadUserProfile();
  const LoggedInUserToken = Authentication.load();

  const responseGoogle = (response) => {
    console.log(response);
    Authentication.save(response.accessToken);
    Authentication.saveUserProfile(JSON.stringify(response.profileObj));

    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (String(response.googleId) === String(doc.data().googleId)) {
            // user already exists
            console.log("user already exists");
            setuserExists(true);
          } else {
            firebase.register(response);
            setuserExists(true);
          }
        });
      });
  };

  return (
    <Box>
      {!LoggedInUserToken && !userExists && (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      <Box>
        {LoggedInUserData
          ? JSON.parse(LoggedInUserData).name
            ? JSON.parse(LoggedInUserData).name
            : " "
          : ""}
      </Box>
      <Box>
        <Button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            Authentication.reset();
            setuserExists(false);
          }}
        >
          Sign out
        </Button>
      </Box>
    </Box>
  );
};

export default App;
