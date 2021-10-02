import React from "react";
import {connect} from "react-redux"
import { setCityFilter, setRateFilter, setFiltredOrder } from "../actions";
import droDown from "../../assets/drop-down.svg";
import "./FilterInput.css";


const FilterInput = ({items, className, cityFilter, setCityFilter, rateFilter, setRateFilter, setFiltredOrder, orders, filterOrder}) => {

    const itemHandler = (e) => {
        if(className === "cities"){
            setCityFilter(e.target.value)
        }else if(className === "rate"){
            setRateFilter(e.target.value)
        }
    }

    return(
        <select 
            onChange={(e) => itemHandler(e)} 
            type="selector" 
            className="filter-item" style={{backgroundImage: `url(${droDown})`, backgroundRepeat: "no-repeat, repeat", backgroundPosition: "right .7em top 50%, 0 0", backgroundSize: ".55em auto, 100%"}}>
            <option value={"Все"}>Все</option>
            {items ? 
                items.map((option) => (
                    <option key={option.name} value={option.id}>{option.name}</option>
                )) : null
            }
        </select>
    )
}

const mapStateToProps = (state) => {
    return{
        cityFilter: state.cityFilter,
        rateFilter: state.rateFilter,
        orders: state.orders,
        filterOrder: state.filterOrder,
    }
}

export default connect(mapStateToProps, {
    setCityFilter: setCityFilter,
    setRateFilter: setRateFilter,
    setFiltredOrder: setFiltredOrder,
})(FilterInput);