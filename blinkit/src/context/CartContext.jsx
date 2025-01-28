import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducer/CartReducer";
const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(cartReducer, initialState);
    const addtoCart = (item)=>{
        dispatch({type:"ADD_TO_CART",payload: {item}})
    }
    const removeFromCart = (item)=>{
        dispatch({type:"REMOVE_FROM_CART", payload:{item}})
        console.log("Removed")
    }
    const increment = (item)=>{
        dispatch({type : "INCREMENT", payload : {item}})
    }
    const decrement = (item)=>{
        dispatch({type: "DECREMENT", payload : {item}})
    }
    return(
        <CartContext.Provider value={{items : state.items,totalAmount : state.totalAmount,totalQuantity : state.totalQuantity, addtoCart,removeFromCart, increment, decrement}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>{
    const contextforcart = useContext(CartContext); 
    if(!contextforcart){
        throw new Error("Use Cart Must be used within Cart Provider")
    }
    return contextforcart;
}