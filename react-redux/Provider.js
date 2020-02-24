import React from "react";
import PropTypes from "prop-types";


const MyContext = React.createContext();
export default  MyContext;

/* export default class Provider extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return { store: this.store };
  }

  constructor(props, context) {
    super(props, context);
    this.store = this.props.store;
  }

  render() {
    return this.props.children;
  }
} */
