import React from 'react';
import './style.scss'

export const ErrorAlert = ({error}) => (
    <div 
    className='error-alert' 
    >
        Error: {error}
    </div>
)

export const SuccessAlert = ({success}) => (
    <div 
    className='success-alert' 
    >
        {success}
    </div>
)