import React from 'react';
import './style.scss';

const Circle = ({items}) => {
  
    return (
        <>
        {/*items.map((item, index) => (
            <div 
                id="rotator"  
                style={{
                    animationDelay: `${(index+1)}s`,
                    transform: `rotate(${index+1* 30}deg)`
                }}
            >
                {index+1}
            </div>
            ))*/}
            <div className="container">
                {items.map((item) => (
                    <div key={item.id}/>
                ))}
            </div>
        
        </>
    )
  
}

export default Circle;