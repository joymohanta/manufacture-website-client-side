import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(
        `https://manufacture-website.onrender.com/order?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://manufacture-website.onrender.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };

  return (
    <div>
      <h2>My orders: {orders.length} </h2>
      <div className="overflow-x-auto mt-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price Per Item</th>
              <th>Total Product</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.price}</td>
                <td>{order.totalQuantity}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      {" "}
                      <button className="btn btn-xs btn-success">
                        Pay
                      </button>{" "}
                    </Link>
                  )}
                  {(order.price && order.paid && (
                    <span className="text-success">Paid</span>
                  )) || (
                    <button
                      onClick={() => {
                        handleDelete(order._id);
                      }}
                      className="btn btn-xs btn-accent"
                    >
                      delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
