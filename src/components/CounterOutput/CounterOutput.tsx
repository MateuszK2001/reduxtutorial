import React from 'react';

import './CounterOutput.css';
interface Props{
    value:number;
}
const counterOutput = (props:Props) => (
    <div className="CounterOutput">
        Current Counter: {props.value}
    </div>
);

export default counterOutput;