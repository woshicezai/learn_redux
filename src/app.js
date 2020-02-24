import React, { Component } from "react";
import connect from "../react-redux/connect";

/* @connect(
  state => {
    number: state.count;
  },
  dispatch => {
    add2: () => {
      dispatch({ type: "plus2" });
    };
  }
) */
class App extends Component {
  constructor(props) {
    super(props);
  }

  add2 = () => {
    this.props.add2();
  };

  render() {
    return (
        <span onClick={this.add2}>当前的数值为：{this.props.number}</span>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.count
  };
};
const mapDispachToProps = dispatch => {
  return {
    add2: () => {
      dispatch({ type: "plus2" });
    }
  };
};

// export default App;
export default connect(mapStateToProps, mapDispachToProps)(App);
