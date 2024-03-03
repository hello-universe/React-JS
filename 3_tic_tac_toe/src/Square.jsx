import React, { useState } from 'react'

function Square({value, onSquareClick}) {
  return (
   <button className='square text-center border-slate-700 border-[1px] text-6xl font-semibold' onClick={onSquareClick}>{value}</button>
  )
}

export default Square