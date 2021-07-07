import React from "react";
import LoginPage from "../Pages/LoginPage/LoginPage";
import OrderList from "../Pages/OrderList/OrderList";
import { Route, Redirect} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/order-list" component={OrderList} exact/> 
      <Route path="/" component={LoginPage} exact/>
      
    </div>
  );
}

export default App;
