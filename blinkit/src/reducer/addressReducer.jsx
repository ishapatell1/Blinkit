export const initialState = {
  addresses: [],
  selectedAddress: null,
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // Ensure the address being added doesn't already exist
      if (state.addresses.some((address) => address.id === action.payload.id)) {
        console.error("Address with this ID already exists.");
        return state;
      }
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case "REMOVE":
      // Make sure the address exists before attempting to remove it
      const addressExists = state.addresses.some((address) => address.id === action.payload);
      if (!addressExists) {
        console.error("Address with this ID doesn't exist.");
        return state;
      }
      return {
        ...state,
        addresses: state.addresses.filter((address) => address.id !== action.payload),
      };

    case "UPDATE":
      // Update the address if found, otherwise no changes
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id
            ? { ...address, ...action.payload.data }
            : address
        ),
      };

    case "DEFAULT":
      // Check if the address exists before setting it as default
      const defaultAddress = state.addresses.find((address) => address.id === action.payload);
      if (!defaultAddress) {
        console.error("Address with this ID doesn't exist.");
        return state;
      }
      return {
        ...state,
        selectedAddress: defaultAddress,
      };

    default:
      return state;
  }
};