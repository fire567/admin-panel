export default (orders = null, action) => {
    if(action.type === "GET_ORDERS"){
            return action.payload;
        }
    return orders;
}