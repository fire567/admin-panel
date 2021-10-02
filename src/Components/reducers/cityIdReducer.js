export default (id = "", action) => {
    if(action.type === "SET_CITYID"){
            return action.payload;
        }
    return id;
}