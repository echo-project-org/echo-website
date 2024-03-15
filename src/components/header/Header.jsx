
import "./keyframes.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Checklist, Home, Storage } from "@mui/icons-material";
import { Tooltip, styled } from "@mui/material"

import logo from "../../icon.svg";

const StyledContainerItem = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "fixed",
    zIndex: "1",
    margin: "2rem 0 0 2rem",
    borderRadius: "50%",
    width: "5rem",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(133, 118, 134)",
    transition: "all 0.1s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgb(170, 151, 172)",
    },
  },
}));

const HeaderElement = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "fixed",
    zIndex: "1",
    borderRadius: "50%",
    margin: "2rem 0 0 3.2rem",
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(133, 118, 134)",
    transition: "all 0.1s ease-in-out",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgb(170, 151, 172)",
    },
  },
}));

function HeaderSubmenu({ clicked }) {
  const navigate = useNavigate();

  const changeRoute = (route) => {
    clicked();
    navigate(route);
  }

  const elements = [
    { name: "Home", route: "/", icon: <Home /> },
    { name: "Status", route: "/status", icon: <Storage /> },
    { name: "Versions", route: "/versions", icon: <Checklist />, link: "https://github.com/echo-project-org/echo-client/releases" }
  ]

  return (
    <>
      {
        elements.map((element, index) => {
          return (
            <Tooltip title={element.name} placement="right">
              <HeaderElement
                sx={{
                  top: `${(index * 4) + 6}rem`,
                }}
                key={index}
                onClick={() => {
                  if (element.link) return window.open(element.link, "_blank");
                  changeRoute(element.route)
                }}
              >
                {element.icon}
              </HeaderElement>
            </Tooltip>
          )
        })
      }
    </>
  )

}

function Header({ }) {
  const [subMenu, setSubMenu] = useState(false);
  const [wasOpened, setWasOpened] = useState(false);

  const toggleMenu = () => {
    setSubMenu((prev) => !prev);
    setWasOpened(true);
  }

  return (
    <>
      {subMenu ? <HeaderSubmenu clicked={toggleMenu} /> : null}
      <Tooltip title="Other pages" placement="right">
        <StyledContainerItem onClick={toggleMenu}>

          <img
            src={logo}
            alt="logo"
            className={subMenu ? "rotate" : (wasOpened ? "rotateInv" : "")}
            style={{
              height: "3rem",
              width: "3rem",
            }}
          />
        </StyledContainerItem>
      </Tooltip>
    </>
  )
}

export default Header