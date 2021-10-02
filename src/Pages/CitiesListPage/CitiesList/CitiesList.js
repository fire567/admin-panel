import React, {useEffect} from "react";
import Cities from "../../../Components/Cities/Cities";
import { getCities } from "../../../Components/actions";
import Button from "../../../Components/Button/Button";
import { useHistory  } from 'react-router-dom';
import {connect} from "react-redux";
import "./CitiesList.css";

const CitiesList = ({getCities, cities, refreshReducer}) => {
    let history = useHistory();

    const ref = () => {
        getCities()
    }

    useEffect(() => {
        setTimeout(
            ref, 500
        )
       
    }, [refreshReducer])

    const addCityHandler = () => {
        history.push("/add-city")
    }

    return (
        <div className="order-list-page-form">
            <div className="order-list-title">
                Города
                <div className="add-btn" onClick={() => addCityHandler()}>
                    <Button text="Добавить" color="#007BFF"/>
                </div>
            </div>
            <div className="order-list-form">
            {cities ?
                <Cities cities={cities}/> : null
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cities: state.cities,
        refreshReducer: state.refreshReducer,
    }
}

export default connect(mapStateToProps, {
    getCities: getCities
})(CitiesList);