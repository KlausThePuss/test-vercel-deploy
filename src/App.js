import React from "react";

import "./App.css";

import { Brand, CTA, Navbar } from "./components";
import {
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    WhatGPT3,
} from "./containers";
import Scroll2TopButton from "./components/Scroll2Top/Scroll2TopButton";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
            <Scroll2TopButton />
        </div>
    );
};

export default App;
