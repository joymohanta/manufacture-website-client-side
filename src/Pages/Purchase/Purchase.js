import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./Purchase.css";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [tool, setTool] = useState({});
  const [inputError, setInputError] = useState();
  const navigate = useNavigate();

  const handleComplete = (event) => {
    event.preventDefault();
    const order = {
      client: user.displayName,
      email: user.email,
      price: tool.price,
      productName: tool.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
      totalQuantity: event.target.quantity.value,
    };
    // console.log(order);
    fetch("https://secure-bayou-16364.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Order Placed Successfully");
        navigate("/");
      });
    const totalQuantity = event.target.quantity.value;
    const quantityNum = parseInt(totalQuantity);
    const availableQuantity =
      document.getElementById("available-item").innerText;
    const availableNum = parseInt(availableQuantity);
    const minimumOrderQuantity =
      document.getElementById("minimum-order").innerText;
    const orderNum = parseInt(minimumOrderQuantity);
    if (quantityNum < orderNum || quantityNum > availableNum) {
      return (onchange = setInputError(
        "Check available & minimum order range"
      ));
    } else {
      setInputError("");
      return quantityNum;
    }
  };

  useEffect(() => {
    const url = `https://secure-bayou-16364.herokuapp.com/tool/${id}`;
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
      <div className="mt-20 mb-8 flex justify-evenly items-center text-center">
        <div className="item_detail">
          <img src={tool.img} alt="" />
          <p className="mt-4"> {tool.description} </p>
        </div>
        <div>
          <p className="font-bold">Price per item : ${tool.price}</p>
          <p className="font-bold">
            Available product :{" "}
            <span id="available-item">{tool.availableQuantity}</span>
          </p>
          <p className="font-bold mb-3">
            Order Minimum Range :{" "}
            <span id="minimum-order">{tool.minimumOrderQuantity}</span>
          </p>

          <form onSubmit={handleComplete}>
            <div className=" w-96 bg-base-100 ">
              <input
                type="text"
                name="name"
                value={user?.displayName}
                className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
                disabled
              />
              <input
                type="email"
                name="email"
                value={user?.email}
                className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
                disabled
              />
              <input
                type="text"
                name="product"
                value={tool.name}
                placeholder="Product Name"
                className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
                required
                disabled
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
                id="quantity-input"
                type="text"
                name="quantity"
                placeholder="Total Quantity Buy"
                className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
                required
              />
              <p className="text-red-500 font-bold">{inputError}</p>
              <input
                className="bg-primary text-white font-semibold w-full max-w-xs rounded-md py-3 cursor-pointer"
                type="submit"
                value="COMPLETE"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
