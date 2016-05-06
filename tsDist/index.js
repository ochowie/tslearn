import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./components/Hello";
let store = createStore((state, action) => {
    switch (action.type) {
        case 'COUNTER_CHANGE':
            return Object.assign({}, state, { [action.field]: (typeof state[action.field] === "undefined") ? 0 + action.by : state[action.field] + action.by });
        default:
            return state;
    }
}, {});
ReactDOM.render(React.createElement(Provider, {store: store}, React.createElement("div", null, React.createElement(Counter, {field: "test"}), React.createElement(Counter, {field: "test2"}))), document.getElementById("example"));
//# sourceMappingURL=index.js.map