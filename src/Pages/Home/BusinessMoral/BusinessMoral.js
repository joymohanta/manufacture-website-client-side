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
          <i class="fa-solid fa-screwdriver-wrench fa-4x text-primary"></i>
          <h1 className="text-4xl font-bold pt-4">
            <CountUp start={0} end={80} delay={5} duration={5}></CountUp>+
          </h1>
          <p className="text-primary font-semibold">
            <small>Total tools</small>
          </p>
        </div>
        <div className="per-summary">
          <i class="fa-solid fa-chart-pie fa-4x text-primary"></i>
          <h3 className="text-4xl font-bold pt-4">
            <CountUp start={0} end={110} delay={5} duration={8}></CountUp>M+
          </h3>
          <p className="text-primary font-semibold">
            <small>Annual revenue</small>
          </p>
        </div>
        <div className="per-summary">
          <i class="fa-solid fa-users fa-4x text-primary"></i>
          <h3 className="text-4xl font-bold pt-4">
            <CountUp start={0} end={150} delay={5} duration={10}></CountUp>+
          </h3>
          <p className="text-primary font-semibold">
            <small>Clients we serve</small>
          </p>
        </div>
        <div className="per-summary">
          <i class="fa-solid fa-thumbs-up fa-4x text-primary"></i>
          <h3 className="text-4xl font-bold pt-4">
            <CountUp start={0} end={59} delay={5} duration={5}></CountUp>K+
          </h3>
          <p className="text-primary font-semibold">
            <small>Reviews</small>
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="contact_align">
          <h3 className="font-bold text-2xl text-primary">
            Have any question about us?
          </h3>
          <p className="font-semibold">
            <small>Don't hesitate to contact with us</small>
          </p>
        </div>
        <a id="button" className="contact_align" href="#">
          Contact
        </a>
      </div>
    </div>
  );
};

export default BusinessMoral;
