"use strict";
var React = require('react');
var react_redux_1 = require('react-redux');
var mapStateToProps = function (state, props) {
    return {
        counter: (state[props.field]) || 0
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        incr: function (field) {
            dispatch({ type: 'COUNTER_CHANGE', by: 1, field: field });
        },
        decr: function (field) {
            dispatch({ type: 'COUNTER_CHANGE', by: -1, field: field });
        }
    };
};
var Counter = function (props) { return (React.createElement("div", null, 
    React.createElement("p", null, 
        React.createElement("label", null, 
            props.field, 
            ": "), 
        React.createElement("b", null, 
            "#", 
            props.counter)), 
    React.createElement("button", {onClick: function (e) { return props.incr(props.field); }}, "INCREMENT"), 
    React.createElement("span", {style: { padding: "0 5px" }}), 
    React.createElement("button", {onClick: function (e) { return props.decr(props.field); }}, "DECREMENT"))); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Counter);
//# sourceMappingURL=Hello.js.map