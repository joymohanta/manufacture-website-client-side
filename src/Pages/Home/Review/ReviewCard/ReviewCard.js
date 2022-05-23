import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const { name, img, description, ratings } = review;
  return (
    <div className="per_review">
      <p className="text-justify font-bold p-3">
        <small>{description}</small>
      </p>
      <img src={img} alt="" />
      <h2 className="font-bold pl-3"> {name} </h2>
      <h2 className="font-bold pl-3"> {ratings} </h2>
      <h2 className="pl-2 text-secondary">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </h2>
    </div>
  );
};

export default ReviewCard;
