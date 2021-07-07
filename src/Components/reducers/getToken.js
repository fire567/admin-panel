export default (token = null, action) => {
    if(action.type === "SET_TOKEN"){
            return action.payload;
        }
    return token;
}