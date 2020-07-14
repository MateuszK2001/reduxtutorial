import React from 'react';

import './CounterControl.css';

interface Props{
    label:string;
    clicked:()=>void;
}

const CounterControl = (props:Props) => (
    <div className="CounterControl" onClick={props.clicked}>
        {props.label}
    </div>
);

export default CounterControl;