import React, { useReducer} from 'react'

const reducer = (state, action)=>{
  console.log(state);
  const type = action.type;
  switch(type){
    case 'decr': state = state-1;
          break; 
    case 'incr': state = state+1;
          break;
    default: console.error("Invalid type")
  }
  return state;
}
export default function App() {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className='main'>
      <div className="container">
        <button className='btn decr' onClick={()=>dispatch({type: 'decr'})}>-</button>
        <div className="display">{state}</div>
        <button className='btn incr' onClick={()=>dispatch({type: 'incr'})}>+</button>
      </div>
    </div>
  )
}
