import React from 'react';

const Child=(props)=>{
    return (
        <div>
            <h1>This is child</h1>
            <h2>Hy {props.name}</h2>
        </div>
    )
}
export default Child;