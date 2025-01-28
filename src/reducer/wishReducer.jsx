
export const wishReducer = (state, action)=>{
switch(action.type){
    case "ADD_TO_SAVE_LIST":{
        const {item} = action.payload; 
        const existingProducts = state.items.findIndex((i)=>i.id === item.id)
        console.log("Exisiting Product Id", existingProducts);
        let updatedItems; 
        if(existingProducts>=0){
            updatedItems = [...state.items]
            console.log("Item already in list")
        }else {
            updatedItems = [...state.items,item]
        }
        return{
            ...state,
            items :updatedItems
        }
    }
    case "REMOVE_FROM_SAVE_LIST":{
        const {item} = action.payload;
        const updatedItems = state.items.filter((i)=>i.id !== item.id)
        return{
            ...state,
            items :updatedItems
        }
    }
    default : return state;

}
}