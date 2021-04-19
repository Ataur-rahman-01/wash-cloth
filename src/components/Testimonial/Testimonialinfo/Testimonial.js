import React from "react";

const Testimonial = ({ info }) => {
  return (
    <div className="col-md-4  ">
      <div className="shadow-lg p-3 m-5 bg-body rounded">
        <div className="text-center">
          <img
            style={{ height: "150px" }}
            className="img-fluid rounded-circle text-center"
            src={info.img}
            alt=""
          />
        </div>

        <h5 className="text-center">{info.name}</h5>
        <p>{info.review}</p>
      </div>
    </div>
  );
};

export default Testimonial;
