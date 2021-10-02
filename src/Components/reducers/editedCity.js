export default (city = "", action) => {
    if(action.type === "SET_EDITCITY"){
            return action.payload;
        }
    return city;
}