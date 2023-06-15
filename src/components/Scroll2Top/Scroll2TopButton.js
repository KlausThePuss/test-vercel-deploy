import React from "react";
import { useEffect, useState } from "react";
import "./scroll2TopButton.css";
import scrollUpImage from "../../assets/scrollUp.png";

const Scroll2TopButton = () => {
    const [scroll2TopButton, setScroll2TopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScroll2TopButton(true);
            } else {
                setScroll2TopButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="scroll2Top">
            {scroll2TopButton && (
                <button onClick={scrollUp}>
                    <img src={scrollUpImage} alt="scrollUp2ToTop" />
                </button>
            )}
        </div>
    );
};

export default Scroll2TopButton;
