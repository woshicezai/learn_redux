/**
 * 根据ation更改state 返回新的state
 * @param {}} state
 * @param {*} action
 */
let initState = {
  count: 100
};
function reducer(state, action) {
  switch (action.type) {
    case "plus1":
      return {
        ...state,
        count: state.count + 1
      };
    case "plus2":
      return {
        ...state,
        count: state.count + 2
      };
    default:
      return initState;
  }
}

window.reducer = reducer;
