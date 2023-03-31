import { createStore } from "redux";
import rootReducer from "./reducer";

// Redux store
const store = createStore(rootReducer);

export default store;
