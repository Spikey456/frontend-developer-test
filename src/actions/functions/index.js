import * as constants from '../../services/redux/constants';
import axios from 'axios';
import {
    getTokenData,
    saveTokenData,
    removeTokenData
} from '../storage'
import { API_URL, URL } from '../../services/redux/constants'


const config = {
    baseURL: API_URL,
    timeout: 30000,
    headers:  {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': ''
    }
}

export function login(email, password){
    return async dispatch => {
        dispatch({
            type: constants.LOGIN_REQUEST,
        })
        try{
            config.Authorization = ''
            const resp = await axios.create(config).post(URL.LOGIN, {email, password})
            await saveTokenData(resp.data)
                
            dispatch({
                type: constants.LOGIN_SUCCESS,
                isLoggedIn: true,
            })
        }catch(e) {
            dispatch({
                type: constants.LOGIN_ERROR,
                error: e.response.data
            })
        }
    }
}

export function getDevices(){
    return async dispatch => {

        try {
            config.Authorization = ''
            const resp = await axios.create(config).get(URL.DEVICES)
            dispatch({
                type: constants.GET_DEVICES,
                devices: resp.data.devices
            })
        }catch(e){
            dispatch({
                type: constants.GET_DEVICES_ERROR,
                error: e.response.data
            })
        }
    }
}

export function logout(){
    return async dispatch => {
        await removeTokenData().then(() => {
            dispatch({
                type: constants.LOGOUT,
            })
        })
        
    }
}


export function notify(){
    return async dispatch => {

        dispatch({type: constants.SEND_NOTIF_REQUEST})

        await getTokenData().then(data => data).then(async (value) => {
            config.headers.Authorization = 'JWT '+ value
            let payload = {
                name: 'Kyle Jamal Vincent N. Manio',
                email: 'kylejamalmanio01@gmail.com',
                repoUrl: 'https://github.com/Spikey456/frontend-developer-test',
                message: "One bird can't make a pun. But toucan."
            }
            await axios.create(config).post(URL.NOTIF, payload)
            .then(() => {
                dispatch({
                    type: constants.SEND_NOTIF,
                })
            })
            .catch((e) => {
                dispatch({
                    type:constants.SEND_NOTIF_ERROR,
                    error: e.response.data
                })
            })
            
        })
    }
}