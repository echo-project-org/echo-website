import "./typewriter.css";

import { Button, Container, Divider, Grid, styled } from "@mui/material"
import { ExpandMore } from '@mui/icons-material';

import SellingPointParagraph from "../../utils/SellingPointParagraph";
import ImageGallery from "../../utils/ImageGallery";
import sellingPoints from "../../../data/sellingPoints";
import About from "../../utils/About";

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
    height: "100vh",
    width: "75%",
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
      transition: "color 0.1s ease-in-out",
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
    height: "100vh",
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

const ArticleContainer = styled("div")(({ theme }) => ({
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

const SellingPointsContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    width: "100%",
    margin: "auto",
    marginBottom: "30vh"
  }
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    zIndex: "1",
    margin: "0 0 2rem 0",
    position: "relative",
    width: "20rem",
    height: "4rem",
    top: "1rem",
    backgroundColor: "rgb(142, 77, 156)",
    color: "white",
    borderRadius: "1rem",
    border: "1px solid rgba(255,255,255,0.75)",
    boxShadow: "0px 10px 20px 2px rgb(106, 57, 117, .8)",
    "&:hover": {
      transform: "translateY(-5px)",
      backgroundColor: "rgb(212, 116, 233)",
      boxShadow: "0px 10px 10px 2px rgb(142, 77, 156, .8)",
    },
    "& span": {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5rem",
      textDecoration: "none",
    }
  }
}));

const MoreVersionsButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    zIndex: "1",
    margin: "0 0 2rem 0",
    position: "relative",
    width: "20rem",
    height: "4rem",
    top: "1rem",
    backgroundColor: "rgba(142, 77, 156, .1)",
    color: "white",
    borderRadius: "1rem",
    border: "1px solid rgba(255,255,255,0.75)",
    boxShadow: "0px 10px 20px 2px rgba(68, 36, 72, .8)",
    "&:hover": {
      transform: "translateY(-5px)",
      backgroundColor: "rgba(212, 116, 233, .1)",
      boxShadow: "0px 10px 10px 2px rgb(90, 47, 97, .8)",
    },
    "& span": {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5rem",
      textDecoration: "none",
    }
  }
}));

function Home({ }) {
  const divStyle = {
    zIndex: "1",
    backgroundColor: "rgba(245, 163, 255, 0.1)",
    width: "100%",
    padding: "1rem",
    boxShadow: "0px 3px 0px 0px rgba(245, 163, 255, 0.75)",
    border: "1px solid rgba(245, 163, 255, 0.75)",
    color: "rgb(245, 163, 255)",
    textTransform: "uppercase",
  }

  const containerStyle = {
    zIndex: "1",
    color: "white",
    fontSize: "3rem",
    margin: "2rem 0 2rem 0",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
  }

  return (
    <StyledBodyContainer>
      <FirstArticleContainer>
        <h1 className="line-1 anim-typewriter">Welcome to <a>ECHO!</a></h1>
        <p>A <i>simple</i>, <i>lightweight</i> and <a>OPENSOURCE</a> voice and text chatting app!</p>
        <h2 style={{marginTop: "2rem"}}>Want to help?</h2>
        <p>Check us out on <a href="https://github.com/echo-project-org" target="_blank">Github</a></p>

        <Grid container justifyContent="center" spacing={4}>
          <Grid item>
            <DownloadButton
              variant="contained"
              href="https://github.com/echo-project-org/echo-client/releases/latest"
              target="_blank"
            >
              <span>Download latest</span>
            </DownloadButton>
          </Grid>

          <Grid item>
            <MoreVersionsButton
              variant="contained"
              href="https://github.com/echo-project-org/echo-client/releases"
              target="_blank"
            >
              <span>More versions</span>
            </MoreVersionsButton>
          </Grid>
        </Grid>

        <ExpandMore
          sx={{
            color: "white",
            fontSize: "4rem",
            position: "absolute",
            bottom: "1rem",
            cursor: "pointer",
            "&:hover": {
              color: "#bc5dc8",
            }
          }}

          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth"
            });
          }}
        />
      </FirstArticleContainer>

      <Divider sx={{
        color: "white",
        backgroundColor: "white",
        boxShadow: "0px 0px 8px 1px rgba(255,255,255,0.9)",
      }} />

      <SellingPointsContainer>
        {
          sellingPoints.map((sellingPoint, index) => {
            return (
              <SellingPointParagraph
                key={index}
                sellingPoint={sellingPoint.title}
                sellingPointDescription={sellingPoint.description}
                sellingPointImage={sellingPoint.img}
                imageRight={sellingPoint.alignRight}
              />
            )
          })
        }
      </SellingPointsContainer>

{/*       <Divider sx={{
        color: "white",
        backgroundColor: "white",
        boxShadow: "0px 0px 8px 1px rgba(255,255,255,0.9)",
      }} />

      <ArticleContainer>
        <Container sx={containerStyle}>
          <div style={divStyle}>
            About
          </div>
        </Container>

        <About />
      </ArticleContainer> */}

      <Divider sx={{
        color: "white",
        backgroundColor: "white",
        boxShadow: "0px 0px 8px 1px rgba(255,255,255,0.9)",
      }} />

      <ArticleContainer>
        <Container sx={containerStyle}>
          <div style={divStyle}>
            Gallery
          </div>
        </Container>

        <ImageGallery />
      </ArticleContainer>
    </StyledBodyContainer>
  )
}

export default Home