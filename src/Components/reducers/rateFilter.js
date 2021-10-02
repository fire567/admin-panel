export default (rate = "Все", action) => {
    if(action.type === "SET_RATEFILTER"){
            return action.payload;
        }
    return rate;
}