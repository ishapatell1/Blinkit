import { useState } from 'react'
import {Routes, Route, Outlet} from "react-router-dom"
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { ProductList } from './pages/ProductList'
import { Cart } from './pages/Cart'
import { Search } from './pages/Search'
import { ProductDetail } from './pages/ProductDetail'
import { SavedList } from './pages/SavedList'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
function App() {
  
 const Applayout = ()=>{
  const notify = () => toast("Hey There, Don't Forget to Invest your money rather than spending on silly items.");
  notify()
  return(
    <>
    <ToastContainer/>
    <Header />
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
        <Route path = "/cn/:categoryId" element = {<ProductList/>}/>
        <Route path = "/prdetail/:id" element = {<ProductDetail/>}/>
        <Route path = "/saved" element = {<SavedList/>}/>
        </Route>
        <Route path = "/s" element = {<Search/>}/>
      </Routes>
    </>
  )
}
export default App
