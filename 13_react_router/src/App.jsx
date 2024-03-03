import React from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Home = ()=> <h1 className='text-4xl'>In Home</h1>
const About = ()=> <h1 className='text-4xl'>In About</h1>
const Contact = ()=> <h1 className='text-4xl'>In Contact</h1>
const notFound = ()=> <h1 className='text-2xl'>The page you are looking for is not found</h1>

function App() {
  return (
    <BrowserRouter>
      <nav className='bg-purple-600 p-6 text-2xl text-white font-medium mb-8'>
        <ul className='flex flex-row gap-5'>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/about'>About</Link> </li>
          <li> <Link to='/contacts'>Contacts</Link> </li>

        </ul>
      </nav>

      <Routes>
          <Route path='*' Component={notFound}/>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/contacts' Component={Contact}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App