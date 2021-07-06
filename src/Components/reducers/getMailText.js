export default (text = "", action) => {
    if(action.type === "SET_MAIL"){
            return action.payload;
        }
    return text;
}