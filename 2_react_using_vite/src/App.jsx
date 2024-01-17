import React, { useState } from 'react'
import A_component from './A_component'
import GamingLaptops from './GamingLaptops'
import MyButton from './MyButton';
import SharedButtons from './assets/SharedButtons';

function App() {
  const [sharedClickCount, setSharedClickCount] = useState(0);
  function handleSharedClick(){
    setSharedClickCount(sharedClickCount+1);
}
  return (
    <div className='h-screen w-full bg-red-200'>
      <GamingLaptops/>
      <MyButton />
      <SharedButtons clickCount={sharedClickCount} onClick={handleSharedClick}/>
      <SharedButtons clickCount={sharedClickCount} onClick={handleSharedClick}/>
    </div>
  )
}

export default App