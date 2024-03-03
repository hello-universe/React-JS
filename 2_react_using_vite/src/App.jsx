import React, { useEffect, useState } from 'react'
import A_component from './A_component'
import GamingLaptops from './GamingLaptops'
import MyButton from './MyButton';
import SharedButtons from './assets/SharedButtons';

function App() {
  const [sharedClickCount, setSharedClickCount] = useState(0);
  const [resourceType, setResourceType] = useState('posts');
  
  const changeResourceType = (type)=>{
    setResourceType(()=>{
      console.log("Resource type changed.")
      return type;
    });
    }
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
    }, [resourceType])

  function handleSharedClick(){
    setSharedClickCount(sharedClickCount+1);
}

  return (
    <div className='h-screen w-full bg-red-200'>
      <GamingLaptops/>
      <MyButton />
      <SharedButtons clickCount={sharedClickCount} onClick={handleSharedClick}/>
      <SharedButtons clickCount={sharedClickCount} onClick={handleSharedClick}/>
      <div className="resource-buttons mt-10 ml-10">
      <button className='bg-slate-500 text-white px-4 py-2 mr-5 border-2 border-black rounded-md' onClick={()=>changeResourceType('posts')}>Posts</button>
      <button className='bg-slate-500 text-white px-4 py-2 mr-5 border-2 border-black rounded-md' onClick={()=>changeResourceType('comments')}>Comments</button>
      <button className='bg-slate-500 text-white px-4 py-2 mr-5 border-2 border-black rounded-md' onClick={()=>changeResourceType('users')}>Users</button>
      <div className="resource-type text-4xl mt-5 font-medium">{resourceType}</div>
      </div>
    </div>
  )
}

export default App