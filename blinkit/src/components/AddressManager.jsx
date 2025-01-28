import React, { useState } from "react";
import { useAddress } from "../context/AddressContext";
import "../css/address.css"
export const AddressManager = () => {
  const { addresses, add, remove, update, setDefault, selectedAddress} = useAddress();
  const [newAddress, setNewAddress] = useState({ id: "", street: "", city: "", country: "", zipCode: "" });

  const handleAddAddress = () => {
    if (newAddress.street && newAddress.city && newAddress.country && newAddress.zipCode) {
      add(newAddress);
      setNewAddress({ id: "", street: "", city: "", country: "", zipCode: "" }); // reset form
    }
  };

  const handleUpdateAddress = (id) => {
    const updatedData = { ...newAddress, id };
    update(id, updatedData);
  };

  return (
    <div className="address-manager">
      <h2>Manage Your Addresses</h2>

      <div className="address-form">
        <input
          type="text"
          placeholder="Street"
          value={newAddress.street}
          onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={newAddress.city}
          onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country"
          value={newAddress.country}
          onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={newAddress.zipCode}
          onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
        />
        <button onClick={handleAddAddress}>Add Address</button>
      </div>

      <div className="address-list">
        <h3>Your Addresses</h3>
        {addresses.length === 0 ? (
          <p>No addresses added yet!</p>
        ) : (
          <ul>
            {addresses.map((address) => (
              <li key={address.id} className={address.id === selectedAddress?.id ? "selected" : ""}>
                <div>
                  <p>{address.street}, {address.city}, {address.country}, {address.zipCode}</p>
                  <button onClick={() => setDefault(address.id)}>Set as Default</button>
                  <button onClick={() => remove(address.id)}>Remove</button>
                  <button onClick={() => handleUpdateAddress(address.id)}>Update</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};