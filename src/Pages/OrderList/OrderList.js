import React, {useEffect} from "react";
import Cookies from "js-cookie";
import {connect} from "react-redux";
import { setToken } from "../../Components/actions";
import { useHistory  } from 'react-router-dom';


const OrderList = () => {
    let history = useHistory();

    useEffect(() => {
        if(!Cookies.get("userToken")){
            history.push(`/`)
        }
    },[])

    const logOut = () => {
        Cookies.remove('userToken')
        window.location.reload();
    }

    return(
        <div className="order-list-page-form">
            asd
            <button onClick={logOut}>Выход</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        getToken: state.getToken
    }
}

export default connect(mapStateToProps, {
    setToken: setToken
})(OrderList);