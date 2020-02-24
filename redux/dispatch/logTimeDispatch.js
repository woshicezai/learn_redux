/* version 1
export default function logTimeDispatch(store) {
  let next = store.dispatch;
  store.dispatch =  function(action) {
    console.log("log begin :" + new Date().toLocaleTimeString());
    next(action);
    console.log("log end:" + new Date().toLocaleTimeString());
  };
} */

/**
 * 闭包的想法 
 * @param {*} store 
 */
export default function logTimeDispatch(store) {
  let next = store.dispatch;
  return function(action) {
    console.log("log begin :" + new Date().toLocaleTimeString());
    next(action);
    console.log("log end:" + new Date().toLocaleTimeString());
  };
}
