import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <div className="gpt3__footer">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to step in to the future before others
                </h1>
            </div>
            <div className="gpt3__footer-button">
                <button type="button">Request Early Access</button>
            </div>
            <div className="gpt3__footer-content-all">
                <div className="gpt3__footer-content-logo">
                    <img src={logo} alt="logo"></img>
                    <h3>
                        Crechterwoord K12 182 DK Alknjkcb,All Rights Reserved
                    </h3>
                </div>
                <div className="gpt3__footer-footer">
                    <div className="gpt3__footer-footer_links">
                        <h2>Links</h2>
                        <h3>Overons</h3>
                        <h3>Social Media</h3>
                        <h3>Counters</h3>
                        <h3>Contact</h3>
                    </div>
                    <div className="gpt3__footer-footer_company">
                        <h2>Company</h2>
                        <h3>Terms & Conditions</h3>
                        <h3>Privacy Policy</h3>
                        <h3>Contact</h3>
                    </div>
                    <div className="gpt3__footer-footer_getInTouch">
                        <h2>Get in touch</h2>
                        <h3>Crechterwoord K12 182 DK Alknjkcb</h3>
                        <h3>085-132567</h3>
                        <h3>info@payme.net</h3>
                    </div>
                </div>
            </div>
            <div className="gpt3__footer-footer_DCMA">
                <p>
                    Developed by
                    <a
                        href="https://twitter.com/KlausThePuss"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @KlausThePuss
                    </a>
                </p>
                <p>@2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
