import React, {useEffect, useState} from "react";
import {getOrders, setFiltredOrder} from "../../../Components/actions/index";
import { connect } from "react-redux";
import Pagination from "../../../Components/Pagination/Pagination";
import FilterOrder from "../../../Components/FilterOrder/FilterOrder";
import Order from "../../../Components/Order/Order";
import "./OrderList.css";


const OrderList = ({getOrders, orders, filtredOrder, reloadOrderReducer, cityFilter, rateFilter, setFiltredOrder}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [cityFilterChange, setCityFilterChange] = useState("Все");
    const [rateFilterChange, setRateFilterChange] = useState("Все");
    
    
    useEffect(() => {
        if(reloadOrderReducer){
            document.location.reload();
        }
        if(filtredOrder){
            setCityFilterChange(cityFilter)
            setRateFilterChange(rateFilter)
            getOrders(currentPage, cityFilter, rateFilter)
        }else{
            getOrders(currentPage, cityFilterChange, rateFilterChange)
        }
        setFiltredOrder(false)
    }, [currentPage, filtredOrder])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    return(
        <div className="order-list-page-form">
            <div className="order-list-title">
                Заказы
            </div>
            <div className="order-list-form">
                <FilterOrder />
                {orders ? 
                orders.data.map((order) => (
                    <Order order={order} key={order.id}/>
                )) : "loading"}
                { orders ? 
                    <Pagination perPage={5} totalOrders={orders.count} paginate={paginate}/> : null
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cityFilter: state.cityFilter,
        rateFilter: state.rateFilter,
        orders: state.orders,
        filtredOrder: state.filtredOrder,
        reloadOrderReducer: state.reloadOrderReducer,
    }
}


export default connect(mapStateToProps, {
    getOrders: getOrders,
    setFiltredOrder: setFiltredOrder,
})(OrderList);