
import { Container, Divider, styled } from "@mui/material"

import ImageGallery from "../../utils/ImageGallery";

const StyledBodyContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
  }
}));

const FirstArticleContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "100%",
    margin: "auto",
    gap: "1rem",
    color: "white",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    margin: "0"
  }
}));

function Home({ }) {
  return (
    <StyledBodyContainer>
      <FirstArticleContainer>
        <h1>Something great is being built here!</h1>
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