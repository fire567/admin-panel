import React, {useEffect} from "react";
import InputForn from "../../InputForm/InputForn";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {connect} from "react-redux";
import { getCurrentCar } from "../../actions";
import "./CarEdit.css";

const CarEdit = ({carId, getCurrentCar, currentCar}) => {

    useEffect(() => {
        getCurrentCar(carId)
    }, [])

    const submitChange = () => {
        console.log("asd")
    }

    return(<div className="admin-panel-form">
    <Sidebar />
    <div className="right-side">
        <Header />
        <div className="content">
            <div className="edit-car-page">
                <div className="car-card-form">
                    asd
                </div>
                <div className="edit-car-form">
                    <form onSubmit={event => submitChange(event)}>
                        <InputForn className={"city-edit"} name={"Изменить название"}/>
                        <InputForn className={"city-edit"} name={"Изменить название"}/>
                        <input className="edit-btn" type="submit" value="Принять"/>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return{
        carId: state.carId,
        currentCar: state.currentCar,
    }
}

export default connect(mapStateToProps, {
    getCurrentCar: getCurrentCar
})(CarEdit);