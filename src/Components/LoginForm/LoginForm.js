import React, {useState} from "react";
import InputForm from "../InputForm/InputForn";
import Button from "../Button/Button";
import {connect} from "react-redux";
import "./LoginForm.css";

const LoginForm = ({getMailText, getPasswordText}) => {
    const[correctMailInput, setCurrectMailInput] = useState(true);
    const[correctPAsswordInput, setCurrectPasswordInput] = useState(true);

    console.log(correctMailInput)
    console.log(getPasswordText)

    const enterHandlerClick = () => {
        if(getMailText === ""){
            setCurrectMailInput(false)
        }else setCurrectMailInput(true)
        if(getPasswordText === ""){
            setCurrectPasswordInput(false)
        }else setCurrectPasswordInput(true)
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
                    <InputForm name={"Почта"} marginTop={"8.5px"} className={correctMailInput === true ? "input-mail" : "wrong-input-mail"}/>
                </div>
                {correctMailInput === false ? errorMessage("почту") : null}
                <div className="pswrd-input">
                    <InputForm name={"Пароль"} marginTop={"8.5px"} className={correctPAsswordInput === true ? "input-pswrd" : "wrong-input-pswrd"}/>
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
    }
}

export default connect(mapStateToProps)(LoginForm);