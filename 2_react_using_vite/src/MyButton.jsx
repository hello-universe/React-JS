import React from 'react'
import { useState } from 'react'

function MyButton(){
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return(
        <button className='p-3 bg-blue-600 text-white mt-5' onClick={handleClick}>Clicked {count} times</button>
    )
}

export default MyButton;
