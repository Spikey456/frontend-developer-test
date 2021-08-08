import React, {useEffect} from 'react';
import './style.scss'
import { bindActionCreators } from 'redux';
import * as ReduxActions from '../../../actions/functions';
import { useDispatch, useSelector } from 'react-redux';
import Circle from '../../components/Circle';
import Footer from '../../components/Footer';
import storage from 'redux-persist/lib/storage';
import { useHistory } from 'react-router-dom';

const Devices = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const state = useSelector(state => state.dataReducer)
    const { getDevices } = bindActionCreators(ReduxActions, dispatch);
    useEffect(() => {
        if(!state.devices){
            getDevices()
        }else{
            const interval = setInterval(() => {
                getDevices();
            }, 5000);
            
            return () => {
                clearInterval(interval);
            };
        }
    },[state.devices, getDevices])

    useEffect(() => {
        if(!(state.isLoggedIn && storage.getItem('token'))){
            history.push('/')
        }
    },[state, history])



    return (
        <>
        <div className='devices-page'>
            <div className='devices-container'>
            {state.devices && state.devices ? (
                <>
                <h1>
                    {state.devices.length}
                    <br />
                    {state.devices.length > 1 ? 'Devices' : 'Device'}
                </h1>
                
                <Circle items={state.devices} />
                </>
            
            ): <div></div>}
           
            </div> 
            <Footer />
            
        </div>
        
        </>
    )
}

export default Devices

