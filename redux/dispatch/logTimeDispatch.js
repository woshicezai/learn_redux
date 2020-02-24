export default function logTimeDispatch(store) {
  let next = store.dispatch;
  store.dispatch = function(action) {
    console.log("log begin :" + new Date().toLocaleTimeString());
    next(action);
    console.log("log end:" + new Date().toLocaleTimeString());
  };
}
