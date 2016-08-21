import React       from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/counter';

function Counter(props) {
  return (
    <div className="counter">
      <span>{props.count}</span>
      <button onClick={() => props.dispatch(increment())}>increment</button>
    </div>
  );
}

function mapState(state) {
  return {
    count: state.counter.count,
  };
}

export default connect(mapState)(Counter);
