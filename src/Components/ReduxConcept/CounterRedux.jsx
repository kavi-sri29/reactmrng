import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './ReduxActions';

const CounterRedux = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
  return (
    <div>
        Counter : {count}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default CounterRedux