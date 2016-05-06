import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
    return {
        counter: (state[props.field]) || 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incr: (field) => {
            dispatch({type: 'COUNTER_CHANGE', by: 1, field});
        },
        decr: (field) => {
            dispatch({type: 'COUNTER_CHANGE', by: -1, field});
        }
    }
};


const Counter = (props) => (
    <div>
        <p>
            <label>{props.field}: </label>
            <b>#{props.counter}</b>
        </p>
        <button onClick={e => props.incr(props.field) }>INCREMENT</button>
        <span style={{ padding: "0 5px" }}/>
        <button onClick={e => props.decr(props.field) }>DECREMENT</button>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
