import { CategoryBanner, NavCategory } from "../components/Banner"
import { ProductCard } from "../components/ProductCard";
import { SideBar } from "../components/SideBar";
import "../css/productlist.css";
export const ProductList = ()=>{
    return(
        <div className="product-list-container">
        <CategoryBanner/>
            <div className="main-content">
                <SideBar/>
                <div className="product-grid">
                    <ProductCard/>
                </div>
            </div>
        </div>
    )
}

