import React, {useEffect, useState} from "react";
import OrderEditInput from "./OrderEditInput/OrderEditInput";
import { getCities, getPoints, getStatus, getRate } from "../../actions/index";
import exitBtn from "../../../assets/exitBtn.svg";
import {connect} from "react-redux";
import DatePicker from "react-datepicker";
import Button from "../../Button/Button";
import { useHistory  } from 'react-router-dom';
import { getCurrentOrder } from "../../actions/index";
import "./OrderEdit.css";


const OrderEdit = ({currentOrder, getCities, cities, getPoints, points, getStatus, status, getRate, rate, orderIdReducer, getCurrentOrder}) => {
    let history = useHistory();
    const [loaded, setLoaded] = useState(false)
    const [setSinceDate, chooseSinceDate] = useState(null)
    const [setEndDate, chooseEndDate] = useState(null)

    /*
    const asd = () => {
        chooseSinceDate(currentOrder.data.dateFrom)
           // setFiltredPoints(points.data.filter((point) => point.cityId !== null && currentOrder.data.cityId.name === point.cityId.name))
        
    }
    */
    
    
    useEffect(() => {
        getCurrentOrder(orderIdReducer)
        getCities()
        getPoints()
        getStatus()
        getRate()
        if(currentOrder){
            chooseSinceDate(currentOrder.data.dateFrom)
            chooseEndDate(currentOrder.data.dateTo)
        }
        setLoaded(true)
    }, [orderIdReducer])
        
    const sinceDate = (event) => {
        //setMinTime(event);
        chooseSinceDate(Date.parse(event))
    }

    const endDate = (event) => {
        //setMinTime(event);
        chooseEndDate(Date.parse(event))
    }

    const editHandler = () => {
        
    }

    const cancelHandler = () => {
        history.push("/order-list")
    }

    console.log(orderIdReducer)

    return(currentOrder ? 
        <div className="edit-page">
        <div className="edit-order-form">
            <header className="order-header">Заказ: {currentOrder.data.id}</header>
            <div>
                <div className="order-edit-body">
                <OrderEditInput editName={"Город"} items={cities.data} startValue={currentOrder.data.cityId ? currentOrder.data.cityId : {name: "Не указано"}}/>
                <OrderEditInput editName={"Пункт выдачи"} items={points.data} startValue={currentOrder.data.pointId ? currentOrder.data.pointId : {name: "Не указано"}}/>
                <OrderEditInput editName={"Статус"} items={status.data} startValue={currentOrder.data.orderStatusId}/>
                <OrderEditInput editName={"Тариф"} items={rate.data} startValue={currentOrder.data.rateId ? currentOrder.data.rateId.rateTypeId : {name: "Не указано"}}/>
                <div className="input-date-form">
                <div className="since-date">Начальная дата </div>
                    <div className="input-date">
                        <DatePicker 
                            selected={setSinceDate} 
                            onChange={sinceDate} 
                            dateFormat={"dd.MM.yyyy HH:mm"}
                            showTimeSelect
                            timeFormat={"HH:mm"}
                            className="data-input"
                            placeholderText="Введите дату и время ..."
                        />
                            <button type="reset" className="reset-data-btn" onClick={() => chooseSinceDate(null)}>
                                <img src={`${exitBtn}`}  />
                            </button> 
                    </div>
                </div>
                <div className="input-date-form">
                <div className="since-date">Конечная дата</div>
                    <div className="input-date">
                        <DatePicker 
                            selected={setEndDate} 
                            onChange={endDate} 
                            dateFormat={"dd.MM.yyyy HH:mm"}
                            minDate={new Date()}
                            showTimeSelect
                            timeFormat={"HH:mm"}
                            className="data-input"
                            placeholderText="Введите дату и время ..."
                        />
                            <button type="reset" className="reset-data-btn" onClick={() => chooseSinceDate(null)}>
                                <img src={`${exitBtn}`}  />
                            </button> 
                    </div>
                </div>
                </div>
                <div className="edit-order-bottom">
                    <div className="edit-order-btn" onClick={() => editHandler}>
                        <Button text={"Принять"} color={"#007BFF"} />
                    </div>
                    <div className="cancel-btn" onClick={() => cancelHandler()}>
                        <Button text={"Отмена"} color={"#C4183C"} />
                    </div>
                </div>
            </div>
        </div>
        </div> : null
    );
};

const mapStateToProps = (state) => {
    return{
        currentOrder: state.currentOrder,
        cities: state.cities,
        points: state.points,
        status: state.status,
        rate: state.rate,
        orderIdReducer: state.orderIdReducer
    }
}

export default connect(mapStateToProps, {
    getCities: getCities,
    getPoints: getPoints,
    getStatus: getStatus,
    getRate: getRate,
    getCurrentOrder: getCurrentOrder,
})(OrderEdit);