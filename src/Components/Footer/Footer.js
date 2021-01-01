import React from "react";
import "./footer.css";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-grid">
                        <div className="left-wrapper">
                            <span>
                                <PhoneIphoneIcon fontSize="large" />
                                <h3>090145123684</h3>
                            </span>
                            <span>
                                <AlternateEmailIcon fontSize="large" />
                                <h3>
                                    <a href="#1">Example@gmail.com</a>
                                </h3>
                            </span>
                        </div>
                        <span className="footer-line"></span>
                        <div className="right-wrapper">
                            <div className="social-icons">
                                <a
                                    href="https://www.telegram.org"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <FaTelegram size={34} />
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <TiSocialInstagramCircular />
                                </a>
                                <TiSocialTwitterCircular />
                                <a
                                    href="https://www.whatsapp.com"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <RiWhatsappFill size={35} color="#4AC959" />
                                </a>

                                <a
                                    href="https://www.facebook.com"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <TiSocialFacebookCircular />
                                </a>

                                <a
                                    href="https://www.youtube.com"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <TiSocialYoutubeCircular color="#FF0000" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <span>
                    <h4>&copy; 2020 Faez tgh | All right reserved</h4>
                </span>
            </div>
        </>
    );
}

export default Footer;
