/* version 1
 export default function logTypeDispatch(store) {
  let next = store.dispatch;
  store.dispatch = function(action) {
    console.log("action type", action.type);
    next(action);
  };
} */

/**
 * 闭包的想法
 * @param {} store 
export default function logTypeDispatch(store) {
  let next = store.dispatch;
  return function(action) {
    console.log("action type", action.type);
    next(action);
  };
}
 */

 export let logTypeDispatch=store=>next=>action=>{
    console.log("action type", action.type);
    next(action);
 }
