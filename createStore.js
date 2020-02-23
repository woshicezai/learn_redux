/**
 * 很容易被篡改
 */
/* const store = {
  count: 0
}; */

function createStore() {
  const store = {
    count: 0
  };
  /**
   * getState就是state的get方法
   */
  const getState = function() {
    return store;
  };

  /**
   * dispatch就是state的setter方法
   * @param action object
   */
  const dispatch = function(action) {
    switch (action.type) {
      case "plus1":
        store.count = store.count + 1;
        break;
      case "plus2":
        store.count = store.count + 2;
        break;
      case "plus3":
        store.count = store.count + 3;
        break;
      case "plus4":
        store.count = store.count + 4;
        break;
      default:
        break;
    }
  };

  const subscribe = function() {};

  return { getState, dispatch, subscribe };
}

window.createStore = createStore;