// only single store in a redux app
import rootReducer from "./Reducers/Index";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;