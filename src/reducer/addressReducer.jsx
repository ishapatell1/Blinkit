export const initialState = {
    addresses: [],
    selectedAddress: null,
  };
  
  export const addressReducer = (state, action) => {
    switch (action.type) {
        
      case "ADD":
        return {
          ...state,
          addresses: [...state.addresses, action.payload],
        };
  
      case "REMOVE":
        return {
          ...state,
          addresses: state.addresses.filter((address) => address.id !== action.payload),
          selectedAddress:
            state.selectedAddress?.id === action.payload ? null : state.selectedAddress,
        };
  
      case "UPDATE":
        return {
          ...state,
          addresses: state.addresses.map((address) =>
            address.id === action.payload.id
              ? { ...address, ...action.payload.data }
              : address
          ),
        };
  
      case "DEFAULT":
        return {
          ...state,
          selectedAddress: state.addresses.find((address) => address.id === action.payload) || null,
        };
  
      default:
        return state;
    }
  };