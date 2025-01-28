const initialState = 0;
const Inc_Dec = (state = initialState , action) => {
    switch(action.type){
        case "INCREMENT" :
            return state + 1;
        case "DECREMENT" :
            return state - 1;
        default :
            return state;
    }
}
export default Inc_Dec;