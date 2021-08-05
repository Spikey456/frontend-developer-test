import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/functions';
import * as ReduxActions from '../../../actions/functions';
import { bindActionCreators } from 'redux';

const Login = (props) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    useEffect(() => {
        console.log(props)
    },[])

    return (
        <div>
            <form onSubmit={submitLogin}>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        product_list: state.dataReducer.product_list,
        loading: state.dataReducer.loading,
        error: state.dataReducer.error
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

export default Login

