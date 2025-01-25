import { CategoryBanner, NavCategory } from "../components/Banner"
import { ProductCard } from "../components/ProductCard";
import { SideBar } from "../components/SideBar";
import "../css/productcard.css";
export const ProductList = ()=>{
    return(
        <>
        {/* <CategoryBanner/>
        <NavCategory/> */}
        <div className="product-list-container">
  <div className="main-content">
   <SideBar/>
    <div className="product-grid">
   <ProductCard/>
    </div>
  </div>
</div>
        </>
    )
}

