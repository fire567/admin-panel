import React, {useState, useEffect} from "react";
import Cars from "../../../Components/Car/Cars";
import { getCars } from "../../../Components/actions";
import Pagination from "../../../Components/Pagination/Pagination";
import Button from "../../../Components/Button/Button";
import {connect} from "react-redux";

const CarList = ({cars, getCars}) => {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        getCars(currentPage)
    }, [currentPage])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const addCarHandler = () => {
        console.log("ASd")
    }

    return(
        <div className="order-list-page-form">
            <div className="order-list-title">
                Машины
                <div className="add-btn" onClick={() => addCarHandler()}>
                    <Button text="Добавить" color="#007BFF"/>
                </div>
            </div>
            <div className="order-list-form">
                <Cars/>
                { cars ? 
                    <Pagination perPage={5} totalOrders={cars.count} paginate={paginate}/> : null
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cars: state.cars
    }
}

export default connect(mapStateToProps, {
    getCars: getCars,
})(CarList);