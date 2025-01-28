export const initialState = {
    items:[],
    totalAmount: 0,
    totalQuantity : 0
}
export const cartReducer =(state, action)=>{
    console.log("This is state", state.items)
    switch(action.type){
        case "ADD_TO_CART": {
            const {item} = action.payload; 
            const existingItem = state.items.findIndex((i)=> Number(i.id) === Number(item.id))
            console.log("Existing Id", action.payload)
            let updatedItems; 
            if(existingItem>=0){
                 updatedItems  = [...state.items];
                 updatedItems[existingItem].quantity += item.quantity;
            }else{
                updatedItems= [...state.items,item]
            }
            const totalQuantity = updatedItems.reduce((sum,item)=>sum+item.quantity, 0);
            const totalAmount = updatedItems.reduce((sum,item)=>sum + item.quantity* item.price,0)

            return{
                ...state,
                items : updatedItems,
                totalAmount,
                totalQuantity

            }
        }
        default : 
            return state;
    }

}