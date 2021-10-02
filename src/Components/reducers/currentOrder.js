export default (order = null, action) => {
    if(action.type === "GET_CURRENTORDER"){
            return action.payload;
        }
    return order;
}