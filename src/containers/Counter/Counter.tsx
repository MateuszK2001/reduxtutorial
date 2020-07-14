import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import Actions from '../../store/actions';

interface Props{
    ctr:number;
    data: number[];
    onIncrementCounter: () => void;
    onDecrementCounter: () => void;
    onAddCounter: (cnt:number)=>void;
    onSubtractCounter:(cnt:number)=>void;
    onStoreResult: (val:number)=>void;
    onDeleteResult:(id:number)=>void;
}

class Counter extends Component<Props> {


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter( 5 )}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.data.map((val, id)=>(
                        <li key={id} onClick={()=>this.props.onDeleteResult(id)}>{this.props.data[id]}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state:any) =>{
    return{
        ctr: state.CTR.counter as number,
        data: state.DATA.data as number[]
    };
};
const mapDispatchToProps = (dispatch:any)=>{
    return{
        onIncrementCounter: ()=>dispatch({type: Actions.INCREMENT}),
        onDecrementCounter: ()=>dispatch({type: Actions.DECREMENT}),
        onAddCounter: (cnt:number)=>dispatch({type: Actions.ADD, val: cnt}),
        onSubtractCounter: (cnt:number)=>dispatch({type: Actions.SUBTRACT, val: cnt}),
        onStoreResult: (val:number)=> dispatch({type: Actions.PUSH, val:val}),
        onDeleteResult: (id:number)=> dispatch({type: Actions.DELETE, idx:id}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);