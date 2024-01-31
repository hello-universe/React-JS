import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

function Cart() {
  //Destructure the state and dispatch from the CounterContext
  const {state, dispatch} = useContext(CounterContext)
  //The array which contains the objects that are in the cart
  const itemsInCart = state.cartItems;

  //Storing the total of the cart inside a variable
  const total = itemsInCart.reduce((accumulator, item)=>{
    return accumulator + (item.new_price*item.quantity);
  }, 0)

  //Function that handles the operation when the 'X' or remove button is clicked
  const handleRemove = (ele)=>{
    dispatch({type: 'decr', product: ele});
  }
  return (
    <div className='cart'>
        <table>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
          {
            itemsInCart.map((ele)=>{
              return (
                <tr key={ele.id}>
                  <td> <img src={ele.image} alt="" /> </td>
                  <td>{ele.name}</td>
                  <td>$ {ele.new_price}</td>
                  <td>{ele.quantity}</td>
                  <td>$ { Number.parseInt(ele.new_price)  *  Number.parseInt(ele.quantity) }</td>
                  <td><svg onClick={()=>handleRemove(ele)} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></td>
                </tr>
              )
            })
          }
        </table>
        {
        }
        <div className="total">Total: $ {total}</div>
    </div>
  )
}

export default Cart