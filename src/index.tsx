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
            case 'INCR':
                return {counter: state.counter + action.by};
            default:
                return state;
        }
    },
    {counter: 0});


ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById("example")
);                                                                