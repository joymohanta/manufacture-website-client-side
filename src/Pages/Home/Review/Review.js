import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="bg-secondary pt-10 pb-28">
        <h2 className="text-center font-bold text-3xl">OUR CLIENTS REVIEWS</h2>
      </div>
      <div className="review">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
