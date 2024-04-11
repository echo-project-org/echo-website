import React from 'react'
import { Box, Grid } from "@mui/material"

const sellingPointTitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '1rem',
  color: "#BC5DC8"
}

const sellingPointDescriptionStyle = {
  fontSize: '1.3rem',
  color: "white",
  textAlign: 'center',
  margin: 'auto',
  marginBottom: '1rem',
  width: '50%',
}

function SellingPointContainer({ sellingPoint, sellingPointDescription, sellingPointImage, imageRight }) {
  const imageRef = React.useRef(null);
  const imageRefLeft = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      // check window size, if less than 600px, return
      if (window.innerWidth < 1200) {
        if (imageRef.current) imageRef.current.style.right = "0px";
        if (imageRefLeft.current) imageRefLeft.current.style.left = "0px";
        return
      };

      const value = Math.floor(window.scrollY / 20)
      if (imageRef.current) {
        imageRef.current.style.right = `${value}px`;
      }

      if (imageRefLeft.current) {
        // imageRef.current.style.top = `${Math.floor(window.scrollY / 10)}px`;
        imageRefLeft.current.style.left = `${value}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageStyle = {
    position: "relative",
    width: "40%",
    justifyContent: "center",
    display: "block",
    margin: "auto",
  }

  if (imageRight) return (
    <Grid container justifyContent="center" spacing={4} marginTop={"30vh"}>
      <Grid item xs={12} md={6} margin="auto">
        <Box height="100%">
          <h4 style={sellingPointTitleStyle}>{sellingPoint}</h4>
          <p style={sellingPointDescriptionStyle}>{sellingPointDescription}</p>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} margin="auto">
        <Box height="100%">
          <img ref={imageRef} src={sellingPointImage} alt={sellingPoint} style={imageStyle} />
        </Box>
      </Grid>
    </Grid>
  )
  return (
    <Grid container justifyContent="center" spacing={4} marginTop={"30vh"}>
      <Grid item xs={12} md={6} margin="auto">
        <Box height="100%">
          <img ref={imageRefLeft} src={sellingPointImage} alt={sellingPoint} style={imageStyle} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} margin="auto">
        <Box height="100%">
          <h4 style={sellingPointTitleStyle}>{sellingPoint}</h4>
          <p style={sellingPointDescriptionStyle}>{sellingPointDescription}</p>
        </Box>
      </Grid>
    </Grid>
  )
}

SellingPointContainer.defaultProps = {
  sellingPoint: 'Selling Point',
  sellingPointDescription: 'Selling Point Description',
  sellingPointImage: 'http://echo.kuricki.com/images/server.PNG',
  imageRight: true
}

export default SellingPointContainer