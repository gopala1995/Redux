import { createStore } from "redux";
import reducers from "../Redux/Reducer/index";
// const init = 0
const store = createStore(reducers);

export default store;
