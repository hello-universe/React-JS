import React from 'react'
import Progess_bar from './Components/Progess_bar'
import Checkboxes from './Components/Checkboxes'
import RandomNumbers from './Components/RandomNumbers'

function App() {
  return (
    <div className='w-[80%] h-[100vh] flex flex-col justify-center items-center mx-auto'>
      <Progess_bar width={10}/>
      <Checkboxes />
      <RandomNumbers />
    </div>
  )
}

export default App