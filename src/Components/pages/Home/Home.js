import React from "react";
import Navbar from "../../Navbar/Navbar";
import lozi from "../../../assets/lozi.svg";
import tattooGuy from "../../../assets/img-tattooGuy.jpg";
import video from "../../../assets/video.png";
import circles from "../../../assets/circles.svg";
import "./home.css";
import Footer from "../../Footer/Footer";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
function Home() {
    return (
        <>
            <Navbar />
            <div className="first-sec">
                <div className="sec-container">
                    <Grid container spacing={1}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className="left-wrapper">
                                <div className="lozi-pic">
                                    <Fade left duration={3000}>
                                        <img src={lozi} alt="lozi man" />
                                    </Fade>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className="right-wrapper">
                                <div className="hero-desc">
                                    <Fade duration={3000} delay={500}>
                                        <h1>Tattoo Studio</h1>
                                    </Fade>
                                    <Fade duration={3000} delay={1000}>
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit.
                                            Voluptates eaque quas, adipisci
                                            voluptatibus odio doloremque autem
                                            ducimus deleniti iste quam.
                                        </p>
                                    </Fade>
                                    <Fade bottom big duration={2500}>
                                        <button className="dark-btn btn-hover">
                                            BOOK NOW!
                                        </button>
                                    </Fade>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="faez">
                        <Fade big left duration={1500}>
                            <span className="line"></span>
                        </Fade>
                        <Zoom duration={1500}>
                            <h4>FAEZ</h4>
                        </Zoom>
                        <Fade big right duration={1500}>
                            <span className="line"></span>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className="second-sec">
                <div className="sec-container">
                    <div className="grid-sec">
                        <div className="left-wrapper">
                            <div className="style-desc">
                                <h1>various Styles</h1>
                                <p>
                                    any style you want like lorem ipsum fasow
                                    daskka any style you want like lorem ipsum
                                    fasow daskka any style you want like lorem
                                    ipsum fasow daskka any style you want like
                                    lorem ipsum fasow daskka
                                </p>

                                <button className="light-btn btn-hover">
                                    DESIGNS
                                </button>
                            </div>
                        </div>
                        <div className="right-wrapper">
                            <div className="circles">
                                <img src={circles} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="third-sec">
                <div className="sec-container">
                    <div className="grid-sec">
                        <div className="left-wrapper">
                            <div className="tattoo-calture-desc">
                                <h1>Tattoo Calture</h1>
                                <p>
                                    Safe sajd lkadk f ka as a a asldmkasmd aasd
                                    msakdm kaskd askmd kas a das fa adksdm
                                    aksdaasfnas faf ak fakdk asmfkasaaas akakfn
                                    kksf akkas aksd ka
                                </p>

                                <img src={tattooGuy} alt="" />
                            </div>
                        </div>
                        <div className="right-wrapper">
                            <div className="tattoo-calture-video">
                                <img src={video} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
