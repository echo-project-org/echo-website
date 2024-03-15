import { Container, Typography, styled } from "@mui/material"
import { Favorite } from '@mui/icons-material';

const FooterContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "absolute",
    backgroundColor: "#49294d",
    width: "100%",
    height: "2.8rem",
    display: "flex",
    justifyContent: "left",
    boxShadow: "0px 0px 5px 0px rgba(255,255,255,0.4)",
  }
}))

const StyledFooterTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    margin: "auto 0 auto 0",
    color: "white",
    display: "flex",
    padding: "0 0 0 1rem",
    "a": {
      color: "#bc5dc8",
      padding: "0 .5rem 0 .5rem",
      textDecoration: "none",
      "&:hover": {
        color: "#ea94f4",
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