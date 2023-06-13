import React from "react";
import "./Divider.scss";
import phoneImg from "./../../images/illustration-phones.svg";

const Divider = () => {
  return (
    <section className="divider">
      <div className="phone-container">
        <img src={phoneImg} alt="phone" />
      </div>
      <div className="text-area">
        <h3>State of the Art Infrastructure</h3>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
};

export default Divider;
