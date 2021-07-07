import React, {useState, useEffect} from "react";
import Cookies from "js-cookie";
import InputForm from "../InputForm/InputForn";
import Button from "../Button/Button";
import {connect} from "react-redux";
import {postAuth} from "../actions/index";
import { setToken } from "../actions/index";
import { useHistory  } from 'react-router-dom';
import "./LoginForm.css";

const LoginForm = ({getMailText, getPasswordText, postAuth, auth, getToken, setToken}) => {
    const[correctMailInput, setCurrectMailInput] = useState(true);
    const[correctPAsswordInput, setCurrectPasswordInput] = useState(true);
    let history = useHistory();

    useEffect(() => {
        if(auth.access_token){
            Cookies.set("userToken", auth.access_token)
            setToken(Cookies.get("userToken"))
        }
        if(getToken){
            history.push(`/order-list`)
        }
        
    }, [auth, getToken])

    const enterHandlerClick = () => {
        if(getMailText === ""){
            setCurrectMailInput(false)
        }else setCurrectMailInput(true)
        if(getPasswordText === ""){
            setCurrectPasswordInput(false)
        }else setCurrectPasswordInput(true)
        postAuth({username: getMailText, password: getPasswordText, client_secret: "4cbcea96de", client_id: "555555"})
       
    }

    

    const errorMessage = (message) => {
        return (
            <div className="error-message">
                Введите {message}
            </div>
        )
    }

    return(
        <div className="login-form">
            <header className="enter-text">
                Вход
            </header>
            <div className="inputs-form">
                <div className="mail-input">
                    <InputForm type={"text"} name={"Почта"} marginTop={"8.5px"} className={correctMailInput === true ? "input-mail" : "wrong-input-mail"}/>
                </div>
                {correctMailInput === false ? errorMessage("почту") : null}
                <div className="pswrd-input">
                    <InputForm type={"password"} name={"Пароль"} marginTop={"8.5px"} className={correctPAsswordInput === true ? "input-pswrd" : "wrong-input-pswrd"}/>
                </div>
                {correctPAsswordInput === false ? errorMessage("пароль") : null}
                <div className="bottom">
                    <div  className="request">Запросить доступ</div>
                    <div className="button-size" onClick={enterHandlerClick}>
                        <Button text="Войти" color="#007BFF"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        getMailText: state.getMailText,
        getPasswordText: state.getPasswordText,
        auth: state.auth,
        getToken: state.getToken,
    }
}

export default connect(mapStateToProps, {
    postAuth: postAuth,
    setToken: setToken,
})(LoginForm);