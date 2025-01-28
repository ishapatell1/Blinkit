import React from "react";
import { useAddress } from "../context/AddressContext";
import "../css/ordersummary.css";
import { AddressManager } from "./AddressManager";

export const OrderSummary = () => {
  const { selectedAddress } = useAddress();
console.log("SelectedAddres", selectedAddress)
  const handleCheckout = () => {
    if (!selectedAddress) {
      alert("Please select an address before checking out.");
      return;
    }
    alert("Proceeding to checkout with the selected address!");
  };

  return (
    <div className="order-summary-container">
      <h1>Order Summary</h1>

      <div className="address-section">
        <h2>Delivery Address</h2>
        {selectedAddress ? (
          <div className="selected-address">
            <p><strong>ID:</strong> {selectedAddress.id}</p>
            <p><strong>Details:</strong> {selectedAddress.details}</p>
          </div>
        ) : (
          <p className="no-address">No address selected. Please choose one below.</p>
        )}
      </div>

      <div className="address-manager">
        <AddressManager />
      </div>

      <div className="checkout-section">
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};