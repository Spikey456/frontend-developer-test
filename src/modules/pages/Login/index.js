import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ReduxActions from '../../../actions/functions';
import './style.scss';
import { bindActionCreators } from 'redux';
import { TextLoginInput } from '../../components/Inputs';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { ErrorAlert } from '../../components/Alerts';
import storage from 'redux-persist/lib/storage';

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory();
    const state = useSelector(state => state.dataReducer)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = bindActionCreators(ReduxActions, dispatch);

    const submitLogin = (e) => {
        e.preventDefault();
        login(email, password)
    }

    useEffect(() => {
        if(state.isLoggedIn && storage.getItem('token')){
            history.push('/devices')
        }
    },[state, history])
    
    return (
        <div className='login-page'>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={submitLogin}>
                    <TextLoginInput 
                        name='email'
                        id='email'
                        type='email'
                        value={email}
                        required={true}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='E-mail'
                        className={'login'}
                    />
                    <TextLoginInput 
                        name='password'
                        id='password'
                        type='password'
                        required={true}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={'login'}
                        placeholder='Password'
                    />
                    {state.error && (
                        <ErrorAlert error={state.error}/>
                    )}
                    
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login

