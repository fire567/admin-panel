import React, {useState} from "react";
import {ReactSVG} from "react-svg";
import Logo from "../Logo/Logo";
import car from "../../assets/car.svg";
import carCategory from "../../assets/car-category.svg";
import cities from "../../assets/cities.svg";
import orders from "../../assets/orders.svg";
import places from "../../assets/places.svg";
import tarrifsType from "../../assets/tarrifs-type.svg";
import tarrifs from "../../assets/tarrifs.svg";
import { useHistory  } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    let history = useHistory();
    const categories = [
            { id: 1, name: "Список авто", pic: car, link:"/car-list"},
            { id: 2, name: "Заказы", pic: orders, link:"/order-list"},
            { id: 3, name: "Города", pic: cities, link:"/cities-list"},
            { id: 4, name: "Места выдачи", pic: places, link:"/points-list"},
            { id: 5, name: "Тарифы", pic: tarrifs, link:"/tarrifs-list"},
            { id: 6, name: "Типы тарифов", pic: tarrifsType, link:"/order-list"},
            { id: 7, name: "Категории автомобилей", pic: carCategory, link:"/order-list"},
            { id: 8, name: "Статусы заказов", pic: orders, link:"/order-list"},
    ]

    const categoryHandler = (category) => {
        
        history.push(`${category.link}`)
    }

    return(
        <div className="sidebar-form">
            <div className="sidebar-logo-form">
                <div className="sidebar-logo"> 
                    <Logo width={"23px"} height={"23px"} fontSize={"16px"} lineHeight={"18px"} marginLeft={"7px"}/>
                </div>
            </div>
            <div className="category-list">
                {categories.map((category) => (
                    <li className={window.location.hash.split('admin-panel')[1] === category.link ? "category-active": "category"} key={category.id} onClick={() => categoryHandler(category)}>
                        <ReactSVG src={category.pic} className={window.location.hash.split('admin-panel')[1] === category.link ? "category-pic-active": "category-pic"}/>
                        <div className="category-name">
                            {category.name}
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;