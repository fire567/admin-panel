export default (text = "", action) => {
    if(action.type === "SET_PASSWORD"){
            return action.payload;
        }
    return text;
}