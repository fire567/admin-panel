export default (city = "Все", action) => {
    if(action.type === "SET_CITYFILTER"){
            return action.payload;
        }
    return city;
}