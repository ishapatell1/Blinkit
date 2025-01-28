import { CategoryBanner, NavCategory } from "../components/Banner";
import { ProductCard } from "../components/ProductCard";
import { SideBar } from "../components/SideBar";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import "../css/productlist.css";
import { useState } from "react";

export const ProductList = () => {
    const [change,setChange] = useState("relevance")
    const { categoryId } = useParams();

    // Find the selected category based on categoryId from URL
    const selectedCategory = data.categories.find((category) => category.id === parseInt(categoryId));
    // Get filtered products based on the selected category
    const filteredProducts = selectedCategory?.products || [];
    //filter on sorting 
    let sortProducts = [...filteredProducts].sort((a,b)=>{
        if(change==="hightolow") return b.price - a.price; 
        if(change === "lowtohigh") return a.price - b.price;
        if(change=== "maxdiscount") return  b.discount- a.discount;
        return 0;
    })
    
    if(change === "instock"){
        sortProducts = sortProducts.filter((product)=> product.availability)
    }
    return (
        <div className="product-list-container">
            <CategoryBanner setChange={ setChange} />
            <div className="main-content">
                <SideBar selectedCategory={selectedCategory} />
                <div className="product-grid">
                    {/* Pass filteredProducts to ProductCard instead of all products */}
                    <ProductCard products={sortProducts} />
                </div>
            </div>
        </div>
    );
};
