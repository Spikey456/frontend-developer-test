import React from 'react';
import './style.scss';

export const Button = ({ color, children, onClick, className, id, disabled }) =>
    <button disabled={disabled} id={id} className={`fg-btn fg-button-${color} ${className || ''}`} onClick={onClick}>
        { children }
    </button>