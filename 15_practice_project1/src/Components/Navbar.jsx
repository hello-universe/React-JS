import React from 'react'

function Navbar() {
  return (
    <div>
        <nav>
        <div className="img"><img src="images/brand_logo.png" alt="" /></div>
            <ul className='items'>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        <button className="login">Login</button>      
        </nav>
    </div>
  )
}

export default Navbar