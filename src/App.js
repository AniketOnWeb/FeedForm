import { Box, CssBaseline } from "@material-ui/core";
import React from "react";
import Navbar from "./Common/Navbar";
import Hero from "./Components/Hero/Hero";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const App = () => {
  const matches1280 = useMediaQuery("(min-width:1280px)");
  const matches1024 = useMediaQuery("(min-width:1024px)");
  const matches768 = useMediaQuery("(min-width:768px)");
  const matches640 = useMediaQuery("(min-width:640px)");

  return (
    <CssBaseline>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          style={{
            maxWidth: matches1280
              ? "1280px"
              : matches1024
              ? "1024px"
              : matches768
              ? "768px"
              : matches640
              ? "640px"
              : "",
            width: "100%",
          }}
        >
          <Navbar />
          <Box>
            <Hero />
          </Box>
        </Box>
      </Box>
    </CssBaseline>
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
