import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CitiesList from "./CitiesList/CitiesList";

const CitiesPage = () => {
    return(
        <div className="admin-panel-form">
        <Sidebar />
        <div className="right-side">
            <Header />
            <div className="content">
                <CitiesList />
            </div>
            <Footer />
        </div>
    </div>
    )
}

export default CitiesPage;