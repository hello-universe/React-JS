import React from 'react'
import { Link } from 'react-router-dom'
import { CounterContext } from '../Context/CounterContext'
import { useContext } from 'react'

function Header() {
  const {state} = useContext(CounterContext);
  return (
    <div>
        <h3>Context API Tutorial</h3>
        <nav>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/cart'>Cart <span>{state.count}</span></Link> </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header