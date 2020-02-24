/**
 * 很容易被篡改,那只有闭包可以解决这种问题。封在函数里面，不能随意读取。
 */
/* const store = {
  count: 0
}; */
/**
 * 
 * @param {*} reducer 
 * @param {*} heightener applyMiddleware(...plugs)  简单版本改变了dispatch，不够纯，这样增强store
 */
export default function createStore(reducer,heightener) {
  if (heightener) {        
    return heightener(createStore)(reducer)    
}      
  /**
   * !注释掉 一个空对象，让store的初始化交给reducer
  let currentState = {
    count: 0  
  }; */
  //仅仅声明一个变量，用于后续的存储。
  let currentState;
  let observers = [];
  /**
   * getState就是state的get方法
   */
  const getState = function() {
    return currentState;
  };

  /**
   * dispatch就是state的setter方法
   * @param action object
   */
  const dispatch = function(action) {
    /***
     * !reducer为何要返回新的state对象？
     * ?我的理解是：如果不返回。则只能更改函数内的currentState对象，这样就造成了createStore里必须一次性state初始数据定义好,不够模块化。
     * ?返回新的，则将state的初始化的权利交给了reducer函数，createStore则不用增加代码。
     */
    currentState = reducer(currentState,action);
    //state变化了 通知所有的观察者
    observers.forEach(observer=> observer());
    /** 
     *! dispatch里的逻辑很多，所以将下面的逻辑提出去 写成reducer
     * switch (action.type) {
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
    } */
  };
  
  const subscribe = function(fn) {
    observers.push(fn);
  };
  //!这样将store的初始化交给了reducer来生成
  dispatch({type:"init"})
  return { getState, dispatch, subscribe };
}
