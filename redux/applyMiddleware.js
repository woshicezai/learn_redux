
/**
 * !这个版本直接将已经生成的store的dispatch更改了，不够纯
 * @param {} store
 * @param  {...any} plugins
 */
/* export default function applyMiddleware(store,...plugins){
   plugins.forEach(plugin=>{
    store.dispatch = plugin(store);
 })
} */

/**
 * 这个函数 直接在createStore里返回，将生成store的逻辑挪到自己这里
 * @param  {...any} plugins
 */
export let applyMiddleware = (...plugins) => createStore => reducer => {
  let store = createStore(reducer);
  let { getState, dispatch } = store;
  let params = {
    getState,
    dispatch
  };

  let pluginsArr = plugins.map(middleware => middleware(params));

  dispatch = compose(...pluginsArr)(dispatch);
  return { ...store, dispatch };
};

 let compose = function(...fns) {
  if (fns.length === 0) return arg => arg;
  if (fns.length === 1) return fns[0];
   return fns.reduce((res,cur)=>(...args)=>res(cur(...args)))
};
