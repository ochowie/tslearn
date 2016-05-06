/**
 * Created by azeyda on 5/1/16.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import Counter from "./components/Hello";


let store = createStore(
    (state:HelloState, action:HelloAction) => {
        switch (action.type) {
            case 'COUNTER_CHANGE':
                return Object.assign({}, state,
                  {[action.field]:
                    (typeof state[action.field] === "undefined") ? 0 + action.by : state[action.field] + action.by});
            default:
                return state;
        }
    }, {});


ReactDOM.render(
    <Provider store={store}>
    <div>
        <Counter field="test" />
        <Counter field="test2" />
        </div>
    </Provider>,
    document.getElementById("example")
);
