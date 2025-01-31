import React from "react";
import "../css/productcard.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { OrderSummary } from "../components/OrderSummary";

export const Cart = () => {
  const { items, totalAmount, totalQuantity, removeFromCart,increment, decrement } = useCart();

  return (
    <div>
     
      {items.length === 0 ? (
        <h1 className="add-to-cart">This Cart is empty  <Link to = "/saved">Go to Saved List</Link></h1>
       
      ) : (
        <div className="product-list">
          <h1>Cart Items</h1>
          <ul className="product-card">
            {items.map((item) => (
              <li key={item.id}>
                <h2 className="product-name">{item.name}</h2>
                <p>Price: ₹{item.price}</p>
                <span className="item-quantity">
                  <button className="add-to-cart" onClick={()=>decrement(item)}>-</button>
                  <p className="product-unit">{item.quantity}</p>
                  <button className="add-to-cart" onClick={()=>increment(item)}>+</button>
                </span>
                <button className="add-to-cart" onClick={()=>removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>

          <h2>Total Price: ₹{totalAmount}</h2>
          <h2>Total Quantity: {totalQuantity}</h2>
        </div>
      )}
       <OrderSummary/>
    </div>
  );
};