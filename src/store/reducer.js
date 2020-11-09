import {combineReducers} from "redux";

const defaultUserState = {
    age:null,
    agreement:false,
    gender:null,
    user_symptoms:[],
    disease_with_possibility: []
};


const userReducer = (state=defaultUserState, action) =>{
    if (action.type === 'SET_USER_STATE') {
        return{
            ...state,
            ...action.payload
        }
    } else if(action.type === 'RESET_USER_STATE'){
        return{
            ...defaultUserState,
            agreement: true,
        }
    }
    else {
        return state
    }
};

const rootReducer = combineReducers({
    user:userReducer
});

export default rootReducer;