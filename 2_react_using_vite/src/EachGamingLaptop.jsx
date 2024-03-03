import React from 'react'
import './index.css'

function EachGamingLaptop(props) {
    // const image = 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/z/x/3/-original-imagtz2bphyyfsbq.jpeg?q=70';
    // const name = 'HP Omen';
    // const price = '1,12,990';

    //Destructuring
    const {name, age, gender} = props;
  return (
    <div className='flex gap-5 shadow-lg p-5  items-center border-2 border-black'>
        {/* <img src={image} alt="" />
        <div className="properties">
        <span className="name w-full block">{name}</span>
        <span className="price w-full block">₹ {price}</span>
        </div> */}

        {/* Printing directly by props properties */}
        {/* <div className="name">{props.name}</div>
        <div className="age">{props.age}</div>
        <div className="gender">{props.gender}</div> */}
        
        {/* Printing by destructuring object */}
        <div className="name">{name}</div>
        <div className="age">{age}</div>
        <div className="gender">{gender}</div>
    </div>
  )
}

export default EachGamingLaptop