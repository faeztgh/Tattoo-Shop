import React from "react";
import "./designs.css";
import Navbar from "../../Navbar/Navbar";
import tattooGuy from "../../../assets/img-tattooGuy.jpg";
import Cards from "./Cards";
import Footer from "../../Footer/Footer";
function Designs() {
    return (
        <>
            <Navbar />

            <div className="designs-container">
                <div className="header-wrapper">
                    <div
                        className="header-pic"
                        style={{ backgroundImage: `url(${tattooGuy})` }}
                    >
                        <div className="header-text">
                            <p>WORKS</p>
                            <div className="scroll-side ">
                                <span className=""></span>
                                <h4>SCROLL</h4>
                                <span className=""></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards-container">
                    <Cards />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Designs;
