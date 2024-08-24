
export const reducerAuth = (state = { isLog: false }, action) => {
    if (action.type === 'isLogin') {
        return { isLog: true };
    }
    if (action.type === 'isNotLogin') {
        return { isLog: false };
    }
    return state;
} 


