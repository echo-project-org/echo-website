import { Container, Typography, styled } from "@mui/material"
import { Favorite } from '@mui/icons-material';

const FooterContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "relative",
    marginTop: "auto",
    backgroundColor: "rgba(31, 24, 37, 0.92)",
    width: "100%",
    minHeight: "3.25rem",
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 -8px 28px rgba(0, 0, 0, 0.12)",
    zIndex: 1,
  }
}))

const StyledFooterTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    margin: "auto",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "0.75rem 1rem",
    fontSize: "0.9rem",
    "a": {
      color: "#dda6eb",
      padding: "0 .5rem 0 .5rem",
      textDecoration: "none",
      "&:hover": {
        color: "#f0c9fa",
      },
    },
  }
}))

function Footer({ }) {
  const openNewPage = (username) => {
    window.open(`https://github.com/${username}`, "_blank");
  }

  return (
    <FooterContainer>
      <StyledFooterTypography>
        Made with <Favorite sx={{ margin: "0rem .5rem 0 .5rem", color: "red" }} /> by <a onClick={() => openNewPage("zthundy")} href="#">zThundy</a> & <a onClick={() => openNewPage("kurygabriele")} href="#">Kury</a>
      </StyledFooterTypography>

    </FooterContainer>
  )
}

export default Footer