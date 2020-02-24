/***
 * 异步trunk
 */
export let trunk = store => next => action => {
  let { dispatch } = store;
  return typeof action === "function" ? action(dispatch) : next(action);
};
