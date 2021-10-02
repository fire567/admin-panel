import React from "react";
import LoginPage from "../Pages/LoginPage/LoginPage";
import OrderListPage from "../Pages/OrderListPage/OrderListPage";
import CarListPage from "../Pages/CarListPage/CarLIstPage";
import CitiesPage from "../Pages/CitiesListPage/CitiesListPage";
import CitiesEdit from "./Cities/CitiesEdit/CitiesEdit";
import AddCity from "./Cities/AddCity/AddCity";
import CarEdit from "./Car/CarEdit/CarEdit";
import OrderEdit from "./Order/OrderEdit/OrderEdit";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/order-list" component={OrderListPage} exact/> 
      <Route path="/" component={LoginPage} exact/>
      <Route path="/car-list" component={CarListPage} exact/> 
      <Route path="/cities-list" component={CitiesPage} exact/> 
      <Route path="/city-edit" component={CitiesEdit} exact/> 
      <Route path="/add-city" component={AddCity} exact/> 
      <Route path="/car-edit" component={CarEdit} exact/> 
      <Route path="/order-edit" component={OrderEdit} exact/> 
    </div>
  );
}

export default App;
