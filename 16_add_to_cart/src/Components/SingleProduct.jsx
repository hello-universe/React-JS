import React from 'react'
import { CounterContext } from '../Context/CounterContext'
import { useContext } from 'react'

function SingleProduct({prod}) {
  const {dispatch} = useContext(CounterContext)

  const handleAddToCart = () => {
    dispatch({ type: 'incr', product: prod });
  };
  return (
    <div className='card'>
        <div className="img">
            <img src={prod.image} alt="Product Image" />
        </div>
        <h3 className="name">{prod.name}</h3>
        <p className="price">$ {prod.new_price}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default SingleProduct