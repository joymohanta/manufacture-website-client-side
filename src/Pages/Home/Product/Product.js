import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ tool }) => {
  const {
    _id,
    name,
    price,
    minimumOrderQuantity,
    availableQuantity,
    description,
    img,
  } = tool;
  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
    // console.log(_id);
  };
  return (
    <div className="product">
      <div className="per-product">
        <img src={img} alt="" />
        <div className="flex justify-between">
          <h3 className="font-bold pt-4"> {name} </h3>
          <h3 className="font-bold pt-4">Price: ${price} </h3>
        </div>
        <div className="details">
          <p className="text-justify pb-4">{description}</p>
          <div className="pb-4">
            <h3 className="font-extrabold">
              Available: {availableQuantity} piece
            </h3>
            <h3 className="font-extrabold">
              Minimum Order: {minimumOrderQuantity}{" "}
            </h3>
          </div>
          <button
            onClick={() => navigateToPurchase(_id)}
            className="btn btn-secondary btn-sm"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
