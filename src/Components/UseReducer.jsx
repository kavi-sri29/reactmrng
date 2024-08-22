import React, { useReducer } from 'react'
const initialState = {count:0};
function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {
                count: state.count + 1
            }

        default:
            throw new Error();
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <div>UseReducer</div>
    <p>{state.count}</p>
    <button onClick={()=>dispatch({type:'increment'})}>Increment</button>

    </>
    
  )
}

export default UseReducer