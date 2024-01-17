import React from 'react'
import Square from './Square'
import { useState } from 'react'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
    const [xisNext, setXisNext] = useState(true)

    //The function that is triggered when a square is clicked
    function handleClick(index, el){
    // Checking if the square is already have a 'X' or 'O'
        if(squares[index] || calculateWinner()) return;
        //The slice method creates a new copy of the squares array
        const nextSquares = squares.slice();
        if(xisNext){
            nextSquares[index] = 'X';
            el.classList.add("text-orange-600")
            el.classList.remove("text-[#007f5f]")
        }
        else{
            nextSquares[index] = 'O';
            el.classList.add("text-[#007f5f]")
            el.classList.remove("text-orange-600")
        }
        setXisNext(!xisNext);
        setSquares(nextSquares);
    }

    //Storing the winner in a const
    
    const winner = calculateWinner();
    let status;
    if(winner){
        status = "Winner is " + winner;
    }
    else{
        status = "Next move is " + (xisNext ? 'X' : 'O')
    }

    //Calculate winner function
    function calculateWinner(){
        const lists = [
            [0, 1, 2],
            [3, 4, 5], 
            [6, 7, 8],
            [0, 3, 6], 
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i=0; i<lists.length; i++){
            const [a, b, c] = lists[i];
            if(squares[a]===squares[b] && squares[b]===squares[c] && squares[c]!=null){
                return squares[a];
            }
        }
        return null;
    }
    function handleReset(){
      setXisNext(true);
      setSquares(Array(9).fill(null));
    }
        
    
  return (
    <div className='bg-[#fadde1] h-screen text-center mx-auto flex flex-col gap-10 justify-center items-center'>
      <div className="heading text-6xl font-medium">Tic Tac Toe using <span className='text-[#007f5f]'>ReactJS</span> </div>
      <div className="status text-5xl font-semibold text-red-600">{status}</div>
<div className='grid grid-cols-3 grid-rows-3 gap-0 w-[300px] h-[300px]'> 
        <Square value={squares[0]} onSquareClick={(e)=>handleClick(0, e.target)}/>
        <Square value={squares[1]} onSquareClick={(e)=>handleClick(1, e.target)}/>
        <Square value={squares[2]} onSquareClick={(e)=>handleClick(2, e.target)}/>
        <Square value={squares[3]} onSquareClick={(e)=>handleClick(3, e.target)}/>
        <Square value={squares[4]} onSquareClick={(e)=>handleClick(4, e.target)}/>
        <Square value={squares[5]} onSquareClick={(e)=>handleClick(5, e.target)}/>
        <Square value={squares[6]} onSquareClick={(e)=>handleClick(6, e.target)}/>
        <Square value={squares[7]} onSquareClick={(e)=>handleClick(7, e.target)}/>
        <Square value={squares[8]} onSquareClick={(e)=>handleClick(8, e.target)}/>
</div>
    <button className="reset p-4 rounded-[50px] bg-[#229e7f] text-white w-28 text-2xl hover:bg-[#007f5f]" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App