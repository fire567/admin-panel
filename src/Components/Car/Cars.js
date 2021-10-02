import React from "react";
import './Cars.css';
import Button from "../Button/Button";
import {connect} from "react-redux";
import { useHistory  } from 'react-router-dom';
import { setCarId } from "../actions";



const Car = ({cars, setCarId}) => {
  let history = useHistory();
  const categoryName = [
    {id: 0, name: "Название авто"},
    {id: 1, name: "Мин. цена"},
    {id: 2, name: "Макс. цена"},
    {id: 3, name: "Номер"},
    {id: 4, name: "Категория"},
    {id: 5, name: "Изменить"},
  ]

  const enterHandlerClick = (id) => {
    setCarId(id)
    history.push("/car-edit")
  }

  return (
    <table className="cars-form">
    <thead>
    <tr className="cells-headers">
    {categoryName.map((category) => (
            <th>{category.name}</th>
          ))}
    </tr>
    </thead>
    <tbody>
    {cars ?
    cars.data.map((car) => (
    <tr className="cells">
          <td className="current-entity">{car.name}</td>
          <td className="current-entity">{car.priceMin}</td>
          <td className="current-entity">{car.priceMax}</td>
          <td className="current-entity">{car.number}</td>
          <td className="current-entity">{car.categoryId ? car.categoryId.name : null}</td>
          <td className="current-entity">
              <div className="change-car-button" onClick={() => enterHandlerClick(car.id)}>
                <Button text="Изменить" color="#007BFF"/>
              </div>
          </td>
          </tr>
      ))
     : null
    }
    </tbody>
    </table>
  );
}

const mapStateToProps = (state) => {
  return{
      cars: state.cars
      
  }
}

export default connect(mapStateToProps, {
  setCarId: setCarId,
})(Car);