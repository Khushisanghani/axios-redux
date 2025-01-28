// reducer is one type of function
// accept action and state as argument and return new state
import Inc_Dec from "./Inc_Dec";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    Inc_Dec
});
export default rootReducer;