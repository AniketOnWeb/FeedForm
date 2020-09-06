import { Box } from "@material-ui/core";
import React from "react";
import Navbar from "./Common/Navbar";
import Hero from "./Components/Hero/Hero";
const App = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <Hero />
      </Box>
    </Box>
  );
};

export default App;

// <Box>
//   {!LoggedInUserToken && !userExists && (
//     <GoogleLogin
//       clientId={
//         "219769076647-u2hnrh6j63ciq4dqi3kssb8uqe7rknub.apps.googleusercontent.com"
//       }
//       buttonText="Login"
//       onSuccess={handleSuccess}
//       onFailure={handleFailure}
//       cookiePolicy={"single_host_origin"}
//     />
//   )}
//   <Box width="43rem" id="logo-bm"></Box>

//   <Box>
//     {LoggedInUserData &&
//       LoggedInUserData !== undefined &&
//       LoggedInUserData !== "undefined" &&
//       LoggedInUserData !== null
//       ? JSON.parse(LoggedInUserData) && JSON.parse(LoggedInUserData).name
//         ? JSON.parse(LoggedInUserData).name
//         : ""
//       : ""}
//   </Box>
//   <Box>
//     <Button
//       style={{ backgroundColor: "red" }}
//       onClick={() => {
//         Authentication.reset();
//         setuserExists(false);
//       }}
//     >
//       Sign out
//         </Button>
//   </Box>
// </Box>
