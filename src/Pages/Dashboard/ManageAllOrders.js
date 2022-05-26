import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://secure-bayou-16364.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h2>admin page here all orders will show {orders.length} </h2>
    </div>
  );
};

export default ManageAllOrders;
