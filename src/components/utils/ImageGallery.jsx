import { useEffect, useState } from 'react';
import { styled, Container, Fade } from "@mui/material"

const MainContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    width: "100%",
  }
}));

const ImagesContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    gap: "1.5rem",
  }
}));

const ImageContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: "min(100%, 32rem)",
    padding: "0.75rem",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    borderRadius: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.045)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
    "& img": {
      width: "100%",
      height: "auto",
      objectFit: "contain",
      borderRadius: "0.65rem",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
      zIndex: "0",
      transition: "transform 180ms ease",
      "&:hover": {
        cursor: "pointer",
        zIndex: "0",
        transform: "scale(1.015)",
      }
    },
  },
  [theme.breakpoints.up('md')]: {
    width: "min(100%, 34rem)",
  }
}));

const ZoomedImageContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "fixed",
    top: "0",
    width: "100vw",
    height: "100vh",
    opacitiy: "1",
    zIndex: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    cursor: "pointer",
    "& img": {
      transform: "rotate(90deg)",
      cursor: "none",
      maxWidth: "92vw",
      maxHeight: "88vh",
      objectFit: "contain",
      borderRadius: "0.5rem",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    }
  },
  [theme.breakpoints.up('md')]: {
    position: "fixed",
    top: "0",
    width: "100vw",
    height: "100vh",
    opacitiy: "1",
    zIndex: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    cursor: "pointer",
    "& img": {
      transform: "rotate(0deg)",
      cursor: "none",
      height: "auto",
      maxHeight: "88vh",
      width: "min(88vw, 75rem)",
      objectFit: "contain",
      borderRadius: "0.5rem",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    }
  }
}));

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [zoomedImage, setZoomedImage] = useState("");

  useEffect(() => {
    // import all images from public folder
    const files = require.context('../../../public/images', false, /\.(PNG|png|jpe?g|svg)$/);
    const images = files.keys().map(file => {
      // remove ./ and .png from file name
      file = "images/" + file.replace('./', '');
      return file;
    })
    setImages(images);
  }, []);

  const zoomImageOnClick = (image) => {
    if (!image) {
      setZoomedImage("");
    } else {
      setZoomedImage(image.target.src);
    }
  }

  return (
    <MainContainer>
      <Fade in={zoomedImage !== ""} timeout={200}>
        <ZoomedImageContainer onClick={() => zoomImageOnClick(false)}>
          <img src={zoomedImage} alt="zoomed" />
        </ZoomedImageContainer>
      </Fade>

      <ImagesContainer>
        {
          images.map((image, index) => {
            return (
              <ImageContainer>
                <img src={image} alt={`image-${index}`} onClick={zoomImageOnClick} />
              </ImageContainer>
            );
          })
        }
      </ImagesContainer>
    </MainContainer>
  );
}

export default ImageGallery;