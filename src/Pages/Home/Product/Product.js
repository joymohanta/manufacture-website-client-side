import React from "react";
import "./Product.css";

const Product = ({ tool }) => {
  const {
    name,
    price,
    minimumOrderQuantity,
    availableQuantity,
    description,
    img,
  } = tool;
  return (
    <div className="product">
      <div className="per-product">
        <img src={img} alt="" />
        <div className="flex justify-between">
          <h3 className="font-bold pt-4"> {name} </h3>
          <h3 className="font-bold pt-4">Price: ${price} </h3>
        </div>
        <div className="details">
          <p className="pb-4">{description}</p>
          <div className="pb-4">
            <h3 className="font-extrabold">
              Available: {availableQuantity} piece
            </h3>
            <h3 className="font-extrabold">
              Minimum Order: {minimumOrderQuantity}{" "}
            </h3>
          </div>
          <button className="btn btn-secondary btn-sm">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
