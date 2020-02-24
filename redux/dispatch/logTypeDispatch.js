export default function logTypeDispatch(store) {
  let next = store.dispatch;
  store.dispatch = function(action) {
    console.log("action type", action.type);
    next(action);
  };
}
