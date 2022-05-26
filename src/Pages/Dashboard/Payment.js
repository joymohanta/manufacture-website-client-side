import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3VDBH0m3F56utZrXchO7731Uq65xMhWmEqAtzyqDoY3vVwh6eUJFBmHlIKNF2LxczvGjRH6fKxcT4GG3CUIx5C00SvmJdWM7"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="text-primary font-semibold">Complete the Payment</h3>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <h2 class="card-title text-primary font-bold">
            PAYING FOR : {order.productName}
          </h2>
          <p>We will notify you the shipped log after payment</p>
          <h2 className="text-secondary font-bold">
            Total : ${parseInt(order.price) * parseInt(order.totalQuantity)}{" "}
          </h2>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
