import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold mt-6 mb-4 ">
        WELCOME TO MY PORTFOLIO
      </h2>
      <div className="bar"></div>
      <h3 className="text-center text-2xl font-bold mt-12">JOY MOHANTA</h3>
      <h4 className="text-center text-xl font-bold mb-28">
        joyroy1062@gmail.com
      </h4>
      <div className="parent">
        <div className="section">
          <h2 className="text-primary font-bold text-lg mb-6">QUALIFICATION</h2>
          <p className="text-secondary font-semibold">
            I am a student of honour's according to Bangladeshi curriculum. I
            had a great interest of learning code. I was looking for a course
            like this. And finally I got this. I have learned{" "}
            <span className="text-font-bold text-primary">
              html, css, javascript, react.js, node.js, mongodb etc with several
              components, framework and libraries
            </span>{" "}
            . Now I can say I am a full stack web developer. I have couple of
            dozens work and project experience. I shared some these example and
            link.{" "}
            <span className="text-primary">
              Basicaly I don't beleive in judge a person to see at a glance
              rather VIVA VOCE.
            </span>
          </p>
        </div>
        <div className="section">
          <h3 className="text-primary font-bold text-lg mb-6">
            PROJECT LIVE LINK
          </h3>
          <p className="text-secondary font-semibold">
            I am giving couple of live project link below. Check this out in a
            real quick-
          </p>
          <a
            className="text-secondary font-semibold"
            href="https://laptop-dealer-stock.web.app/"
          >
            https://laptop-dealer-stock.web.app/
          </a>{" "}
          <br />
          <a
            className="text-secondary font-semibold"
            href="https://doctor-surgical.web.app/"
          >
            https://doctor-surgical.web.app/
          </a>{" "}
          <br />
          <a
            className="text-secondary font-semibold"
            href="https://super-cat-fadc66.netlify.app/home"
          >
            https://super-cat-fadc66.netlify.app/home
          </a>{" "}
          <br />
          <a
            className="text-secondary font-semibold"
            href="https://heartfelt-cascaron-fc11c5.netlify.app/"
          >
            https://heartfelt-cascaron-fc11c5.netlify.app/
          </a>{" "}
          <br />
          <a
            className="text-secondary font-semibold"
            href="https://clever-edison-1ea464.netlify.app/"
          >
            https://clever-edison-1ea464.netlify.app/
          </a>{" "}
          <br />
          <a
            className="text-secondary font-semibold"
            href="https://practical-booth-1f1928.netlify.app/"
          >
            https://practical-booth-1f1928.netlify.app/
          </a>{" "}
          <br />
          <a
            className="text-secondary font-semibold"
            href="https://musing-perlman-a36d32.netlify.app/
"
          >
            https://musing-perlman-a36d32.netlify.app/
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
