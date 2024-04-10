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
  if (imageRight) return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} md={6} margin="auto">
        <Box height="100%">
          <h4 style={sellingPointTitleStyle}>{sellingPoint}</h4>
          <p style={sellingPointDescriptionStyle}>{sellingPointDescription}</p>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} margin="auto">
        <Box height="100%">
          <img src={sellingPointImage} alt={sellingPoint} width="50%" />
        </Box>
      </Grid>
    </Grid>
  )
  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} md={6} margin="auto">
        <Box height="100%">
          <img src={sellingPointImage} alt={sellingPoint} width="50%" />
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