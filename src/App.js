import React, { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import GoogleLogin from "react-google-login";
import Authentication from "./Utils/Authentication";
import Firebase from "./Firebase/firebase.js";
import app from "firebase/app";

const App = () => {
  const [userExists, setuserExists] = useState(null);

  const db = app.firestore();
  const LoggedInUserData = Authentication.loadUserProfile();
  const LoggedInUserToken = Authentication.load();

  const responseGoogle = (response) => {
    console.log(response);

    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (String(response.googleId) !== String(doc.data().googleId)) {
            Firebase.register(response);
            Authentication.save(response.accessToken);
            Authentication.saveUserProfile(JSON.stringify(response.profileObj));
            setuserExists(false);
          } else {
            setuserExists(true);
          }
        });
      });
  };

  return (
    <Box>
      {!LoggedInUserToken && !userExists && (
        <GoogleLogin
          clientId={
            "219769076647-u2hnrh6j63ciq4dqi3kssb8uqe7rknub.apps.googleusercontent.com"
          }
          buttonText="Login"
          onSuccess={responseGoogle}
          // onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      <Box>
        {LoggedInUserData &&
        LoggedInUserData !== undefined &&
        LoggedInUserData !== "undefined" &&
        LoggedInUserData !== null
          ? JSON.parse(LoggedInUserData) && JSON.parse(LoggedInUserData).name
            ? JSON.parse(LoggedInUserData).name
            : ""
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
