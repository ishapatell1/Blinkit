
import "../css/productcard.css";
import { useCart } from "../context/CartContext";
import { useSaveList } from "../context/WishContext";
import { toast } from "react-toastify";
export const ProductCard = ({products}) => {
    const {addtoCart} = useCart();
    const {addtoSaveList} = useSaveList();
    const handleAddtoCart = (products)=>{
        const item = {id : products.id, name : products.name, price : products.price, quantity:1};
        addtoCart(item)
        toast.success("item added successfully!");
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
                        <button className="add-to-cart" onClick={()=>addtoSaveList(product)}>Save in List</button>
                    </div>
                ))}
            </div>
        </>
    );
};