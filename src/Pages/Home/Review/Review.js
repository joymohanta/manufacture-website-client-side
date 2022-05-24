import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="parent_review">
      <div>
        <h2 className="text-center bg-secondary pt-10 pb-28 font-bold text-3xl">
          OUR CLIENTS REVIEWS
        </h2>
      </div>
      <div className="review mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
