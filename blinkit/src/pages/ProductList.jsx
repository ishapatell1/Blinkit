import { CategoryBanner, NavCategory } from "../components/Banner";
import { ProductCard } from "../components/ProductCard";
import { SideBar } from "../components/SideBar";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import "../css/productlist.css";

export const ProductList = () => {
    const { categoryId } = useParams();

    // Find the selected category based on categoryId from URL
    const selectedCategory = data.categories.find((category) => category.id === parseInt(categoryId));
    console.log("CategoryID", data.categories.products);
    console.log("SelectedCategory", selectedCategory);

    // Get filtered products based on the selected category
    const filteredProducts = selectedCategory?.products || [];
    console.log(filteredProducts);

    return (
        <div className="product-list-container">
            <CategoryBanner />
            <div className="main-content">
                <SideBar />
                <div className="product-grid">
                    {/* Pass filteredProducts to ProductCard instead of all products */}
                    <ProductCard products={filteredProducts} />
                </div>
            </div>
        </div>
    );
};
