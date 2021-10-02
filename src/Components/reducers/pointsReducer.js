export default (points = null, action) => {
    if(action.type === "GET_POINTS"){
            return action.payload;
        }
    return points;
}