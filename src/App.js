import React from "react";
import { Box } from "@material-ui/core";
import GoogleLogin from "react-google-login";

const App = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Box>
      asd
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </Box>
  );
};

export default App;
