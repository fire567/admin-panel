const initialState = {
    token_type: null,
    access_token: null,
    expires_in: null,
    refresh_token: null,
    user_id: null
}


export default (state = initialState, action) => {
    if(action.type === "POST_AUTH") {
        return action.payload;
    }

    return state;
}