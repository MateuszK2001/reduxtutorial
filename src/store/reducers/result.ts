import Actions from "../actions";

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
            res.data.push(action.val!);
            break;
        case Actions.DELETE:
            res.data.splice(action.idx!, 1);
    }
    return res;
};

export default result;