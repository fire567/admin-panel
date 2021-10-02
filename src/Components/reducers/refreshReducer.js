export default (refresh = false, action) => {
    if(action.type === "SET_REFRESH"){
            return action.payload;
        }
    return refresh;
}