import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { CounterProvider } from './Context/CounterContext'

function App() {
  return (
    <BrowserRouter>
    <CounterProvider>

    <Header />
    <div className="app">
      <Routes>

      <Route path='/' element={<Home/>} exact/>
      <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
    </CounterProvider>
    </BrowserRouter>
  )
}

export default App