import { Container } from "@mui/material";

function About({ }) {
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
  )
}

export default About;