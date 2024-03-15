import "./typewriter.css";

import { Container, Divider, styled } from "@mui/material"
import ImageGallery from "../../utils/ImageGallery";

const StyledBodyContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    flex: "1 0 auto",
  }
}));

const FirstArticleContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "100%",
    margin: "auto",
    gap: "1rem",
    color: "white",
    textAlign: "center",
    "& h1": {
      fontSize: "2rem",
    },
    "& p": {
      fontSize: "1rem",
    },
    "& h2": {
      fontSize: "1.5rem",
    },
    "& a": {
      color: "#bc5dc8",
      textDecoration: "none",
      transition: "all 0.1s ease-in-out",
      "&:hover": {
        color: "#ea94f4",
      },
    },
  },
  [theme.breakpoints.up('md')]: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "100%",
    margin: "auto",
    gap: "1rem",
    color: "white",
    textAlign: "center",
    "& h1": {
      fontSize: "3rem",
    },
    "& p": {
      fontSize: "1.5rem",
    },
    "& h2": {
      fontSize: "2rem",
    },
    "& a": {
      color: "#bc5dc8",
      textDecoration: "none",
      transition: "all 0.1s ease-in-out",
      "&:hover": {
        color: "#ea94f4",
      },
    },
  }
}));

const SecondArticleContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    width: "100%",
    margin: "0",
  }
}));

function Home({ }) {
  return (
    <StyledBodyContainer>
      <FirstArticleContainer>
        <h1 className="line-1 anim-typewriter">Welcome to <a>ECHO!</a></h1>
        <p>Check back later!</p>
        <h2>Or</h2>
        <p>Help us on <a href="https://github.com/echo-project-org" target="_blank">Github</a></p>
      </FirstArticleContainer>

      <Divider sx={{
        color: "white",
        backgroundColor: "white",
        boxShadow: "0px 0px 8px 1px rgba(255,255,255,0.9)",
      }} />

      <SecondArticleContainer>
        <Container
          sx={{
            color: "white",
            fontSize: "3rem",
            margin: "2rem 0 2rem 0",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            width: "fit-content",
            padding: "1rem",
            borderRadius: "1.5rem",
            boxShadow: "0px 3px 0px 0px rgba(255,255,255,0.75)",
            border: "1px solid rgba(255,255,255,0.75)",
          }}>
            Gallery
          </div>
        </Container>

        <ImageGallery />
      </SecondArticleContainer>
    </StyledBodyContainer>
  )
}

export default Home