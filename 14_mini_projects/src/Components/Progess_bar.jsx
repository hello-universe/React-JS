import React from 'react'

function Progess_bar(props) {
    const percent = props.width;
  return (
    <>
    <h1 className='text-3xl mb-8 text-purple-600 font-semibold'>Progress Bar</h1>
    <div className='wrapper w-full h-8 bg-slate-400 rounded-md'>
        <div className="green-bar h-full bg-green-600 rounded-md" style={{width: percent + '%'}}></div>
    </div>
    </>
  )
}

export default Progess_bar