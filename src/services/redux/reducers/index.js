import { combineReducers } from "redux";
import * as constants from '../constants'


let dataState = {
    data: '',
    loading: false,
    error: null,
}

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case constants.LOGIN_SUCCESS:
            state = Object.assign({}, state, {
                data: action.login_data,
                loading: false,
                error: null,
            })
            return state;
        case constants.LOGIN_ERROR:
            state = {
                ...state,
                loading: true,
                error: action.error
            }
            return state;
        default: 
            return state;
        
    }
}

const rootReducer = combineReducers({
    dataReducer,
})

export default rootReducer;