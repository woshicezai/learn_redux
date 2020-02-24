
export default function applyMiddleware(store,...plugins){
   plugins.forEach(plugin=>{
    store.dispatch = plugin(store);
 })
}