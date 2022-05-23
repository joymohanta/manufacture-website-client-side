import React from "react";

const ReviewCard = ({ review }) => {
  const { name, img, description, ratings } = review;
  return (
    <div className="per_review">
      <p> {description} </p>
      <h2> {name} </h2>
      <h2> {ratings} </h2>
    </div>
  );
};

export default ReviewCard;
