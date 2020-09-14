import {
  Box,
  makeStyles,
  Typography,
  useTheme,
  Button,
  fade,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  primaryButtonBlue: theme.primaryButtonBlue,
  buttonText: theme.buttonText,
  primaryButtonHollow: theme.primaryButtonHollow,
  Wrapper: {
    transform: "skewY(-7deg)",
    height: "73rem",
    padding: "15.5rem 0",

    "&::before": {
      position: "absolute",
      content: "''",
      width: "100vw",
      height: "100%",
      backgroundImage: "linear-gradient(to left bottom, #181818 , #4452fe14)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  innerWrapper: {
    padding: "0 3rem 0 5rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  subHeading: {
    color: "#00d4ff",
    fontSize: "1.7rem",
    fontWeight: "600",
    letterSpacing: "0.02rem",
    lineHeight: "2.8rem",
    textAlign: "center",
  },
  codeEDitorWrapper: {
    width: "90%",
    backgroundColor: theme.colorPreset.codeEDitorWrapper,
    borderRadius: ".8rem",
  },
  DetailsText: {
    fontSize: "3rem",
    fontWeight: "600",
    color: "#ffffff",
    letterSpacing: "0.06rem",
    lineHeight: "3.8rem",
    maxWidth: "calc(100% - 16rem)",
    textAlign: "left",
  },
  subDetailsText: {
    fontSize: "1.4rem",
    fontWeight: "300",
    color: "#ffffff",
    letterSpacing: "0.06rem",
    maxWidth: "calc(100% - 18rem)",
    lineHeight: "2.4rem",
  },
  customButton: {
    position: "relative",
    width: "auto",
    padding: ".6rem 2rem",
    transition: "all .1s ease-in-out",
    borderRadius: "20rem",

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "#00d4ff",
      zIndex: -1,
      borderRadius: "20rem",
    },
  },
  codeEditorTExt: {
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#55718d",
    lineHeight: "2.4rem",
    padding: "0 .6rem",
    fontFamily: "Source Code Pro, sans-serif !important",
    letterSpacing: "0",
    opacity: ".8",
  },
  editorFotter: {
    width: "100%",
    height: "2.4rem",
    borderBottomRightRadius: ".8rem",
    borderBottomLeftRadius: ".8rem",
    backgroundColor: theme.colorPreset.codeEDitor,
  },
  codeStatusBar: {
    backgroundColor: "#8095ff",
    padding: "0 .5rem",
    position: "relative",
    width: "fit-content",
    height: "100%",
    display: "flex",
    alignItems: "center",

    "&::before": {
      position: "absolute",
      width: "0",
      height: "0",
      top: 0,
      right: 0,
      content: "''",
      borderLeft: ".9rem solid #8095ff",
      borderBottom: "1.25rem solid transparent",
      borderRight: "0 solid transparent",
      borderTop: "1.25rem solid transparent",
      transform: "translateX(95%)",
    },
  },
}));

const editorLabelList = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "~",
  "~",
  "~",
  "~",
  "~",
  "~",
  "~",
];
const HowToUse = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.Wrapper} mt="8rem">
      <Box
        style={{ transform: "skewY(7deg)" }}
        className={classes.innerWrapper}
      >
        <Box
          justifySelf="flex-start"
          alignItems="flex-start"
          display="flex"
          flexDirection="column"
        >
          <Typography className={classes.subHeading}>
            Designed for developers
          </Typography>
          <Box mt="1.4rem">
            <Typography className={classes.DetailsText}>
              Feedform works great with tools in your existing workflow{" "}
            </Typography>
          </Box>
          <Box mt="1.4rem">
            <Typography className={classes.subDetailsText}>
              Less than 5 lines of code. Choose a button or any element and
              we'll make it collect feedback.
            </Typography>{" "}
          </Box>
          <Box mt="1.8rem">
            <Button
              className={clsx(classes.primaryButtonBlue, classes.customButton)}
            >
              <Typography
                style={{ textTransform: "none", color: "#0a2540" }}
                className={classes.buttonText}
              >
                Read docs
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box className={classes.codeEDitorWrapper}>
          <Box display="flex" flexDirection="row">
            <Box
              minWidth="3.55rem"
              width="fit-content"
              display="flex"
              justifyContent="space-evenly"
              padding="1rem 0"
              flexDirection="column"
              alignItems="flex-end"
              position="sticky"
            >
              {editorLabelList.map((item, i) => (
                <Typography className={classes.codeEditorTExt} key={i}>
                  {item}
                </Typography>
              ))}
            </Box>

            <Box padding="1rem 0">
              <Typography
                className={classes.codeEditorTExt}
                style={{ color: "#00d4ff" }}
              >
                {"<!--HTML-->"}
              </Typography>
              <Box display="flex">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingRight: "0" }}
                >
                  {"<"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#F56565", padding: "0" }}
                >
                  {"script"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingRight: "0" }}
                >
                  {"src"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"="}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#ffa956", padding: "0" }}
                >
                  {`"https://www.feedform.me/test.js?pid=xxxxx"`}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {">"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"<"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"/"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#F56565", padding: "0" }}
                >
                  {"script"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingLeft: "0" }}
                >
                  {">"}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingRight: "0" }}
                >
                  {"<"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#F56565", padding: "0" }}
                >
                  {"button"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#ffa956", paddingRight: "0" }}
                >
                  {"data-feedform-app"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {">"}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#ffffff", padding: "0 2rem" }}
                >
                  Give Feedback
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingRight: "0" }}
                >
                  {"<"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"/"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#F56565", padding: "0" }}
                >
                  {"button"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {">"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {";"}
                </Typography>
              </Box>
              <Box mt="2.4rem">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{
                    color: "#00d4ff",
                  }}
                >
                  {"<!--React-->"}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#F56565" }}
                >
                  {"import"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingRight: "0" }}
                >
                  {"{"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#ffa956", paddingRight: "0" }}
                >
                  {"FeedForm"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingRight: "0" }}
                >
                  {"}"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff" }}
                >
                  {"from"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#F56565", padding: "0" }}
                >
                  {"'react-feedform'"}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingRight: "0" }}
                >
                  {"<"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#F56565", padding: "0" }}
                >
                  {"FeedForm"}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#ffa956", padding: "0 0 0 2rem" }}
                >
                  {"triggerComponent"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"="}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"{"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#ffffff", padding: "0" }}
                >
                  {"Button"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"}"}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#ffa956", padding: "0 0 0 2rem" }}
                >
                  {"projectId"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"="}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"{"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#ffffff", padding: "0" }}
                >
                  {"..."}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"}"}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingRight: "0" }}
                >
                  {"<"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {"/"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#F56565", padding: "0" }}
                >
                  {"FeedForm"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {">"}
                </Typography>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", padding: "0" }}
                >
                  {";"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            className={classes.editorFotter}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
          >
            <Box display="flex" alignItems="center" flexDirection="row">
              <Box className={classes.codeStatusBar}>
                <Typography
                  className={classes.codeEditorTExt}
                  style={{
                    color: "#06182c",
                    paddingRight: "0",
                    fontWeight: "600",
                  }}
                >
                  NORMAL
                </Typography>
              </Box>
              <Box ml="1.5rem">
                <Typography
                  className={classes.codeEditorTExt}
                  style={{
                    color: "#8095ff",
                    paddingRight: "0",
                    fontWeight: "600",
                  }}
                >
                  server.js
                </Typography>
              </Box>{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowToUse;
