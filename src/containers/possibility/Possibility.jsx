import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
    return (
        <div className="gpt3__possib section__padding" id="possibility">
            <div className="gpt3__possib-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="gpt3__possib-content">
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <h3>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </h3>
                <h2>Request Early Access to Get Started</h2>
            </div>
        </div>
    );
};

export default Possibility;
