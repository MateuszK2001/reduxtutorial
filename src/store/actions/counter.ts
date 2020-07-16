import Actions from "./actionTypes";

export const increment = () => {
    return {
        type: Actions.INCREMENT
    };
};
export const decrement = () => {
    return {
        type: Actions.DECREMENT
    };
};
export const add = (val: number) => {
    return {
        type: Actions.ADD,
        val: val
    };
};
export const subtrack = (val: number) => {
    return {
        type: Actions.SUBTRACT,
        val: val
    };
};