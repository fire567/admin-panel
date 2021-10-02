import React from "react";
import Button from "../Button/Button";
import { useHistory  } from 'react-router-dom';
import { setCityId } from "../actions";
import { deleteEntity } from "../actions";
import { refreshData } from "../actions";
import {connect} from "react-redux";


const Cities = ({cities, setCityId, deleteEntity, refreshData, refreshReducer}) => {
    let history = useHistory();
    const categoryName = [
        {id: 0, name: "Город"},
        {id: 1, name: "Изменить"},
        {id: 2, name: "Удалить"},
      ]

    const changeButtonHandler = (id) => {
        setCityId(id)
        history.push("/city-edit")
    }

    const deleteCityHandler = (id) => {
        refreshData(!refreshReducer)
        deleteEntity(`/db/city/${id}`, "DELETE_CITY")
    }

    console.log(cities)

    return(
        <table className="cars-form">
            <thead>
            <tr className="cells-headers">
            {categoryName.map((category) => (
                    <th>{category.name}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {cities ? 
                cities.data.map((citie) => (
                <tr className="cells">
                    <td className="current-entity">{citie.name}</td>
                    <td className="current-entity">
                        <div className="change-car-button" onClick={() => changeButtonHandler(citie.id)}>
                            <Button text="Изменить" color="#007BFF"/>
                        </div>
                    </td>
                    <td className="current-entity">
                        <div className="change-car-button" onClick={() => deleteCityHandler(citie.id)}>
                            <Button text="Удалить" color="#C4183C"/>
                        </div>
                    </td>
                </tr>
                )) : null}
            </tbody>
    </table>
    )
}

const mapStateToProps = (state) => {
    return{
        refreshReducer: state.refreshReducer,
    }
}

export default connect(mapStateToProps, {
    setCityId: setCityId,
    deleteEntity: deleteEntity,
    refreshData: refreshData,
})(Cities);