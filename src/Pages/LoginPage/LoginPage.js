import React from "react";
import Logo from "../../Components/Logo/Logo";
import "./LoginPage.css";
import LoginForm from "../../Components/LoginForm/LoginForm";

const LoginPage = () => {
    return(
        <div className="login-page-form">
            <Logo width={"44.5px"} height={"44.5px"} fontSize={"24px"} lineHeight={"28px"} marginLeft={"11.5px"}/>
            <LoginForm />
        </div>
    )
}

export default LoginPage;