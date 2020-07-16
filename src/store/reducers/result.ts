import Actions from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    data : [] as number[]
}

interface Action {
    type: Actions;
    val?: number;
    idx?:number;
}
const result = (state = initialState, action: Action) => {
    const res =  {
        ...state,
        data: [...state.data]
    };

    switch (action.type) {
        case Actions.PUSH:
            return updateObject(state,{
                data: state.data.concat(action.val!)
            });
        case Actions.REMOVE:
            return updateObject(state,{
                data: state.data.filter((_,i)=>i!==action.idx!)
            });
    }
    return res;
};

export default result;