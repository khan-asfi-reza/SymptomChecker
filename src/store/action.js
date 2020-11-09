export const setUserState = (payload) => dispatch => {
    dispatch({
        type:'SET_USER_STATE',
        payload:payload
    })
};