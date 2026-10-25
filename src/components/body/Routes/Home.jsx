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
    minHeight: "min(100vh, 900px)",
    width: "100%",
    margin: "auto",
    padding: "7rem 1.25rem 4rem",
    gap: "1.25rem",
    color: "#f8f5fa",
    textAlign: "center",
    overflow: "hidden",
    "& h1": {
      fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
      lineHeight: 1.1,
    },
    "& p": {
      fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
      lineHeight: 1.7,
      maxWidth: "46rem",
    },
    "& h2": {
      fontSize: "clamp(1.35rem, 3vw, 1.8rem)",
      marginTop: "1rem",
    },
    "& a": {
      color: "#dda6eb",
      textDecoration: "none",
      transition: "color 180ms ease",
      "&:hover": {
        color: "#f0c9fa",
      },
    },
  },
  [theme.breakpoints.up('md')]: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "min(100vh, 900px)",
    width: "100%",
    maxWidth: "76rem",
    margin: "auto",
    padding: "7rem 2rem 4rem",
    gap: "1.25rem",
    color: "#f8f5fa",
    textAlign: "center",
    "& h1": {
      fontSize: "clamp(4rem, 7vw, 5.5rem)",
    },
    "& p": {
      fontSize: "1.35rem",
    },
    "& h2": {
      fontSize: "1.8rem",
    },
    "& a": {
      color: "#dda6eb",
      textDecoration: "none",
      transition: "color 180ms ease",
      "&:hover": {
        color: "#f0c9fa",
      },
    },
  }
}));

const ArticleContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    width: "100%",
    margin: "0 auto 3rem",
    padding: "2rem 0 5rem",
  }
}));

const GalleryHeading = styled("div")({
  width: "100%",
  marginBottom: "2rem",
  padding: "0.75rem 1rem",
  borderBottom: "1px solid rgba(221, 166, 235, 0.35)",
  backgroundColor: "rgba(255, 255, 255, 0.035)",
  color: "#dda6eb",
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  fontSize: "0.9rem",
  fontWeight: 600,
});

const SellingPointsContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    width: "100%",
    margin: "auto",
    marginBottom: "0",
    padding: "3rem 1rem 5rem",
  },
  [theme.breakpoints.up('md')]: {
    gap: "2rem",
  }
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    zIndex: "1",
    margin: "0",
    position: "relative",
    width: "min(100%, 18rem)",
    minHeight: "3.5rem",
    backgroundColor: "#8e4d9c",
    color: "white",
    borderRadius: "0.85rem",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 12px 28px rgba(91, 45, 102, 0.32)",
    transition: "transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease",
    "&:hover": {
      transform: "translateY(-3px)",
      backgroundColor: "#a65db5",
      boxShadow: "0 16px 32px rgba(91, 45, 102, 0.4)",
    },
    "& span": {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.05rem",
      textDecoration: "none",
    }
  }
}));

const MoreVersionsButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    zIndex: "1",
    margin: "0",
    position: "relative",
    width: "min(100%, 18rem)",
    minHeight: "3.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.035)",
    color: "white",
    borderRadius: "0.85rem",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.18)",
    transition: "transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease",
    "&:hover": {
      transform: "translateY(-3px)",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      boxShadow: "0 16px 32px rgba(0, 0, 0, 0.24)",
    },
    "& span": {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.05rem",
      textDecoration: "none",
    }
  }
}));

function Home({ }) {
  const divStyle = {
    zIndex: "1",
    backgroundColor: "rgba(255, 255, 255, 0.035)",
    width: "100%",
    padding: "0.75rem 1rem",
    borderBottom: "1px solid rgba(221, 166, 235, 0.35)",
    color: "#dda6eb",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontSize: "0.9rem",
    fontWeight: 600,
  }

  const containerStyle = {
    zIndex: "1",
    color: "white",
    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
    margin: "0 0 2rem",
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

        <Grid container justifyContent="center" spacing={2} sx={{ width: "100%", mt: 1 }}>
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
            color: "rgba(255, 255, 255, 0.72)",
            fontSize: "3rem",
            position: "absolute",
            bottom: "1.25rem",
            cursor: "pointer",
            transition: "color 180ms ease, transform 180ms ease",
            "&:hover": {
              color: "#dda6eb",
              transform: "translateY(3px)",
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
        backgroundColor: "rgba(255, 255, 255, 0.12)",
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
        backgroundColor: "rgba(255, 255, 255, 0.12)",
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
        <GalleryHeading>Gallery</GalleryHeading>

        <ImageGallery />
      </ArticleContainer>
    </StyledBodyContainer>
  )
}

export default Home