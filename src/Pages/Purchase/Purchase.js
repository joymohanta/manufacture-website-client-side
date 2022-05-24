import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import "./Purchase.css";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);
  return (
    <div>
      <h2 className="text-center font-bold text-3xl py-5">
        PURCHASE : {tool.name}
      </h2>
      <div className="bar"></div>
      <div className="mt-20 flex justify-evenly items-center text-center">
        <div className="item_detail">
          <img src={tool.img} alt="" />
          <p className="mt-4"> {tool.description} </p>
        </div>
        <div>
          <p className="font-bold">
            Available product : {tool.availableQuantity}{" "}
          </p>
          <p className="font-bold">
            Order Minimum Range : {tool.minimumOrderQuantity}{" "}
          </p>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <input
                type="text"
                value={user?.displayName}
                class="input input-bordered input-primary font-bold text-base w-full max-w-xs"
                disabled
              />
              <input
                type="email"
                value={user?.email}
                class="input input-bordered input-primary font-bold text-base w-full max-w-xs"
                disabled
              />
              <input
                type="text"
                placeholder="Your Address"
                class="input input-bordered input-primary font-bold text-base w-full max-w-xs"
              />
              <input
                type="number"
                placeholder="Phone"
                class="input input-bordered input-primary font-bold text-base w-full max-w-xs"
              />
              <textarea
                type="text"
                placeholder="Description"
                class="input input-bordered input-primary font-bold text-base w-full max-w-xs"
              />
              <div class="card-actions justify-end">
                <button class="btn btn-primary w-full max-w-xs">
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
