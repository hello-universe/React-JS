import React from 'react'

function SharedButtons(props) {
    const {clickCount, onClick} = props;

    return(
        <button className='p-3 bg-green-600 text-white mt-5 mx-5' onClick={onClick}>Shared Click {clickCount} times</button>
    )
}

export default SharedButtons