import React, { useRef } from 'react'
import { useState, useEffect } from 'react';

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  //This state is used to explain the feature of cleanup function in useEffect
  const [width, setWidth] = useState(window.innerWidth);

  const changeResourceType = (type)=>{
    setResourceType(type);
    }
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
      console.log("use effect runs")
    }, [resourceType])

    //Use effect to handle the change in width of the screen
    useEffect(()=>{
      window.addEventListener('resize', handleResize)
      // console.log("Event listner added")
      return ()=>{
        window.removeEventListener('resize', handleResize)
        // console.log("Event listner removed")
      }
    })

    const handleResize = ()=>{
      setWidth(window.innerWidth);
    }

    //Creating a reference for our input field
    const [userValue, setUserValue] = useState('Type your name')
    const userInput = useRef();
    const handleTestClick = ()=>{
      console.log(userInput.current)
    }
    useEffect(()=>{
      userInput.current.focus();
    }, [])
  return (
    <div>
      <div className="resource-buttons mt-10 ml-10">
      <button className='bg-slate-500 text-white px-4 py-2 mr-5 border-2 border-black rounded-md' onClick={()=>changeResourceType('posts')}>Posts</button>
      <button className='bg-slate-500 text-white px-4 py-2 mr-5 border-2 border-black rounded-md' onClick={()=>changeResourceType('comments')}>Comments</button>
      <button className='bg-slate-500 text-white px-4 py-2 mr-5 border-2 border-black rounded-md' onClick={()=>changeResourceType('users')}>Users</button>
      <div className="resource-type text-4xl mt-5 font-medium">{resourceType}</div>
      {/* <div className="display-items">
        {items.map((item, index)=>{
          return(
            <div className="item" key={index}>{JSON.stringify(item)}</div>
          )
        })}
      </div> */}
      <h1 className="screen-width text-5xl mt-10">Current Width: {width}</h1>
      <input  ref={userInput} type="text" value={userValue} className='border-2 border-gray-600 h-8 pl-2 mt-10 rounded-md block' onChange={(e)=>setUserValue(e.target.value)}/>
      <div className="user-value pl-2">{userValue}</div>
      <button onClick={handleTestClick} className="test-button px-4 py-2 rounded-md bg-red-500 text-white mt-5">Click me</button>
      </div>
    </div>
  )
}

export default App