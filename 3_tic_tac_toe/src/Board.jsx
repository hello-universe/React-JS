import React, { useState } from 'react'
import Square from './Square'


export default function () {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xisNext, setXisNext] = useState(true)
    function handleClick(index){
    // Checking if the square is already have a 'X' or 'O'
        if(squares[index] || calculateWinner()) return;
        const nextSquares = squares.slice();
        if(xisNext){
            nextSquares[index] = 'X';
        }
        else{
            nextSquares[index] = 'O';
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
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-0 w-[300px] h-[300px]'> 
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        <div className="status">{status}</div>
    </div>
  )
}

 
