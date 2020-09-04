import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import theme from "./Utils/theme";
import { CssBaseline } from "@material-ui/core";

const styles = (theme) => ({
  "@global": {
    html: {
      fontSize: 10,

      [theme.breakpoints.up("sd")]: {
        fontSize: 11,
      },
      [theme.breakpoints.up("MacScaled")]: {
        fontSize: 12,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 12,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 15,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 27,
      },
    },

    body: {
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "0",
      },
      "&::-webkit-scrollbar-track": {
        width: "0",
      },
      "&::-webkit-scrollbar-thumb": {
        width: "0",
      },

      fontSize: 10,

      [theme.breakpoints.up("sd")]: {
        fontSize: 11,
      },
      [theme.breakpoints.up("MacScaled")]: {
        fontSize: 12,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 12,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 15,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 27,
      },
    },
  },
});

const Main = withStyles(styles)(App);

ReactDOM.render(
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <>
        <StylesProvider>
          <Main />
        </StylesProvider>
      </>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);
