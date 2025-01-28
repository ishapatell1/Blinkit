import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./context/CartContext.jsx"
import { WishProvider } from './context/WishContext.jsx'
import { AddressProvider } from './context/AddressContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <WishProvider>
    <CartProvider>
      <AddressProvider> 
    <App />
    </AddressProvider>
    </CartProvider>
    
    </WishProvider>
    </BrowserRouter>
  </StrictMode>
)
