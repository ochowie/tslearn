import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = (state, props) => {
    return {
        counter: (state[props.field]) || 0
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        incr: (field) => {
            dispatch({ type: 'COUNTER_CHANGE', by: 1, field });
        },
        decr: (field) => {
            dispatch({ type: 'COUNTER_CHANGE', by: -1, field });
        }
    };
};
const Counter = (props) => (React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, props.field, ": "), React.createElement("b", null, "#", props.counter)), React.createElement("button", {onClick: e => props.incr(props.field)}, "INCREMENT"), React.createElement("span", {style: { padding: "0 5px" }}), React.createElement("button", {onClick: e => props.decr(props.field)}, "DECREMENT")));
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//# sourceMappingURL=Hello.js.map