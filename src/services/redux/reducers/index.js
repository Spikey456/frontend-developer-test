import { combineReducers } from "redux";
import * as constants from '../constants'


let dataState = {
    devices: null,
    isLoggedIn: false,
    loading: false,
    error: null,
    notifSent: false,
}

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                notifSent: false,
            }
        case constants.LOGIN_SUCCESS:
            state = Object.assign({}, state, {
                ...state,
                isLoggedIn: action.isLoggedIn,
                loading: false,
                error: null,
                notifSent: false,
            })
            return state;
        case constants.LOGIN_ERROR:
            return{
                ...state,
                loading: false,
                error: action.error,
                notifSent: false,
            }
        case constants.LOGOUT:
            return{
                ...state,
                isLoggedIn: false,
                loading: false,
                error: null,
                notifSent: false,
            }

        case constants.GET_DEVICES_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
                notifSent: false,
            }
        case constants.GET_DEVICES_ERROR:
            return{
                ...state,
                loading: false,
                error: action.error,
                notifSent: false,
            }
        case constants.GET_DEVICES:
            state = Object.assign({}, state, {
                ...state,
                devices: action.devices,
                loading: false,
                error: null,
                notifSent: false,
            })
            return state;
        case constants.SEND_NOTIF:
            return{
                ...state,
                loading: false,
                error: null,
                notifSent: true,
            }
        case constants.SEND_NOTIF_CLOSE:
            return{
                ...state,
                loading: false,
                error: null,
                notifSent: false,
            }

        case constants.SEND_NOTIF_ERROR:
            return{
                ...state,
                loading: false,
                error: action.error,
                notifSent: false
            }
        case constants.SEND_NOTIF_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
                notifSent: false,
            }
        default: 
            return state;
        
    }
}

const rootReducer = combineReducers({
    dataReducer,
})

export default rootReducer;