import React from "react";
import logoIcon from "../../assets/logo-icon.svg";
import {ReactSVG} from "react-svg";
import "./Logo.css"

const Logo = ({width, height, fontSize, lineHeight, marginLeft}) => {
    return(
        <header className="logo-form">
            <ReactSVG src={logoIcon} style={{width: width, height: height}}/>
            <div className="logo-text" style={{fontSize: fontSize, lineHeight: lineHeight, marginLeft: marginLeft}}>
                Need for drive
            </div>
        </header>
    );
}

export default Logo;