export default (city = "", action) => {
    if(action.type === "SET_ADDCITY"){
            return action.payload;
        }
    return city;
}