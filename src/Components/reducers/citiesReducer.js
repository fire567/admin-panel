export default (city = null, action) => {
    if(action.type === "GET_CITIES"){
            return action.payload;
        }
    return city;
}