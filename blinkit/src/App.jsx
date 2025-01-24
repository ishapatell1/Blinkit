import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import { Home } from './pages/Home'
import { ProductList } from './pages/ProductList'
import { Cart } from './pages/Cart'
import { Search } from './pages/Search'

function App() {
//  const Applayout = ()=>{
  
//  }
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/cart"  element = {<Cart/>}/>
        <Route path = "/cn" element = {<ProductList/>}/>
        <Route path = "/s" element = {<Search/>}/>
      </Routes>
    </>
  )
}
export default App
