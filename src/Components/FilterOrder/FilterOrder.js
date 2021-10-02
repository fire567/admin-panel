import React, {useEffect, useState} from "react";
import FilterInput from "../FilterInput/FiterInput";
import { connect } from "react-redux";
import { getCities, getStatus, setFiltredOrder } from "../actions/index";
import Button from "../Button/Button";
import "./FilterOrder.css";


const FilterOrder = ({getCities, cities, getStatus, status, orders, setFiltredOrder}) => {

    useEffect(() => {
        getCities()
        getStatus()
    }, [])

    const admitFilterHandler = () => {
        setFiltredOrder(true)
    }

    
    return(
            <div className="filter-form">
                <div className="filter-inputs">
                    <FilterInput className={"cities"} items={cities ? cities.data : null}/>
                    <FilterInput className={"rate"} items={status ? status.data : null}/> 
                </div>
                <div className="filter-btn" onClick={() => admitFilterHandler()}>
                    <Button text="Применить" color="#007BFF"/>
                </div>
            </div> 
    )
}

const mapStateToProps = (state) => {
    return{
        cities: state.cities,
        status: state.status,
        orders: state.orders
    }
}

export default connect(mapStateToProps, {
    getCities: getCities,
    getStatus: getStatus,
    setFiltredOrder: setFiltredOrder,
    setFiltredOrder: setFiltredOrder,
})(FilterOrder);