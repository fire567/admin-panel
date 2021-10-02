import React from "react";
import OrderLIst from "./OrderLIst/OrderList";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./OrderListPage.css";

const AdminPanel = () => {

    return(
        <div className="admin-panel-form">
            <Sidebar />
            <div className="right-side">
                <Header />
                <div className="content">
                    <OrderLIst />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default AdminPanel;