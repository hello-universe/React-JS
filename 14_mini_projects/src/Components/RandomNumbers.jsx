import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

function RandomNumbers() {
    const [random, setRandom] = useState(null);
    const [isValid, setIsValid] = useState(true);
    const initial_range = useRef();
    const final_range = useRef();
    const handleGenerate = ()=>{
        const val1 = parseInt(initial_range.current.value, 10);
        const val2 = parseInt(final_range.current.value, 10);
        if(isNaN(val1) || isNaN(val2)){
            setIsValid(false);
            return ;
        }
        setIsValid(true);
        const range = val2-val1+1;
        const randomNum = Math.floor(Math.random()*range)+val1;
        setRandom(randomNum)
    }
  return (
    <div className='flex flex-col justify-center items-start mt-10 gap-6'>
        <h1 className='text-3xl font-semibold text-orange-600'>Generate Random Numbers in a Range</h1>
        <input ref={initial_range} className='border-2 border-black rounded-md text-xl pl-2 py-1' type="number" placeholder='Enter first number'/>
        <input ref={final_range} className='border-2 border-black rounded-md text-xl pl-2 py-1' type="number" placeholder='Enter second number'/>
        {isValid ? <></> : <span className="error-msg text-red-800 text-xl">Please enter a valid number</span>}
        
        <button onClick={handleGenerate} className="generate bg-red-500 font-[500] text-md text-white px-5 py-2 rounded-md">Generate</button>
        {random==null ? <></> : <div className="result text-2xl">Random number is: {random}</div>}
        
    </div>
  )
}

export default RandomNumbers