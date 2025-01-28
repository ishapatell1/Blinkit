import {  createContext, useContext } from "react";

const WishContext = createContext()
export const WishProvider = ({children})=>{
    return(
        <WishContext.Provider>{children}</WishContext.Provider>
    )
}

export const useSaveList = ()=> useContext(WishContext)