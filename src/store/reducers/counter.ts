import Actions from "../actions/actionTypes";
import updateObject from "../utility";
const initialState = {
    counter: 0,
}

interface Action {
    type: Actions;
    val?: number;
    idx?:number;
}
const counter = (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.INCREMENT:
            return updateObject(state, 
                {counter: state.counter+1})
        case Actions.DECREMENT:
            return updateObject(state, 
                {counter: state.counter-1})
        case Actions.ADD:
            return updateObject(state, 
                {counter: state.counter+action.val!})
        case Actions.SUBTRACT:
            return updateObject(state, 
                {counter: state.counter-action.val!})
    }
    return state;
};

export default counter;