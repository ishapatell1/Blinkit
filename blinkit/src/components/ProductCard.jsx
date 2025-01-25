import "../css/productcard.css";
import { data } from "../utils/data";

export const ProductCard = () => {
    const { categories } = data;
    // Destructure and access products
    const getProductData = () => {
        const products = categories.flatMap(category => category.products);
        return products;
    };

    // Call the function to get products
    const products = getProductData();

    return (
        <>
            <h1>Product Card</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="product-image"
                        />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">
                            ₹{product.price}{" "}
                            {product.discount > 0 && (
                                <span className="product-discount">
                                    -{product.discount}%
                                </span>
                            )}
                        </p>
                        <p className="product-unit">{product.unit}</p>
                        <button
                            className="add-to-cart"
                            disabled={!product.availability}
                        >
                            {product.availability ? "Add to Cart" : "Out of Stock"}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};