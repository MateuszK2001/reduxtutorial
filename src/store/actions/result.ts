import Actions from "./actionTypes";

const _push = (val: number) => {
    return {
        type: Actions.PUSH,
        val: val
    };
}
export const push = (val: number) => {
    return (dispatch: any) => {
        console.log("dispatched");
        setTimeout(() => {
            dispatch(_push(val));
        }, 2000);
    };
};
export const remove = (idx: number) => {
    return {
        type: Actions.REMOVE,
        idx: idx
    };
};
