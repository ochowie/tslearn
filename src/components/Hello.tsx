import * as React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state: HelloState, props):HelloProps => {
    return {
        counter: (state[props.field]) || 0
    };
};

const mapDispatchToProps = (dispatch):HelloProps => {
    return {
        incr: (field) => {
            dispatch({type: 'COUNTER_CHANGE', by: 1, field});
        },
        decr: (field) => {
            dispatch({type: 'COUNTER_CHANGE', by: -1, field});
        }
    }
};


const Counter:React.StatelessComponent<HelloProps> = (props) => (
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
