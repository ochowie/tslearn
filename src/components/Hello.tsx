import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    incr: () => {
        dispatch({ type: 'INCR', by: 1 });
    },
    decr: () => {
        dispatch({ type: 'INCR', by: -1 });
    }
});


const Counter: React.StatelessComponent<HelloProps> = (props) => (
    <div>
        <p>
            <label>Counter: </label>
            <b>#{props.counter}</b>
        </p>
        <button onClick={e => props.incr() }>INCREMENT</button>
        <span style={{ padding: "0 5px" }}/>
        <button onClick={e => props.decr() }>DECREMENT</button>
    </div>
);
// export default class Counter extends React.Component<HelloProps, {}> {
//     render() {
//         return (
//
//         );
//     }
// }
//

export default connect(mapStateToProps, mapDispatchToProps)(Counter);