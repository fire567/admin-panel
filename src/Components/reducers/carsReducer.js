export default (cars = null, action) => {
    if(action.type === "GET_CARS"){
            return action.payload;
        }
    return cars;
}