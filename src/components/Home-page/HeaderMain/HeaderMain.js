import React from "react";
import service from "../../../Images/girl-4906254_1280.jpg";

const HeaderMain = () => {
  return (
    <main>
      <div className="row m-5 d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
          <p>HELLO AND WELCOME</p>
          <h2>
            Start Your Day <br /> With Clean
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            dicta.
          </p>
          <button className="btn btn-info">Get Services</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid rounded-pill" src={service} alt="" />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
