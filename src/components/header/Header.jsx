
import "./keyframes.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Checklist, Home, Storage } from "@mui/icons-material";
import { Tooltip, styled } from "@mui/material"

import logo from "../../icon.svg";

const StyledContainerItem = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "fixed",
    zIndex: 1000,
    top: "1.25rem",
    left: "1.25rem",
    borderRadius: "50%",
    width: "3.5rem",
    height: "3.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(41, 31, 48, 0.82)",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    boxShadow: "0 8px 28px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(14px)",
    transition: "background-color 180ms ease, transform 180ms ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(93, 58, 105, 0.95)",
      transform: "translateY(-2px)",
    },
  },
}));

const HeaderElement = styled("div")(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    position: "fixed",
    zIndex: 1000,
    borderRadius: "50%",
    left: "1.75rem",
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(41, 31, 48, 0.92)",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.24)",
    transition: "background-color 180ms ease, transform 180ms ease",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(93, 58, 105, 0.95)",
      transform: "translateX(2px)",
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
                  top: `${(index * 3.25) + 5.5}rem`,
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
              height: "2.5rem",
              width: "2.5rem",
            }}
          />
        </StyledContainerItem>
      </Tooltip>
    </>
  )
}

export default Header