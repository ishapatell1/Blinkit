import { createContext, useContext, useReducer } from "react";
import { initialState, addressReducer } from "../reducer/addressReducer";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducer, initialState);
  let idCounter = 1;

  const add = (address) =>
    dispatch({
      type: "ADD",
      payload: { ...address, id: idCounter++ },
    });
//   const add = (address) => dispatch({ type: "ADD", payload: address });
  const remove = (id) => dispatch({ type: "REMOVE", payload: id });
  const update = (id, data) => dispatch({ type: "UPDATE", payload: { id, data } });
  const setDefault = (id) => dispatch({ type: "DEFAULT", payload: id });

  return (
    <AddressContext.Provider
      value={{
        addresses: state.addresses,
        selectedAddress: state.selectedAddress,
        add,
        remove,
        update,
        setDefault,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);

  if (!context) {
    throw new Error("useAddress must be used within AddressProvider");
  }

  return context;
};