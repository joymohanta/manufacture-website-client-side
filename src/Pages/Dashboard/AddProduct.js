import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const productDetail = (event) => {
    event.preventDefault();
    const itemDetail = {
      name: event.target.name.value,
      price: event.target.price.value,
      minimumOrderQuantity: event.target.minimumOrderQuantity.value,
      availableQuantity: event.target.availableQuantity.value,
      description: event.target.description.value,
      img: event.target.img.value,
    };
    console.log(itemDetail);
    fetch("http://localhost:5000/tool", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("New Tools Added Successfully");
      });
  };
  return (
    <div>
      <h2 className="text-primary font-semibold">Add a new Product</h2>
      <form className="flex justify-center mt-10" onSubmit={productDetail}>
        <div className=" w-96 bg-base-100 ">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
            required
          />
          <input
            type="number"
            name="minimumOrderQuantity"
            placeholder="MinimumOrderQuantity"
            className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
            required
          />
          <input
            type="number"
            name="availableQuantity"
            placeholder="AvailableQuantity"
            className="input input-bordered input-primary font-bold text-base w-full max-w-xs mb-2"
            required
          />
          <textarea
            type="text"
            name="description"
            placeholder="Description"
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
            value="ADD"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
