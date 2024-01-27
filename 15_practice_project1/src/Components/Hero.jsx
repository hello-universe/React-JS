import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <div className="left">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p className='details'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES, YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="buttons">
                <button className="shop-now">Shop Now</button>
                <button className="category">Category</button>
            </div>
            <p>Also Available On</p>
            <div className="logos">
                <div className="flipkart"><img src="images/flipkart.png" alt="" /></div>
            <div className="amazon">
                <img src="images/amazon.png" alt="" />
            </div>
            </div>
        </div>
        <div className="right">
            <img src="images/hero-image.png" alt="" />
        </div>
    </div>
  )
}

export default Hero