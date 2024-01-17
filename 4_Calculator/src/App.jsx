import React, { useState } from 'react'

export default function App() {
  //Setting initial state for the current output as 0 and previous output as null
  const [current, setCurrent] = useState('0');
  const [previous, setPrevious] = useState('');
  //An array to store all the operators(including .)
  const ops = ['/', '*', '+', '-', '.'];

  //An array to store all the single digit numbers
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  //This function only receives a valid expression and sets the result of the expression in the 
  //previous or we can say output2
  function calculate(exp){
    const result = eval(exp).toString();
    setPrevious(result)
  }
  //This function handles the operations that will be performed when the user clicks on the equal button
  function handleEqual(){
    if(!ops.includes(current.slice(-1))){
      const result = eval(current).toString();
      setCurrent(result)
    }
  }
  //This function handles the operations that will be performed when the user clicks on the del button
  const handleDelete = ()=>{
  //First if statement checks if current=='0' then return as 0 is the default value
        if(current==='0') return; 
  //Second if statement checks if the current ranges from 1-9. If so then set it to 0 when del is clicked
        if(current.length===1 && nums.includes(current)){
          setCurrent('0');
          setPrevious('0');
          return;
        }
  //The setCurrent can also work in this way. When you use the state-setting function (in this case, setCurrent), you can provide it with a function as an argument. This function will receive the previous state as its argument. This is what's referred to as the callback function. The value that the callback function returns is what React uses to update the state. 


        setCurrent((prevCurrent) => {
          const updatedCurrent = prevCurrent.slice(0, -1);
  //The first if checks if the expression in the current after deleting the last value is a valid expression or not. Or we can say if the last character of the expression string is an operator or not. If the last character is not an operator then we can simply calculate the value of the expression
          if(!ops.includes(updatedCurrent.slice(-1))){
            calculate(updatedCurrent);
          }
  //If the last character is an operator then calculate the value of the expression which remains after removing that last operator
          else{
            calculate(updatedCurrent.slice(0, -1))
          }
          return updatedCurrent;
        });
      }
  //The displayOnCurrent receives a character which is pressed. It then adds the character with the current value and then evaluates the expression using calculate() method
  function displayOnCurrent(value){
  //This first if checks if the current is 0 or not and the input value is a number(1-9). If both the conditions are true then we have to replace the '0' from our current value and return.
    if(current.length===1 && current.slice(-1)==='0' && nums.includes(value)){
      setCurrent(value);
      return ;
    }
    //This conditon prevents any invalid expression to be written in the display
    if(
      (ops.includes(value) && current==='') || (ops.includes(value) && ops.includes(current.slice(-1)))
    )
    return;
    //This sets the value of current
    setCurrent(current + value);
    //This if statement will call the calculate method only when the last character is not an operator
    if(!ops.includes(value)){
      calculate(current+value);
    }
  }
  return (
    <div className='calculator'>
      <div className="output">
        <div className="previous-operand">{previous}</div>
        <div className="current-operand">{current}</div>
      </div>
      <button className="ac span-2 coloured-text" onClick={()=>{setCurrent('0'); setPrevious('')}}>AC</button>
      <button className="del coloured-text" onClick={handleDelete}>DEL</button>
      <button className="divide coloured-text" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>/</button>
      <button className="1" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>1</button>
      <button className="2" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>2</button>
      <button className="3" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>3</button>
      <button className="multiply coloured-text" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>*</button>
      <button className="4" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>4</button>
      <button className="5" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>5</button>
      <button className="6" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>6</button>
      <button className="add coloured-text" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>+</button>
      <button className="7" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>7</button>
      <button className="8" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>8</button>
      <button className="9" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>9</button>
      <button className="subtract coloured-text" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>-</button>
      <button className="dot" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>.</button>
      <button className="0" onClick={(e)=>displayOnCurrent(e.target.textContent.toString())}>0</button>
      <button className="equal span-2 coloured-text" onClick={handleEqual}>=</button>
    </div>
  )
}
