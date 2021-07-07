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

export const setToken = (token) => {
    return{
        type: 'SET_TOKEN',
        payload: token,
    }
}

