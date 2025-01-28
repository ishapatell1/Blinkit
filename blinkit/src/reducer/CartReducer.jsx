

export const initialState = {
    items:[],
    totalAmount: 0,
    totalQuantity : 0
}
export const cartReducer =(state, action)=>{
    
    switch(action.type){
        case "ADD_TO_CART": {
            const {item} = action.payload; 
            const existingItem = state.items.findIndex((i)=> Number(i.id) === Number(item.id))
            
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
        case "REMOVE_FROM_CART" : {
            const {item} = action.payload; 
            const updatedItems = state.items.filter((i)=> i.id !== item.id);
            const totalQuantity = updatedItems.reduce((sum, item)=>sum + item.quantity,0)
            const totalAmount = updatedItems.reduce((sum, item)=> sum + item.quantity * item.price,0)
            return{
                ...state,
                items : updatedItems,
                totalAmount,
                totalQuantity
            }
        }
        case "INCREMENT": {
            const {item} = action.payload; 
            const updatedItems = state.items.map((i)=> (i.id === item.id)?{...i, quantity : i.quantity +1}: i)
            const totalQuantity = updatedItems.reduce((sum,item)=>sum+item.quantity, 0);
            const totalAmount = updatedItems.reduce((sum,item)=>sum + item.quantity* item.price,0)
            return{
                ...state,
                items : updatedItems,
                totalAmount,
                totalQuantity
            }
        }
        case "DECREMENT":{
            const {item} = action.payload; 
            console.log("Item", item ,"Action:", action.payload)
            const updatedItems = state.items.map((i)=>i.id === item.id && item.quantity > 1 ? {...i, quantity: i.quantity-1}:i)
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