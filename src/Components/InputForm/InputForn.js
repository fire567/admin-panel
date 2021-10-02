import React, {useState} from "react";
import {connect} from "react-redux";
import {setMailText} from "../actions/index";
import {setPasswordText} from "../actions/index";
import { editCityText } from "../actions/index";
import { addCityText } from "../actions/index";
import "./InputForm.css";

const InputForm = ({name, marginTop, className, setMailText, setPasswordText, type, editCityText, addCityText}) => {
    const [text, setText] = useState("");
    const textChange = (event, className) => {
        setText(event.target.value);
        if(className === "input-mail" || className === "wrong-input-mail"){
            setMailText(event.target.value)
        }
        if(className === "input-pswrd" || className === "wrong-input-pswrd"){
            setPasswordText(event.target.value)
        }
        if(className === "city-edit"){
            editCityText(event.target.value)
        }
        if(className === "add-city"){
            addCityText(event.target.value)
        }
        
    }

    return(
        <div className="input-form">
            <label className="input-name">
                {name}
            </label>
            <br />
            <input type={type} className={className} style={{marginTop: marginTop}} value={text} onChange={(event) => textChange(event, className)}/>
        </div>
    );
}

export default connect(null, {
    setMailText: setMailText,
    setPasswordText: setPasswordText,
    editCityText: editCityText,
    addCityText: addCityText,
})(InputForm);