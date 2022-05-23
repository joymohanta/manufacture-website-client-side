import React from "react";
import "./BusinessMoral.css";
import CountUp from "react-countup";

const BusinessMoral = () => {
  return (
    <div>
      <h3 className="font-extrabold text-center pt-10 text-3xl">
        MILLIONS BUSINESS TRUST US
      </h3>
      <p className="text-center pb-6">CHECK OUR USERS EXPECTATION</p>
      <div className="bar"></div>
      <div className="summary text-center pb-16">
        <div className="per-summary">
          <i class="fa-solid fa-flag-checkered fa-3x text-primary"></i>
          <h1 className="text-3xl font-bold pt-4">
            <CountUp start={0} end={89} delay={5} duration={5}></CountUp>
          </h1>
          <p className="text-primary font-semibold">
            <small>Countries</small>
          </p>
        </div>
        <div className="per-summary">
          <i class="fa-solid fa-laptop-file fa-3x text-primary"></i>
          <h3 className="text-3xl font-bold pt-4">
            <CountUp start={0} end={500} delay={5} duration={8}></CountUp>+
          </h3>
          <p className="text-primary font-semibold">
            <small>Complete Projects</small>
          </p>
        </div>
        <div className="per-summary">
          <i class="fa-solid fa-users fa-3x text-primary"></i>
          <h3 className="text-3xl font-bold pt-4">
            <CountUp start={0} end={1200} delay={5} duration={15}></CountUp>+
          </h3>
          <p className="text-primary font-semibold">
            <small>Happy Clients</small>
          </p>
        </div>
        <div className="per-summary">
          <i class="fa-solid fa-thumbs-up fa-3x text-primary"></i>
          <h3 className="text-3xl font-bold pt-4">
            <CountUp start={0} end={700} delay={5} duration={10}></CountUp>+
          </h3>
          <p className="text-primary font-semibold">
            <small>Feedbacks</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessMoral;
