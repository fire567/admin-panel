export default (refresh = false, action) => {
    if(action.type === "SET_RELOADORDERS"){
            return action.payload;
        }
    return refresh;
}