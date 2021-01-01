import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { GiCrownedSkull, GiThunderSkull } from "react-icons/gi";

import "./navbar.css";
function Navbar() {
    const [burger, setburger] = useState(false);
  
    const [button, setButton] = useState(true);

    const handleburger = () => setburger(!burger);
    const closeMobileMenu = () => setburger(false);

  

    const showButton = () => {
        if (window.innerWidth <= 1000) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <div className={  "navbar"}>
                <div className="navbar-container container">
                    {!burger && (
                        <Link
                            to="/"
                            className="navbar-logo"
                            onClick={closeMobileMenu}
                        >
                            <h1>LOGO</h1>
                        </Link>
                    )}

                    <div className="menu-icon" onClick={handleburger}>
                        {!burger ? <GiCrownedSkull /> : <GiThunderSkull />}
                    </div>
                    <ul className={burger ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                className="nav-links"
                                onClick={closeMobileMenu}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-links"
                                onClick={closeMobileMenu}
                                to="/designs"
                            >
                                Woks
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-links"
                                onClick={closeMobileMenu}
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-links"
                                onClick={closeMobileMenu}
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
