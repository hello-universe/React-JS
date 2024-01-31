import React, {createContext, useReducer}  from 'react'

const CounterContext = createContext();
const initialState = {count:0};
const reducer = (state, action)=>{
    switch(action.type){
        case 'incr': 
            return {count: state.count+1}
        case 'decr':
            return {count: state.count-1}
        default:
            return state;
    }
}

const CounterProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}

export {CounterContext, CounterProvider}