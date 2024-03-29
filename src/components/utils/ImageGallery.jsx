import { useEffect, useState } from 'react';
import { styled, Container, Fade } from "@mui/material"

const MainContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
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
  }
}));

const ImageContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: "25rem",
    margin: "1.5rem",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    borderRadius: "0.5rem",
    backgroundColor: "rgb(72, 50, 74)",
    boxShadow: "0px 0px 10px 0px rgba(255,255,255,0.75)",
    "& img": {
      margin: "2rem 3rem 2rem 3rem",
      width: "20rem",
      objectFit: "cover",
      borderRadius: "0.5rem",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      zIndex: "0",
      transition: "all 0.1s ease-in-out",
      "&:hover": {
        cursor: "pointer",
        zIndex: "0",
        transform: "scale(1.3)",
      }
    },
  },
  [theme.breakpoints.up('md')]: {
    width: "35rem",
    margin: "1.5rem",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    borderRadius: "0.5rem",
    backgroundColor: "rgb(72, 50, 74) ",
    boxShadow: "0px 0px 10px 0px rgba(255,255,255,0.75)",
    "& img": {
      margin: "2rem 3rem 2rem 3rem",
      width: "30rem",
      objectFit: "cover",
      borderRadius: "0.5rem",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      zIndex: "0",
      transition: "all 0.1s ease-in-out",
      "&:hover": {
        cursor: "pointer",
        zIndex: "0",
        transform: "scale(1.3)",
      }
    },
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
      height: "45%",
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
      height: "fit-content",
      width: "70%",
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