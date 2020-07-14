import Actions from "../actions";

const initialState = {
    counter: 0,
}

interface Action {
    type: Actions;
    val?: number;
    idx?:number;
}
const counter = (state = initialState, action: Action) => {
    const res =  {
        ...state,
    };

    switch (action.type) {
        case Actions.INCREMENT:
            res.counter++;
            break;
        case Actions.DECREMENT:
            res.counter--;
            break;
        case Actions.ADD:
            res.counter += action.val!;
            break;
        case Actions.SUBTRACT:
            res.counter -= action.val!;
            break;
    }
    return res;
};

export default counter;