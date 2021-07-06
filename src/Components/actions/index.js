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