import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">

      <button onClick={()=>dispatch(decrement())}>-</button>
      <h1>Counter: {count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      </div>
    </div>
  )
} 

export default App