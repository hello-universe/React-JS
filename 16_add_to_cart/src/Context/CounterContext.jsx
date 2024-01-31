import { createContext, useReducer } from "react";

const CounterContext = createContext();

//Initial state of the count and cart itmes
const initialState = { count: 0, cartItems: [] };

//Defining the reducer function
const reducer = (state, action) => {
  let newCount;
  let updatedCartItems;
  switch (action.type) {
    case "incr":
      //Increases the count of number of items in cart
      newCount = state.count + 1;
      //If product is already present it returns the product else returns undefined
      const hasItem = state.cartItems.find((prod) => {
        return prod.id === action.product.id;
      });
      //If item is already present just increase the quantity by 1
      if (hasItem) {
        updatedCartItems = state.cartItems.map((prod) => {
          return prod.id === hasItem.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod;
        });
      }
      //If item is not already present add the quantity property and set it to 1
      else {
        updatedCartItems = [
          ...state.cartItems,
          { ...action.product, quantity: 1 },
        ];
      }
      return { count: newCount, cartItems: updatedCartItems };
    case "decr":
      //Decreases the count of number of items in cart
      newCount = state.count - 1;
      //Check the condition if the product quantity is 1 in the cart. If it is 1 then remove it from the cart
      if (action.product.quantity === 1) {
        updatedCartItems = state.cartItems.filter(
          (prod) => prod.id != action.product.id
        );
      }
      //If the product quantitiy is not 1 the decrease it by 1
      else {
        updatedCartItems = state.cartItems.map((prod) => {
          return prod.id === action.product.id
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod;
        });
      }
      return { count: newCount, cartItems: updatedCartItems };
    default:
      return state;
  }
};

//Defining the counter provider function for our context
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
