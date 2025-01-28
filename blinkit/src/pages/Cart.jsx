import React from 'react'
import { useCart } from '../context/CartContext'

export const Cart = () => {
  const {items, totalAmount, totalQuantity} = useCart()
  return (
    <div>
      <h1>Cart Items</h1>
      <ul>
        {items.map((item)=>(
          <li key = {item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>

      <h2>Total Item : {totalAmount}</h2>
      <h2>Quantity : {totalQuantity}</h2>
    </div>
  )
}

