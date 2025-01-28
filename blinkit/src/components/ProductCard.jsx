
import "../css/productcard.css";
import { data } from "../utils/data";
import { useCart } from "../context/CartContext";
export const ProductCard = ({products}) => {
    const {addtoCart} = useCart();
    const handleAddtoCart = (products)=>{
        const item = {id : products.id, name : products.name, price : products.price, quantity:1};
        addtoCart(item)
    }
    return (
      
        <>
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
                        <button onClick={()=>handleAddtoCart(product)}
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