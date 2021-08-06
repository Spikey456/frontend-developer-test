import React from 'react';
import { Button } from '../Button';
import './style.scss'
import * as ReduxActions from '../../../actions/functions';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SuccessAlert } from '../Alerts';

const Footer = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.dataReducer)
    const { logout, notify } = bindActionCreators(ReduxActions, dispatch)

    const logoutClicked = () => {
        logout();
    }

    return (
        <div className='footer'>
            <div className='footer-btns-container'>
                <Button color="notify" onClick={notify}>
                    NOTIFY
                </Button>
                <Button color="logout" onClick={logoutClicked}>
                    LOG OUT
                </Button>
                
            </div>
            {state.notifSent && (
                <div className='message-area'>
                    <SuccessAlert success={"A message has been sent to the devs!"}/>
                </div>
            )}
        </div>
    )
}

export default Footer;