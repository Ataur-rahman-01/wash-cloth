import React from "react";
import profile1 from "../../../Images/testimonial1.jpg";
import profile2 from "../../../Images/testimonial2.jpg";
import profile3 from "../../../Images/testimonial3.jpg";
import Testimonial from "../Testimonialinfo/Testimonial";
const fakeData = [
  {
    name: "josim",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, aliquam?",
    img: profile1,
  },
  {
    name: "Manna",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, aliquam?",
    img: profile2,
  },
  {
    name: "Dipjol",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, aliquam?",
    img: profile3,
  },
];

const Testimonialdata = () => {
  return (
    <div>
      <div>
        <h2 className="text-center text-danger">Testimonial</h2>
        <hr />
      </div>
      <div className="row m-5">
        {fakeData.map((info) => (
          <Testimonial info={info}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonialdata;
