import createStore from "./createStore";
import reducer from "./reducer";
import logDispatch from "./dispatch/logTimeDispatch";
import logTypeDispatch from "./dispatch/logTypeDispatch";

let store = createStore(reducer);
logDispatch(store);
logTypeDispatch(store);

export { store };
