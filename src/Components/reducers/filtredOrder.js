export default (orders = false, action) => {
    if(action.type === "SET_FILTEREDORDER"){
            return action.payload;
        }
    return orders;
}