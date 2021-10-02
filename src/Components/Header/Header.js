import React, {useState, useEffect} from "react";
import Cookies from "js-cookie";
import {connect} from "react-redux";
import { setToken } from "../../Components/actions";
import { useHistory  } from 'react-router-dom';
import search from "../../assets/search.svg";
import notifications from "../../assets/notifications.svg";
import count from "../../assets/count.svg";
import userAvatar from "../../assets/user-avatar.svg";
import dropDown from "../../assets/dropdown.svg"
import {ReactSVG} from "react-svg";
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(false)
    let history = useHistory();

    useEffect(() => {
        if(!Cookies.get("userToken")){
            history.push(`/`)
        }
    },[])

    const logOut = () => {
        Cookies.remove('userToken')
        window.location.reload();
    }

    const showDropdown = () => {
        setActiveDropdown(!activeDropdown)
    }

    return(
        <div className="header-form">
            <div className="header-input-form">
                <ReactSVG src={search} className="search-pic" alt="search"/>
                <input className="header-input" placeholder="Найти ..."/>
            </div>
            <div className="notifications">
                <ReactSVG src={count}  className="count-pic" alt="count"/>
                <ReactSVG src={notifications}  className="notif-pic" alt="notifications"/>
            </div>
            <div className="logout-form" onClick={showDropdown}>
                <ReactSVG src={userAvatar}  className="user-pic" alt="user"/>
                <div className="user-name">
                    Admin
                </div>
                <ReactSVG src={dropDown}  className="dropdown-pic" alt="dropdown"/>
                <div className={activeDropdown === true ? "show-dropdown" : "hide-dropdown"}>
                    <div className="logout-button" onClick={logOut}>
                        <Button text="Выйти" color="#C4183C"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;