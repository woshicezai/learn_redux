/* version 1
export default function logTimeDispatch(store) {
  let next = store.dispatch;
  store.dispatch =  function(action) {
    console.log("log begin :" + new Date().toLocaleTimeString());
    next(action);
    console.log("log end:" + new Date().toLocaleTimeString());
  };
} */

/**version 2
 * 闭包的想法 
 * @param {*} store 
export default function logTimeDispatch(store) {
  let next = store.dispatch;
  return function(action) {
    console.log("log begin :" + new Date().toLocaleTimeString());
    next(action);
    console.log("log end:" + new Date().toLocaleTimeString());
  };
}
 */

 /**
  * 
  * @param {*} store 
  */
export let  logTimeDispatch = (store) => next => action =>{
  console.log("log begin :" + new Date().toLocaleTimeString());
  next(action);
  console.log("log end:" + new Date().toLocaleTimeString());
}