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
    tiemout: 30000,
    headers:  {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': ''
    }
}

export const login = (email, password) => async (dispatch, getState) => {


        dispatch({type: constants.LOGIN_REQUEST})

        try{
            const response = await axios.create(config).post(URL.LOGIN, {email, password})
            await saveTokenData(response)
            return{
                type: constants.LOGIN_SUCCESS,
                data: response,
                loading:false,
                error: null
            }
        }catch(e){
            console.log(e)
            return{
                type: constants.LOGIN_ERROR,
                data: '',
                loading:false,
                error: e
            }
        }
     
}