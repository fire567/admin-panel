import React from "react";
import InputForn from "../../InputForm/InputForn";
import {connect} from "react-redux";
import { refreshData } from "../../actions";
import { useHistory  } from 'react-router-dom';
import { postEntity } from "../../actions";
import "./AddCity.css";

const AddCity = ({refreshData, refreshReducer, addCityTextReducer, postEntity}) => {
    let history = useHistory();
    const submitChange = (e) => {
        e.preventDefault()
        postEntity(addCityTextReducer, "db/city", 'POST_CITY')
        refreshData(!refreshReducer)
        history.push("/cities-list")
    }

    return(
        <div className="add-page">
            <div className="add-form">
                <form onSubmit={event => submitChange(event)}>
                    <InputForn className={"add-city"} name={"Введите город"}/>
                    <input className="add-btn" type="submit" value="Принять"/>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        refreshReducer: state.refreshReducer,
        addCityTextReducer: state.addCityTextReducer
    }
}

export default connect(mapStateToProps, {
    refreshData: refreshData,
    postEntity: postEntity,
})(AddCity);