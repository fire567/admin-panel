export default (rate = null, action) => {
    if(action.type === "GET_RATE"){
            return action.payload;
        }
    return rate;
}