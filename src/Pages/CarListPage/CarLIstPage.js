import React, {useEffect} from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CarList from "./CarList/CarList";
import { getCars } from "../../Components/actions";
import {connect} from "react-redux";

const CarListPage = ({getCars}) => {

    return(
        <div className="admin-panel-form">
            <Sidebar />
            <div className="right-side">
                <Header />
                <div className="content">
                    <CarList />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default connect(null, {
    getCars: getCars
})(CarListPage);