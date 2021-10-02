export default (car = null, action) => {
    if(action.type === "GET_CARCURCAR"){
            return action.payload;
        }
    return car;
}