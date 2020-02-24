import createStore from "./createStore";
import reducer from "./reducer";
import {logTimeDispatch} from "./dispatch/logTimeDispatch";
import {logTypeDispatch} from "./dispatch/logTypeDispatch";
import {applyMiddleware} from "./applyMiddleware";
// let store = createStore(reducer);
/* 
logDispatch(store);
logTypeDispatch(store);//这个先打印 */

/**
 * 先添加的plugin最后运行
 */
// applyMiddleware(store,logDispatch,logTypeDispatch);


let store = createStore(reducer, applyMiddleware(logTimeDispatch, logTypeDispatch));
export { store };
