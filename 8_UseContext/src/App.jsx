import React from 'react'
import Parent from './Components/Parent'
import { createContext } from 'react'

const msgContext = createContext();
export default function App() {
  const msg = "This message is sent from App.jsx."
  const msg2 = "This is another message from App.jsx"
  return (
    <div className='main'>
      <msgContext.Provider value={{msg, msg2}}>
        <Parent />
      </msgContext.Provider>
    </div>
  )
}
export {msgContext}

