import { combineReducers } from "redux";
import getMailText from "./getMailText";
import getPasswordText from "./getPasswordText";
import authReducer from "./authReducer";
import getToken from "./getToken";
import ordersReducer from "./ordersReducer";
import citiesReducer from "./citiesReducer";
import statusReducer from "./statusReducer";
import cityFilter from "./cityFilter";
import rateFilter from "./rateFilter";
import filtredOrder from "./filtredOrder";
import carsReducer from "./carsReducer";
import editedCity from "./editedCity";
import cityIdReducer from "./cityIdReducer";
import refreshReducer from "./refreshReducer";
import addCityReducer from "./addCityReducer";
import carIdReducer from "./carIdReducer";
import currentCar from "./currentCar";
import reloadOrderReducer from "./reloadOrderReducer";
import currentOrder from "./currentOrder";
import pointsReducer from "./pointsReducer";
import rateReducer from "./rateReducer";
import orderIdReducer from "./orderIdReducer";

export default combineReducers({
    getMailText: getMailText,
    getPasswordText: getPasswordText,
    auth: authReducer,
    getToken: getToken,
    orders: ordersReducer,
    cities: citiesReducer,
    status: statusReducer,
    cityFilter: cityFilter,
    rateFilter: rateFilter,
    filtredOrder: filtredOrder,
    cars: carsReducer,
    editedCity: editedCity,
    cityId: cityIdReducer,
    refreshReducer: refreshReducer,
    addCityTextReducer: addCityReducer,
    carId: carIdReducer,
    currentCar: currentCar,
    reloadOrderReducer: reloadOrderReducer,
    currentOrder: currentOrder,
    points: pointsReducer,
    rate: rateReducer,
    orderIdReducer: orderIdReducer,
})