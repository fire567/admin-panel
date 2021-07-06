import { combineReducers } from "redux";
import getMailText from "./getMailText";
import getPasswordText from "./getPasswordText";

export default combineReducers({
    getMailText: getMailText,
    getPasswordText: getPasswordText,
})