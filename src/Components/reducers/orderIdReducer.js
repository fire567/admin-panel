export default (order = null, action) => {
    if(action.type === "SET_ORDERID"){
            return action.payload;
        }
    return order;
}