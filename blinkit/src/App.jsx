import { useState } from 'react'
import {Routes, Route, Outlet} from "react-router-dom"
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { ProductList } from './pages/ProductList'
import { Cart } from './pages/Cart'
import { Search } from './pages/Search'
import { ProductDetail } from './pages/ProductDetail'

function App() {
 const Applayout = ()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    </>
  )
 }
  return (
    <>
      <Routes>
        <Route  element = {<Applayout/>}>
        <Route index element = {<Home/>}/>
        <Route path = "/cart"  element = {<Cart/>}/>
        <Route path = "/cn/:id" element = {<ProductList/>}/>
        <Route path = "/s" element = {<Search/>}/>
        <Route path = "/prdetail/:id" element = {<ProductDetail/>}/>
        </Route>
      </Routes>
    </>
  )
}
export default App
