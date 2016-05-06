"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var Hello_1 = require("./components/Hello");
var store = redux_1.createStore(function (state, action) {
    switch (action.type) {
        case 'COUNTER_CHANGE':
            return Object.assign({}, state, (_a = {}, _a[action.field] = (typeof state[action.field] === "undefined") ? 0 + action.by : state[action.field] + action.by, _a));
        default:
            return state;
    }
    var _a;
}, {});
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, 
    React.createElement("div", null, 
        React.createElement(Hello_1.default, {field: "test"}), 
        React.createElement(Hello_1.default, {field: "test2"}))
), document.getElementById("example"));
//# sourceMappingURL=index.js.map