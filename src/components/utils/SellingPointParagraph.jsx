import { Box } from "@mui/material"

const sellingPointTitleStyle = {
  fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
  fontWeight: 'bold',
  textAlign: 'left',
  marginBottom: '1.25rem',
  color: "#dda6eb"
}

const sellingPointDescriptionStyle = {
  fontSize: '1.1rem',
  color: "rgba(248, 245, 250, 0.76)",
  textAlign: 'left',
  margin: '0',
  marginBottom: '1rem',
  width: '100%',
  maxWidth: '34rem',
  lineHeight: 1.8,
}

function SellingPointContainer({ sellingPoint, sellingPointDescription, sellingPointImage, imageRight }) {
  const imageStyle = {
    width: "100%",
    maxWidth: "34rem",
    maxHeight: "24rem",
    objectFit: "contain",
  }

  return (
    <Box
      sx={{
        width: "min(100%, 74rem)",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
        alignItems: "center",
        gap: { xs: 2, md: 5 },
        "& > img": {
          gridColumn: { xs: "1", md: imageRight ? "2" : "1" },
          gridRow: { xs: "2", md: "1" },
          justifySelf: "center",
        },
        "& > .selling-point-copy": {
          gridColumn: { xs: "1", md: imageRight ? "1" : "2" },
          gridRow: "1",
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: { xs: "1rem", md: "1.5rem" },
          background: "linear-gradient(135deg, rgba(255,255,255,0.065), rgba(255,255,255,0.025))",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 55px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(12px)",
        },
      }}
    >
      <Box className="selling-point-copy">
        <h4 style={sellingPointTitleStyle}>{sellingPoint}</h4>
        <p style={sellingPointDescriptionStyle}>{sellingPointDescription}</p>
      </Box>
      <img src={sellingPointImage} alt={sellingPoint} style={imageStyle} />
    </Box>
  )
}

SellingPointContainer.defaultProps = {
  sellingPoint: 'Selling Point',
  sellingPointDescription: 'Selling Point Description',
  sellingPointImage: 'http://echo.kuricki.com/images/server.PNG',
  imageRight: true
}

export default SellingPointContainer