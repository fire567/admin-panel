import { combineReducers } from "redux";
import getMailText from "./getMailText";
import getPasswordText from "./getPasswordText";
import authReducer from "./authReducer";
import getToken from "./getToken";

export default combineReducers({
    getMailText: getMailText,
    getPasswordText: getPasswordText,
    auth: authReducer,
    getToken: getToken,
})