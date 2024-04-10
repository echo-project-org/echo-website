import "./typewriter.css";

import { Button, Container, Divider, Grid, styled } from "@mui/material"
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
    height: "70vh",
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

const DownloadButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    zIndex: "1",
    position: "relative",
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
    position: "relative",
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

  const aboutContent = {
    zIndex: "1",
    color: "white",
    fontSize: "1.5rem",
    margin: "0 0 2rem 0",
    textAlign: "justify",
    backgroundColor: "rgb(66, 44, 68)",
    padding: "1.5rem",
    lineHeight: "1.3rem",
    width: "90%",
    maxWidth: "90% !important",
    overflow: "auto",
    maxHeight: "70vh",
  }

  return (
    <StyledBodyContainer>
      <FirstArticleContainer>
        <h1 className="line-1 anim-typewriter">Welcome to <a>ECHO!</a></h1>
        <p>A <i>simple</i>, <i>lightweight</i> and <a>OPENSOURCE</a> voice and text chatting program!</p>
        <h2>Want to help?</h2>
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
      </FirstArticleContainer>

      <Divider sx={{
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

        <Container sx={aboutContent}>
          <p style={{
            margin: "0 0 1rem 0",
          }}>
            Echo is a user-friendly voice chat application designed to streamline communication, much like Discord. Developed using Electron and ReactJS, Echo offers a seamless experience for users to connect, chat, and collaborate effortlessly.<br /><br />
            With Echo, users can create personalized chat rooms or join existing ones to engage in real-time voice conversations with friends, colleagues, or community members. The app's intuitive interface allows for easy navigation and interaction, ensuring a smooth user experience all users.<br /><br />
            Key features of Echo include:<br /><br />
            <ol type="1" style={{
              padding: "0 0 0 2rem",
            }}>
              <li>Voice Chat: Enjoy high-quality voice communication with friends or groups in real-time, eliminating the need for typing and enhancing collaboration. Coff coff... Voice is not the only thing you can play to your friends...</li><br />
              <li>Customizable Rooms: Create or join chat rooms tailored to specific interests, topics, or communities, enabling users to connect with like-minded individuals effortlessly.</li><br />
              <li>Text Chat Integration: In addition to voice communication, Echo supports text chat, allowing users to exchange messages alongside voice conversations for added convenience.</li><br />
              <li>User Profiles: Customize your profile with avatars, usernames, and other personalization options to express yourself and build connections within the Echo community.</li><br />
              <li>Customizable Theme: Make the app look the way you want, you are not stuck using a boring gray app!</li><br />
              <li>Moderation Tools: Empower room creators with moderation tools to manage conversations effectively, ensuring a safe and enjoyable environment for all users.</li><br />
              <li>Cross-Platform Compatibility: Access Echo from Windows or Linux without any issues. (Mac support planned)</li><br />
            </ol>
            Overall, Echo redefines voice chat applications with its user-centric design, robust features, and smooth performance, making it an ideal choice for individuals, teams, and communities seeking a reliable platform for voice communication and collaboration.
          </p>
          <p>
            Echo sets a new standard in voice chat applications with unparalleled voice quality that surpasses all others.<br /><br />
            Whether you're engaging in one-on-one conversations or participating in group discussions, Echo ensures that every word is transmitted with exceptional clarity and fidelity. Say goodbye to muffled audio and lagging connections – with Echo, you can enjoy seamless communication that feels as natural as being in the same room.<br /><br />
            Experience the difference with Echo's superior voice quality, setting the stage for immersive conversations and fostering deeper connections among users. Whether you're gaming, collaborating on projects, or simply catching up with friends, Echo's unmatched audio performance ensures that every interaction is a pleasure.
          </p>
        </Container>

      </ArticleContainer>

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