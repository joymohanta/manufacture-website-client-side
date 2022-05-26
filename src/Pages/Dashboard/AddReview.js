import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const feedback = {
      name: user.displayName,
      description: event.target.description.value,
      ratings: event.target.ratings.value,
      img: event.target.img.value,
    };
    console.log(feedback);
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Thanks For Your Review");
      });
  };
  return (
    <div>
      <h2 className="text-primary font-bold">
        Please Leave Your Feedback Here
      </h2>

      <form onSubmit={handleSubmit}>
        <div className=" w-96 bg-base-100 ">
          <input
            type="text"
            name="name"
            value={user?.displayName}
            placeholder="Your name"
            className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
            disabled
          />
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
            required
          />
          <input
            type="number"
            name="ratings"
            placeholder="Ratings"
            className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
            required
          />
          <input
            type="text"
            name="img"
            placeholder="Photo link"
            className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
            required
          />

          <input
            className="bg-primary text-white font-semibold w-full max-w-xs rounded-md py-3 cursor-pointer"
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
