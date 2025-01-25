import "../css/banner.css"; 
import { useState } from "react";
export const CategoryBanner = ()=>{
const [categoryName, setCategoryName] = useState("")
    return (
       <div className="category-banner">
        <p>{categoryName}</p>
        <div className="category-filter">
            <select>
                <option value="relevance">Relevance</option>
                <option value= "hightolow">Price(High to Low)</option>
                <option value= "lowtohigh">Price (Low to High)</option>
                <option value= "maxdiscount">Discount</option>
            </select>
        </div>
       </div>
    )
}

export const NavCategory = () =>{
    return (
        <div>
            <h1>This is season</h1>
        </div>
    )
}