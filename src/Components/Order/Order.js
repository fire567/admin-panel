import React from "react";
import {ReactSVG} from "react-svg";
import { getCurrentOrder } from "../actions";
import done from "../../assets/done.svg"
import cancel from "../../assets/cancel.svg"
import change from "../../assets/change.svg"
import { useHistory  } from 'react-router-dom';
import { orderId } from "../actions";
import {connect} from "react-redux";
import "./Order.css";

const Order = ({order, getCurrentOrder, orderId}) => {
    let history = useHistory();
    const prepareImgLink = (imgLink) => {
        return `https://api-factory.simbirsoft1.com${imgLink}`
      };

    const extraOptions = [
        {id: 0, value: "Полный бак", category: "Полный бак", active: order.isFullTank},
        {id: 1, value: "Детское кресло", category: "Детское кресло", active: order.isNeedChildChair},
        {id: 2, value: "Правый руль", category: "Правый руль", active: order.isRightWheel},
    ]

    console.log(order)

    const editOrder = (id) => {
        orderId(id)
        history.push("/order-edit")
        
    }

    const showOrderInf = () => {
        if(order){
            return(
                <div className="order">
                    <div className="pic-description"> 
                        <div 
                            className="car-pic" 
                            style={order.carId ? {background: `url(${prepareImgLink(order.carId.thumbnail.path)}) no-repeat 85% 97%`, backgroundSize: "100%"} : null}>
                        </div>
                        <div className="order-inf">
                            <nobr className="black-text">
                                {order.carId ? order.carId.name : null}
                            </nobr> в &nbsp;
                            <nobr className="black-text">
                                {order.cityId ? order.cityId.name : null}
                            </nobr>, {order.pointId ? order.pointId.address : null}
                            <br/>
                            <div className="order-date">
                            {new Intl.DateTimeFormat('ru-RU', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(order.dateFrom)} 
                            - {new Intl.DateTimeFormat('ru-RU', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(order.dateTo)}
                            </div>
                            <div className="order-color">
                                Цвет:&nbsp;
                                <nobr className="black-text">
                                    {order.color}
                                </nobr>
                            </div>
                        </div>
                    </div>
                    <div className="order-tarrifs">
                    {extraOptions.map((option) => (
                        option.active ? 
                        <div key={option.id}>
                            <div className="checkbox-form-active" key={option.id}>
                                <input type="checkbox" className={"checkbox-active"} id={option.category} ></input>
                                <label htmlFor={option.category} className={"checkbox-value-undefined"}>
                                    {option.value}
                                </label>
                            </div>
                        </div>
                        :
                        <div key={option.id}>
                            <div className="checkbox-form" key={option.id}>
                                <input type="checkbox" className={"checkbox"} id={option.category} ></input>
                                <label htmlFor={option.category} className={"checkbox-value-undefined"}>
                                    {option.value}
                                </label>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="order-price">
                        {order.price} ₽
                    </div>
                    <div className="order-options">
                        <button className="done-option">
                            <ReactSVG src={done} alt="done"/>
                            <span className="opt-text">
                                Готово
                            </span>
                        </button>
                        <button className="cancel-option">
                            <ReactSVG src={cancel} alt="cancel"/>
                            <span className="opt-text">
                                Отменить
                            </span>
                        </button>
                        <button className="change-option" onClick={() => editOrder(order.id)}>
                            <ReactSVG src={change} alt="change"/>
                            <span className="opt-text">
                                Изменить
                            </span>
                        </button>
                    </div>
                </div>
            )} return null
        } 

    
    return(
        <div className="order-form"> 
            {showOrderInf()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        currentOrder: state.currentOrder
    }
}

export default connect(mapStateToProps, {
    getCurrentOrder: getCurrentOrder,
    orderId: orderId
})(Order);