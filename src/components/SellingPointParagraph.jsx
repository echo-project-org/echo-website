import React from 'react'
import { Grid, Typography } from "@mui/material"

function SellingPointContainer({ sellingPoint, sellingPointDescription, sellingPointImage, imageRight }) {
  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4">{sellingPoint}</Typography>
        <Typography variant="body1">{sellingPointDescription}</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={sellingPointImage} alt={sellingPoint} width="50%" />
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