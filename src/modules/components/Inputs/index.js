import React from 'react'
import './style.scss'



export const TextLoginInput = ({ name, id, required, type = 'text', value, onChange,className, placeholder }) => 
    <div className="fg-inputlogin" >
    
        <input 
            name={name}
            type={type}
            required={required}
            id={id}
            value={value}
            onChange={onChange} 
            className={`fg-input${className ? '-'+className : ''}`} 
            placeholder={placeholder || ''}
        />
    </div>
