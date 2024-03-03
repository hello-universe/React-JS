import React from 'react'
import { CounterProvider } from './Context/CounterContext'
import Button from './Components/Button'

function App() {
  return (
    <CounterProvider>
      <Button />
    </CounterProvider>
  )
}

export default App