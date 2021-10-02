import api from "../api/api";

export const setMailText = (text) => {
    return{
        type: "SET_MAIL",
        payload: text,
    }
}

export const setPasswordText = (text) => {
    return{
        type: "SET_PASSWORD",
        payload: text,
    }
}

export const setAuth = (data) => {
    return{
        type: 'POST_AUTH',
        payload: data,
    }
}


export const postAuth = (data) => {
    return async (dispatch) => {
        const response = await api.post(`auth/login`, data);
        dispatch(setAuth(response.data))
    }
}

export const postEntity = (name, link, type) => {
    return async (dispatch) => {
        const response = await api.post(link, {name: name});
        dispatch({
            type: type,
            payload: response.data,
        })
    }
}

export const deleteEntity = (link, type) => {
    return async (dispatch) => {
        const response = await api.delete(link);
        dispatch({
            type: type,
            payload: response.data,
        })
    }
}


export const getOrders = (currentPage, cityFilter, rateFilter) => {
    return async (dispatch) => {
        let  response = null;
        if(rateFilter !== "Все" && cityFilter !== "Все" ){
            response = await api.get(`/db/order/?page=${currentPage}&limit=5`, {params: {
                orderStatusId: rateFilter,
                cityId: cityFilter
            }});
        }else if(rateFilter !== "Все" && cityFilter === "Все"){
            response = await api.get(`/db/order/?page=${currentPage}&limit=5`, {params: {
                orderStatusId: rateFilter,
            }});
        }else if(rateFilter === "Все" && cityFilter !== "Все"){
            response = await api.get(`/db/order/?page=${currentPage}&limit=5`, {params: {
                cityId: cityFilter
            }});
        }else if(rateFilter === "Все" && cityFilter === "Все"){
            response = await api.get(`/db/order/?page=${currentPage}&limit=5`);
        }
        
        
        dispatch({
            type: "GET_ORDERS",
            payload: response.data,
        })
    }
}

export const editCity = (newName, link) => {
    return async (dispatch) => {
        const response = await api.put(link, {
            name: newName 
        });
        dispatch({
            type: "EDIT_CITY",
            payload: response.data,
        })
    }
}

export const getCities = () => {
    return async (dispatch) => {
        const response = await api.get(`/db/city`);
        dispatch({
            type: "GET_CITIES",
            payload: response.data,
        })
    }
}

export const getStatus = () => {
    return async (dispatch) => {
        const response = await api.get(`/db/orderStatus`);
        dispatch({
            type: "GET_STATUS",
            payload: response.data,
        })
    }
}

export const getRate = () => {
    return async (dispatch) => {
        const response = await api.get(`/db/rateType`);
        dispatch({
            type: "GET_RATE",
            payload: response.data,
        })
    }
}

export const getCars = (currentPage) => {
    return async (dispatch) => {
        const response = await api.get(`/db/car/?page=${currentPage}&limit=5`);
        dispatch({
            type: "GET_CARS",
            payload: response.data,
        })
    }
}

export const getCurrentCar = (id) => {
    return async (dispatch) => {
        const response = await api.get(`/db/car/${id}`);
        dispatch({
            type: "GET_CARCURCAR",
            payload: response.data,
        })
    }
}

export const getCurrentOrder = (currentOrder) => {
    return async (dispatch) => {
        const response = await api.get(`/db/order/${currentOrder}`);
        dispatch({
            type: "GET_CURRENTORDER",
            payload: response.data,
        })
    }
}

export const getPoints = () => {
    return async (dispatch) => {
        const response = await api.get(`/db/point`);
        dispatch({
            type: "GET_POINTS",
            payload: response.data,
        })
    }
}



export const setToken = (token) => {
    return{
        type: 'SET_TOKEN',
        payload: token,
    }
}

export const setCityFilter = (city) => {
    return{
        type: 'SET_CITYFILTER',
        payload: city,
    }
}

export const setRateFilter = (rate) => {
    return{
        type: 'SET_RATEFILTER',
        payload: rate,
    }
}

export const setFiltredOrder = (orders) => {
    return{
        type: 'SET_FILTEREDORDER',
        payload: orders,
    }
}

export const editCityText = (text) => {
    return{
        type: "SET_EDITCITY",
        payload: text,
    }
}

export const addCityText = (text) => {
    return{
        type: "SET_ADDCITY",
        payload: text,
    }
}

export const setCityId = (id) => {
    return{
        type: "SET_CITYID",
        payload: id,
    }
}

export const setCarId = (id) => {
    return{
        type: "SET_CARID",
        payload: id,
    }
}

export const refreshData = (refresh) => {
    return{
        type: "SET_REFRESH",
        payload: refresh,
    }
}

export const reloadOrders = (reload) => {
    return{
        type: "SET_RELOADORDERS",
        payload: reload,
    }
}

export const orderId = (id) => {
    return{
        type: "SET_ORDERID",
        payload: id,
    }
}


