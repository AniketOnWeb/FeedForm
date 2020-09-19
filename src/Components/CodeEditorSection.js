import {
  Box,
  makeStyles,
  Typography,
  useTheme,
  Button,
  fade,
  Fade,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  primaryButtonBlue: theme.primaryButtonBlue,
  buttonText: theme.buttonText,
  primaryButtonHollow: theme.primaryButtonHollow,
  Wrapper: {
    padding: "10rem 0",
    position: "relative",

    "&::before": {
      position: "absolute",
      content: "''",
      width: "100vw",
      height: "100%",
      backgroundImage: "linear-gradient(to left, #181818 , #1e1e1ef7)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
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
    padding: ".3rem 1.2rem .6rem",
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

  commonAnimationStyle: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderRight: ".15rem solid transparent",
  },
  animationTest: {
    animation: `$typing 2s steps(70, end), blink-caret .001s step-end 2000`,
  },
  animationTest2: {
    animation: `$typing2 1.5s steps(70, end), blink-caret .001s step-end 1400`,
    animationDelay: "2s",
    opacity: "0",
  },
  animationTest3: {
    animation: `$typing3 1s steps(70, end), blink-caret .001s step-end 1000`,
    animationDelay: "3.5s",
    opacity: "0",
  },
  animationTest4: {
    animation: `$typing4 .8s steps(70, end), blink-caret .001s step-end 800`,
    animationDelay: "4.5s",
    opacity: "0",
  },
  animationTest5: {
    animation: `$typing5 .5s steps(70, end), blink-caret .001s step-end 500`,
    animationDelay: "5.3s",
    opacity: "0",
  },
  animationTest6: {
    animation: `$typing6 2s steps(70, end), blink-caret .001s step-end 1970`,
    animationDelay: "5.8s",
    opacity: "0",
  },
  animationTest7: {
    animation: `$typing7 .8s steps(70, end), blink-caret .001s step-end 800`,
    animationDelay: "7.8s",
    opacity: "0",
  },
  animationTest8: {
    animation: `$typing8 1s steps(70, end), blink-caret .001s step-end 1000`,
    animationDelay: "8.6s",
    opacity: "0",
  },
  animationTest9: {
    animation: `$typing9 .8s steps(70, end), blink-caret .001s step-end 800`,
    animationDelay: "9.6s",
    opacity: "0",
  },
  animationTest10: {
    animation: `$typing7 .9s steps(70, end), blink-caret .65s step-end infinite`,
    animationDelay: "10.4s",
    opacity: "0",
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
  codeStatusBarInsert: {
    backgroundColor: "#ffd96a",
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
      borderLeft: ".9rem solid #ffd96a",
      borderBottom: "1.25rem solid transparent",
      borderRight: "0 solid transparent",
      borderTop: "1.25rem solid transparent",
      transform: "translateX(95%)",
    },
  },

  "@keyframes typing": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "100%",
    },
  },
  "@keyframes typing2": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "200px",
    },
  },
  "@keyframes typing3": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "120px",
    },
  },
  "@keyframes typing4": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "70px",
    },
  },
  "@keyframes typing5": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "80px",
    },
  },
  "@keyframes typing6": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "300px",
    },
  },
  "@keyframes typing7": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "77px",
    },
  },
  "@keyframes typing8": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "202px",
    },
  },
  "@keyframes typing9": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "130px",
    },
  },
  "@keyframes typing10": {
    "0%": {
      width: "0",
    },
    "100%": {
      width: "70px",
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
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "~",
];
const CodeEditorSection = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [TypeWriterFinished, setTypeWriterFinished] = useState(false);
  const [lineCount, setlineCount] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      setTypeWriterFinished(true);
    }, 11300);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let lineFade1 = document.getElementById("lineFade1");
      lineFade1.style.opacity = 1;
      setlineCount(3);
    }, 2000);
    setTimeout(() => {
      let lineFade2 = document.getElementById("lineFade2");
      lineFade2.style.opacity = 1;
      setlineCount(4);
    }, 3500);
    setTimeout(() => {
      let lineFade3 = document.getElementById("lineFade3");
      lineFade3.style.opacity = 1;
      setlineCount(5);
    }, 4500);
    setTimeout(() => {
      let lineFade4 = document.getElementById("lineFade4");
      lineFade4.style.opacity = 1;
      setlineCount(7);
    }, 5300);
    setTimeout(() => {
      let lineFade5 = document.getElementById("lineFade5");
      lineFade5.style.opacity = 1;
      setlineCount(8);
    }, 5800);
    setTimeout(() => {
      let lineFade6 = document.getElementById("lineFade6");
      lineFade6.style.opacity = 1;
      setlineCount(9);
    }, 7800);
    setTimeout(() => {
      let lineFade7 = document.getElementById("lineFade7");
      lineFade7.style.opacity = 1;
      setlineCount(10);
    }, 8600);
    setTimeout(() => {
      let lineFade8 = document.getElementById("lineFade8");
      lineFade8.style.opacity = 1;
      setlineCount(11);
    }, 9600);
    setTimeout(() => {
      let lineFade9 = document.getElementById("lineFade9");
      lineFade9.style.opacity = 1;
      setlineCount(12);
    }, 10400);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setlineCount((lineCount) => lineCount + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <Box className={classes.Wrapper} mt="8rem">
      <Box
        // style={{ transform: "skewY(7deg)" }}
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
                style={{
                  textTransform: "none",
                  color: "#0a2540",
                  fontWeight: 600,
                }}
                className={classes.buttonText}
              >
                Generate project Id
              </Typography>
            </Button>
          </Box>
          <Box
            mt="3rem"
            style={{ borderLeft: ".2rem solid #ffd96a", paddingLeft: "2.1rem" }}
          >
            <Typography
              className={classes.subDetailsText}
              style={{ maxWidth: "unset" }}
            >
              Copy and paste this in your page body
            </Typography>
            <Typography
              className={classes.subDetailsText}
              style={{ maxWidth: "unset" }}
            >
              add data-feedform-app on the element you want to add click event
              listener
            </Typography>
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

            <Box padding="1rem 0" overflow="hidden">
              <Typography
                className={classes.codeEditorTExt}
                style={{ color: "#00d4ff" }}
              >
                {"<!--HTML-->"}
              </Typography>
              <Box
                display="flex"
                className={clsx(
                  classes.animationTest,
                  classes.commonAnimationStyle
                )}
              >
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#00d4ff", paddingRight: "0" }}
                >
                  {"<"}
                </Typography>
                <Typography
                  className={clsx(classes.codeEditorTExt)}
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
                  className={clsx(classes.codeEditorTExt)}
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
              <Box
                display="flex"
                width="fit-content"
                className={clsx(
                  classes.animationTest2,
                  classes.commonAnimationStyle
                )}
                id="lineFade1"
              >
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
              <Box
                display="flex"
                className={clsx(
                  classes.animationTest3,
                  classes.commonAnimationStyle
                )}
                id="lineFade2"
              >
                <Typography
                  className={classes.codeEditorTExt}
                  style={{ color: "#ffffff", padding: "0 2rem" }}
                >
                  Give Feedback
                </Typography>
              </Box>
              <Box
                display="flex"
                className={clsx(
                  classes.animationTest4,
                  classes.commonAnimationStyle
                )}
                id="lineFade3"
              >
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
              <Box
                mt="2.4rem"
                className={clsx(
                  classes.animationTest5,
                  classes.commonAnimationStyle
                )}
                id="lineFade4"
              >
                <Typography
                  className={classes.codeEditorTExt}
                  style={{
                    color: "#00d4ff",
                  }}
                >
                  {"<!--React-->"}
                </Typography>
              </Box>
              <Box
                display="flex"
                className={clsx(
                  classes.animationTest6,
                  classes.commonAnimationStyle
                )}
                id="lineFade5"
              >
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
              <Box
                display="flex"
                className={clsx(
                  classes.animationTest7,
                  classes.commonAnimationStyle
                )}
                id="lineFade6"
              >
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
              <Box
                display="flex"
                className={clsx(
                  classes.animationTest8,
                  classes.commonAnimationStyle
                )}
                id="lineFade7"
              >
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
              <Box
                display="flex"
                className={clsx(
                  classes.animationTest9,
                  classes.commonAnimationStyle
                )}
                id="lineFade8"
              >
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
              <Box
                display="flex"
                width="9.5rem"
                padding="0"
                className={clsx(
                  classes.animationTest10,
                  classes.commonAnimationStyle
                )}
                id="lineFade9"
              >
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
            overflow="hidden"
          >
            <Box display="flex" alignItems="center" flexDirection="row">
              <Box
                className={
                  TypeWriterFinished
                    ? classes.codeStatusBar
                    : classes.codeStatusBarInsert
                }
              >
                <Typography
                  className={classes.codeEditorTExt}
                  style={{
                    color: "#06182c",
                    paddingRight: "0",
                    fontWeight: "600",
                  }}
                >
                  {TypeWriterFinished ? "NORMAL" : "INSERT"}
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
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <Typography
                className={classes.codeEditorTExt}
                style={{
                  color: "#55718d",
                  paddingRight: "0",
                  fontWeight: "600",
                }}
              >
                100%
              </Typography>
              <Typography
                className={classes.codeEditorTExt}
                style={{
                  color: "#55718d",
                  paddingRight: "0",
                  fontWeight: "600",
                }}
              >
                ☰
              </Typography>
              <Typography
                className={classes.codeEditorTExt}
                style={{
                  color: "#55718d",
                  paddingRight: "0",
                  paddingLeft: "1.5rem",
                  fontWeight: "600",
                }}
              >
                {lineCount}/12
              </Typography>
              <Typography
                className={classes.codeEditorTExt}
                style={{
                  color: "#55718d",
                  paddingRight: "0",
                  fontWeight: "600",
                }}
              >
                ln
              </Typography>
              <Typography
                className={classes.codeEditorTExt}
                style={{
                  color: "#55718d",
                  paddingLeft: "1.5rem",
                  fontWeight: "600",
                }}
              >
                :
              </Typography>
              <Typography
                className={classes.codeEditorTExt}
                style={{
                  color: "#55718d",
                  fontWeight: "600",
                  paddingRight: "1.6rem",
                }}
              >
                4
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeEditorSection;
