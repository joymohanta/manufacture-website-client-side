import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const detail = {
      email: user.email,
      address: event.target.address.value,
      education: event.target.education.value,
      phone: event.target.phone.value,
      linkedIn: event.target.linkedin.value,
    };
    console.log(detail);
    fetch(`http://localhost:5000/profile`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(detail),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Your Info Update Successfully");
      });
  };
  return (
    <div>
      <h2 className="text-primary font-semibold">Welcome to your Profile</h2>
      <div className="flex justify-evenly items-center mt-20">
        <div className="">
          <h2 className="text-primary text-2xl font-bold">
            {user.displayName}
          </h2>
          <h3 className="text-primary font-bold"> {user.email} </h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className=" w-96 bg-base-100 ">
              <input
                type="text"
                name="education"
                placeholder="Your education"
                className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
              />

              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
                required
              />

              <input
                type="text"
                name="linkedin"
                placeholder="Your linkedIn Profile"
                className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
                required
              />

              <input
                className="bg-primary text-white font-semibold w-full max-w-xs rounded-md py-3 cursor-pointer"
                type="submit"
                value="update"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
