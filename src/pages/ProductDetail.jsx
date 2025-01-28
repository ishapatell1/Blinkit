import React from "react";
import "../css/productdetail.css"

export const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      {/* Left Section: Product Image and Thumbnails */}
      <div className="product-images">
        <img
          src="https://via.placeholder.com/200"
          alt="Product"
          className="main-product-image"
        />
        <div className="thumbnail-container">
          <img src="https://via.placeholder.com/50" alt="Thumbnail 1" />
          <img src="https://via.placeholder.com/50" alt="Thumbnail 2" />
          <img src="https://via.placeholder.com/50" alt="Thumbnail 3" />
          <img src="https://via.placeholder.com/50" alt="Thumbnail 4" />
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="product-details">
        <div className="breadcrumbs">
          Home / Mango Drinks / Frooti Mango Drink
        </div>
        <h1>Frooti Mango Drink</h1>
        <p className="delivery-time">⏱️ 7 MINS</p>
        <a href="#" className="view-all-link">
          View all by Frooti
        </a>

        <div className="select-unit">
          <h3>Select Unit</h3>
          <div className="unit-options">
            <div className="unit-option">
              <span className="discount">5% OFF</span>
              <p>
                600 ml <span className="price">₹38</span> <span className="mrp">MRP ₹40</span>
              </p>
            </div>
            <div className="unit-option">
              <span className="discount">6% OFF</span>
              <p>
                1.2 l <span className="price">₹70</span> <span className="mrp">MRP ₹75</span>
              </p>
            </div>
          </div>
          <button className="add-button">ADD</button>
        </div>

        <div className="shop-benefits">
          <h3>Why shop from Blinkit?</h3>
          <ul>
            <li>
              <strong>Superfast Delivery:</strong> Get your order delivered to your
              doorstep at the earliest from dark stores near you.
            </li>
            <li>
              <strong>Best Prices & Offers:</strong> Best price destination with
              offers directly from the manufacturers.
            </li>
            <li>
              <strong>Wide Assortment:</strong> Choose from 5000+ products across
              food, personal care, household & other categories.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};