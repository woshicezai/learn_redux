import App from './app'
import React, { Component } from 'react';
import MyContext from "../react-redux/Provider"
import {store} from "../redux/index";

export default class Root extends Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <MyContext.Provider value={store}>
                <App/>
            </MyContext.Provider>
        )
    }
}
