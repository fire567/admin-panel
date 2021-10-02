import React from "react";
import InputForn from "../../InputForm/InputForn";
import { useHistory  } from 'react-router-dom';
import {connect} from "react-redux";
import { editCity } from "../../actions";
import { refreshData } from "../../actions";
import "./CityEdit.css";

const CitiesEdit = ({editedCity, cityId, editCity, refreshData, refreshReducer}) => {
    let history = useHistory();
    const submitChange = (e) => {
        e.preventDefault()
        editCity(editedCity, `/db/city/${cityId}`)
        refreshData(!refreshReducer)
        history.push("/cities-list")
    }

    return (
        <div className="edit-page">
            <div className="edit-form">
                <form onSubmit={event => submitChange(event)}>
                    <InputForn className={"city-edit"} name={"Изменить название"}/>
                    <input className="edit-btn" type="submit" value="Принять"/>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        editedCity: state.editedCity,
        cityId: state.cityId,
        refreshReducer: state.refreshReducer,
    }
}

export default connect(mapStateToProps, {
    editCity: editCity,
    refreshData: refreshData,
})(CitiesEdit);