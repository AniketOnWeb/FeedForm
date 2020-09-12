import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import theme from "./Utils/theme";
import { CssBaseline } from "@material-ui/core";
import "regenerator-runtime/runtime.js";
import "./index.css";

const styles = (theme) => ({
  "@global": {
    "@font-face": "system-ui, sans-serif",

    html: {
      fontSize: 10,
      fontFamily: "system-ui, sans-serif",
    },

    body: {
      backgroundColor: "#181818",
      overflow: "auto",
      fontFamily: "system-ui, sans-serif",
      "&::-webkit-scrollbar": {
        width: "0",
      },
      "&::-webkit-scrollbar-track": {
        width: "0",
      },
      "&::-webkit-scrollbar-thumb": {
        width: "0",
      },
    },
  },
});

const Main = withStyles(styles)(App);

ReactDOM.render(
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <Main />
      </StylesProvider>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);
