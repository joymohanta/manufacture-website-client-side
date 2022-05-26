import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div id="#contact" className="bg-neutral footer">
        <div className="text-white">
          <h2 className="text-white text-3xl font-bold pb-6">DRILL'S MARKET</h2>
          <p className="pb-4">
            Skilled is also likely to be focused on fast and
            <br />
            bright teaching, courses to..
          </p>
          <h4>
            <i className="fa-solid fa-location-dot pr-4"></i>
            15 Elephant Road, Dhaka, Bangladesh
          </h4>
          <p>
            <i className="fa-solid fa-phone pr-2"></i> +88017222222
          </p>
          <p>
            <i className="fa-solid fa-envelope pr-3"></i> joyroy1062@gmail.com
          </p>
        </div>
        <div className="text-white">
          <h2 className="text-white text-3xl font-bold pb-6">FAQ LINKS</h2>
          <a href="#" className="text">
            FAQ
          </a>
          <a href="#" className="text">
            Delivery Info
          </a>
          <a href="#" className="text">
            Gift
          </a>
          <a href="#" className="text">
            Help
          </a>
          <a href="#" className="text">
            Discount
          </a>
          {/* <div className="v_bar"></div> */}
        </div>
        <div>
          <h2 className="text-white text-3xl font-bold pb-6">NEWSLETTER</h2>
          <p className="text-white pb-4">
            You can be always up to date with our company news!
          </p>
          <input type="text" placeholder="Enter your email" />{" "}
          <button className="bg-secondary px-2 rounded text-white">
            Submit
          </button>
          <h2 className="font-bold text-2xl text-white pt-4">Useful Links</h2>
          <p className="ml-1">
            <a href="#">
              <i className="fa-brands fa-facebook-square text-white fa-2xl mr-4 "></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter-square fa-2xl text-white mr-4"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-google-plus-square text-white fa-2xl mr-4"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube-square text-white fa-2xl mr-4"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="bg-accent py-8 text-center text-white">
        <p> Copyright &copy; 2022 - New drill's world - All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
