import React, {useState} from "react";
import {connect} from "react-redux";
import {setMailText} from "../actions/index";
import {setPasswordText} from "../actions/index";
import "./InputForm.css";

const InputForm = ({name, marginTop, className, setMailText, setPasswordText}) => {
    const [text, setText] = useState("");
    const textChange = (event, className) => {
        setText(event.target.value);
        if(className === "input-mail" || className === "wrong-input-mail"){
            setMailText(event.target.value)
        }
        if(className === "input-pswrd" || className === "wrong-input-pswrd"){
            setPasswordText(event.target.value)
        }
        
    }

    return(
        <div className="input-form">
            <label className="input-name">
                {name}
            </label>
            <br />
            <input className={className} style={{marginTop: marginTop}} value={text} onChange={(event) => textChange(event, className)}/>
        </div>
    );
}

export default connect(null, {
    setMailText: setMailText,
    setPasswordText: setPasswordText,
})(InputForm);