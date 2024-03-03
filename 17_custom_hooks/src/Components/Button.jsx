import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

function Button() {
    const {state, dispatch} = useContext(CounterContext);
  return (
    <button onClick={()=>dispatch({type:'incr'})}>
        Clicked {state.count} times
    </button>
  )
}

export default Button