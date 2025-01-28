import { createContext } from "react";

const CartContext = createContext();

export const CartProvoder = ({children})=>{
    return(
        <CartContext.Provider>{children}</CartContext.Provider>
    )
}