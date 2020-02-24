import React from "react";
import PropTypes from "prop-types";
import MyContext from "./Provider";

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    class HightCompnent extends React.Component {
      componentDidMount(props) {
        this.context.subscribe(this.handleStoreChange.bind(this));
      }
      handleStoreChange() {
        this.forceUpdate();
      }
      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        )
      }
    }
    HightCompnent.contextType = MyContext;
    // HightCompnent.contextType = {
    //   store: PropTypes.object
    // };

    return HightCompnent;
  };
}
