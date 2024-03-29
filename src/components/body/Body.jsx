
import "./bubbles.css";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Routes/Home";
import Status from "./Routes/Status";
import { useEffect } from "react";

function Body({ }) {
    const location = useLocation();
    // add boubles on sides of page in background
    useEffect(() => {
        const bubbles = () => {
            let bubble = document.createElement("div");
            bubble.classList.add("bubble");
            document.body.appendChild(bubble);
            let size = Math.random() * 60 + 40 + "px";
            bubble.style.width = size;
            bubble.style.height = size;
            const left = Math.random() * window.innerWidth + "px";
            bubble.style.left = left;
            const animDuration = Math.random() * 6 + 6;
            bubble.style.animationDuration = animDuration + "s";
            bubble.style.animationName = "moveUp";
            bubble.style.animationTimingFunction = "ease-in-out";
            bubble.style.animationIterationCount = "forwards";
            setTimeout(() => {
                bubble.remove();
            }, animDuration * 1000);
        };
        setInterval(bubbles, 1000);
    }, [location]);

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<Home />} />
            <Route path="/status" element={<Status />} />
        </Routes>
    )
}

export default Body