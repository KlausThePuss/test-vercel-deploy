import React from "react";
import "./brand.css";
import { shopify, google, dropbox, slack } from "./img-imports";

const Brand = () => {
    return (
        <div className="gpt3__brand  ">
            <div>
                <img src={shopify} alt="shopify" />
            </div>
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div>
        </div>
    );
};

export default Brand;
