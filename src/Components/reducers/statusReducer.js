export default (status = null, action) => {
    if(action.type === "GET_STATUS"){
            return action.payload;
        }
    return status;
}