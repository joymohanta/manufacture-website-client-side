import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h2 className="mt-6 py-8 bg-primary text-center text-2xl font-bold text-secondary">
        OUR TOOLS
      </h2>
      <div className="grid grid-cols-3 gap-x-10 pb-6">
        {tools.map((tool) => (
          <Product key={tool._id} tool={tool}></Product>
        ))}
      </div>
    </div>
  );
};

export default Tools;
