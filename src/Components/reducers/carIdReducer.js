export default (car = null, action) => {
    if(action.type === "SET_CARID"){
            return action.payload;
        }
    return car;
}