import {  createContext, useContext, useReducer } from "react";
import {wishReducer} from "../reducer/WishReducer"; 
import { initialState } from "../reducer/CartReducer";
const WishContext = createContext()
export const WishProvider = ({children})=>{
    const [state,dispatch] = useReducer(wishReducer,initialState); 
    const addtoSaveList = (item)=>{
        dispatch({type: "ADD_TO_SAVE_LIST", payload : {item}})
    }
    const removeFromSaveList = (item)=>{
        dispatch({type:"REMOVE_FROM_SAVE_LIST", payload:{item}})
    }
    return(
        <WishContext.Provider value={{items : state.items,addtoSaveList,removeFromSaveList}}>{children}</WishContext.Provider>
    )
}

export const useSaveList = ()=> useContext(WishContext)