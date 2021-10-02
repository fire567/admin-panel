import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer-form">
            <div className="footer-links">
                <a>Главная страница</a>
                <a className="second-link">Ссылка</a>
            </div>
            <div className="footer-text">
                Copyright © 2020 Simbirsoft
            </div>
        </footer>
    )
}

export default Footer;