import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="product-display-img">
          <img
            src={product.image}
            className="product-display-main-img"
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="product-display-right-size">
          <h1>Select size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>Add to Cart</button>
        <p className="product-display-right-category">
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags :</span> Modern,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

//2:03:42
